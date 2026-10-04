import { randomUUID, createHash } from 'node:crypto';
import { readFileSync, writeFileSync, renameSync } from 'node:fs';
import { ApiError, text, validateLead, validateResult } from './validation.mjs';
import { geminiReply, systemInstruction } from './gemini.mjs';
import { mockReply } from './mock.mjs';
import { sendLead } from './mail.mjs';
import { monthlyLimit, reserveBudget } from './budget.mjs';
const number = (env, key, fallback, upper) => {
  const value = Number(env[key] || fallback);
  if (!Number.isInteger(value) || value < 1 || value > upper) throw new Error(`Invalid configuration: ${key}`);
  return value;
};
export function configuration(env = process.env) {
  return {
    mock: env.CONSULTANT_MODE !== 'gemini' || !env.GEMINI_API_KEY,
    key: env.GEMINI_API_KEY, model:env.GEMINI_MODEL || 'gemini-3.5-flash-lite',
    mailMode:env.CONSULTANT_MAIL_MODE || 'test', mailEndpoint:env.CONTACT_MAIL_ENDPOINT,
    maxInput:number(env,'CONSULTANT_MAX_INPUT',1500,5000), maxResponse:number(env,'CONSULTANT_MAX_RESPONSE',3500,10000),
    maxMessages:number(env,'CONSULTANT_MAX_MESSAGES',24,60), sessionRequests:number(env,'CONSULTANT_SESSION_REQUESTS',12,30),
    ipRequests:number(env,'CONSULTANT_IP_REQUESTS',40,1000), leadRequests:number(env,'CONSULTANT_LEAD_REQUESTS',5,100), timeout:number(env,'CONSULTANT_TIMEOUT_MS',15000,60000),
    dailyTokens:number(env,'CONSULTANT_DAILY_TOKEN_BUDGET',200000,10000000), dailyCalls:number(env,'CONSULTANT_DAILY_CALLS',30,10000),
    outputTokens:number(env,'CONSULTANT_OUTPUT_TOKENS',1200,4000), usageFile:env.CONSULTANT_USAGE_FILE || '.consultant-usage.json',
    monthlyNanoUsd:monthlyLimit(env.CONSULTANT_MONTHLY_BUDGET_USD ?? '1'),
    sessionTtl:30 * 60 * 1000, capacity:1000,
  };
}
export function createConsultantApi(config, { generate = geminiReply, mail = sendLead } = {}) {
  const sessions = new Map(), ips = new Map(), salt = randomUUID();
  let budget = { day:'', tokens:0, calls:0 };
  if (!config.mock) {
    try { budget = JSON.parse(readFileSync(config.usageFile,'utf8')); }
    catch (error) { if (error.code !== 'ENOENT') throw new Error('Cannot read consultant usage budget'); }
    if (typeof budget.day !== 'string' || !Number.isFinite(budget.tokens) || !Number.isFinite(budget.calls)) throw new Error('Invalid usage budget');
  }
  function reserve(history) {
    const day = new Date().toISOString().slice(0,10);
    // Conservative upper bound: each UTF-8 byte as an input token, plus output and envelope allowance.
    const input = Buffer.byteLength(systemInstruction + JSON.stringify(history),'utf8') + 4096;
    const next = reserveBudget(budget,config,input,config.outputTokens,day);
    writeFileSync(`${config.usageFile}.tmp`, JSON.stringify(next), {mode:0o600});
    renameSync(`${config.usageFile}.tmp`,config.usageFile);
    budget = next; // Failed and timed-out calls remain charged against the local budget.
  }
  const sweep = setInterval(()=>{
    const now = Date.now();
    for (const [key,value] of sessions) if (value.expires < now) sessions.delete(key);
    for (const [key,value] of ips) if (value.expires < now) ips.delete(key);
  },60000);
  sweep.unref();
  const reply = (res, status, payload) => { res.statusCode = status; res.setHeader('Content-Type','application/json; charset=utf-8'); res.setHeader('Cache-Control','no-store'); res.end(JSON.stringify(payload)); };
  return async function handler(req,res,next) {
    const url = new URL(req.url || '/', 'http://localhost');
    const route = url.pathname === '/consultant.php' ? `/api/consultant/${url.searchParams.get('action') || ''}` : url.pathname;
    if (!route?.startsWith('/api/consultant/')) return next?.();
    try {
      if (route === '/api/consultant/config' && req.method === 'GET') return reply(res,200,{mock:config.mock, testMail:config.mock || config.mailMode !== 'live', maxInput:config.maxInput});
      if (!['/api/consultant/chat','/api/consultant/lead'].includes(route)) throw new ApiError(404,'Neznámý požadavek.');
      if (req.method !== 'POST') throw new ApiError(405,'Nepovolená metoda.');
      if (req.headers.origin && new URL(req.headers.origin).host !== req.headers.host) throw new ApiError(403,'Nepovolený původ požadavku.');
      if (!req.headers['content-type']?.startsWith('application/json')) throw new ApiError(415,'Požadován JSON.');
      const now = Date.now();
      const ip = createHash('sha256').update(salt + (req.socket.remoteAddress || '')).digest('hex');
      let rate = ips.get(ip);
      if (!rate || rate.expires < now) {
        if (ips.size >= config.capacity) throw new ApiError(503,'Služba je vytížená. Zkuste to později.');
        rate = {count:0, leadCount:0, expires:now + 60 * 60 * 1000}; ips.set(ip,rate);
      }
      if (route.endsWith('/lead') ? ++rate.leadCount > config.leadRequests : ++rate.count > config.ipRequests) throw new ApiError(429,'Limit požadavků je vyčerpaný. Napište přímo na petrslavikweb@gmail.com.');
      let raw = '';
      for await (const chunk of req) {
        raw += chunk.toString();
        if (Buffer.byteLength(raw) > 16000) throw new ApiError(413,'Požadavek je příliš dlouhý.');
      }
      let data; try { data = JSON.parse(raw); } catch { throw new ApiError(400,'Neplatný JSON.'); }
      if (!data || typeof data !== 'object' || Array.isArray(data)) throw new ApiError(400,'Neplatný požadavek.');
      const cookie = req.headers.cookie?.split(';').map(s=>s.trim()).find(s=>s.startsWith('consultant_session='))?.split('=')[1];
      let session = sessions.get(cookie);
      if (cookie && (!session || session.expires < now)) {
        res.setHeader('Set-Cookie','consultant_session=; HttpOnly; SameSite=Strict; Path=/api/consultant; Max-Age=0');
        throw new ApiError(410,'Konzultace vypršela. Můžete znovu poslat zprávu přímo Petrovi.');
      }
      if (!session) {
        if (sessions.size >= config.capacity) throw new ApiError(503,'Služba je vytížená.');
        const id = randomUUID();
        session = {history:[], proposal:null, count:0, busy:false, submitted:null, expires:now + config.sessionTtl};
        sessions.set(id,session);
        res.setHeader('Set-Cookie',`consultant_session=${id}; HttpOnly; SameSite=Strict; Path=/api/consultant; Max-Age=1800${req.socket.encrypted ? '; Secure' : ''}`);
      }
      if (session.busy) throw new ApiError(409,'Předchozí požadavek ještě zpracováváme.');
      if (route.endsWith('/lead') && session.submitted) return reply(res,200,session.submitted);
      if (session.submitted) throw new ApiError(409,'Poptávka již byla odeslána.');
      session.busy = true;
      try {
        if (route.endsWith('/chat')) {
          const message = text(data.message,config.maxInput);
          if (session.count >= config.sessionRequests || session.history.length + 2 > config.maxMessages) throw new ApiError(429,'Limit konzultace je vyčerpaný. Můžete předat dosavadní podklady Petrovi.');
          session.count++;
          const history = [...session.history,{role:'user',text:message}];
          if (!config.mock) reserve(history);
          const result = validateResult(config.mock ? mockReply(history) : await generate(history,config),config.maxResponse);
          // Force a usable proposal by the sixth answer; no extended interrogation.
          if (!result.proposal && !result.contact && history.filter(m=>m.role==='user').length >= 6) throw new ApiError(502,'Návrh se nepodařilo dokončit. Dosavadní podklady můžete předat Petrovi.');
          session.history = [...history,{role:'assistant',text:JSON.stringify(result)}];
          if (result.proposal) session.proposal = result.proposal;
          return reply(res,200,{...result, mock:config.mock});
        }
        const lead = validateLead(data);
        session.submitted = await mail(lead,session,config);
        session.history = []; session.proposal = null;
        return reply(res,200,session.submitted);
      } finally { session.busy = false; }
    } catch (error) {
      reply(res, error instanceof ApiError ? error.status : 503, {message:error instanceof ApiError ? error.message : 'Služba je nyní nedostupná. Můžete poslat zprávu přímo Petrovi.'});
    }
  };
}
export function consultantPlugin(env) {
  const api = createConsultantApi(configuration(env));
  return {name:'consultant-server',configureServer(server){server.middlewares.use(api);},configurePreviewServer(server){server.middlewares.use(api);}};
}
