import { readFileSync } from 'node:fs';
import { ApiError, validateResult } from './validation.mjs';
const rules = readFileSync(new URL('./instructions.md', import.meta.url), 'utf8');
const business = readFileSync(new URL('./business.md', import.meta.url), 'utf8');
const protocol = readFileSync(new URL('./protocol.md', import.meta.url), 'utf8');
export const systemInstruction = `${rules}\n\nSchválené firemní podklady:\n${business}\n${protocol}`;
export async function geminiReply(history, config, fetcher = fetch) {
  const response = await fetcher(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(config.model)}:generateContent`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': config.key },
    signal: AbortSignal.timeout(config.timeout),
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemInstruction.replace('MAX_RESPONSE', String(config.maxResponse)) }] },
      contents: history.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.text }] })),
      generationConfig: { temperature: 0.3, maxOutputTokens: config.outputTokens, thinkingConfig: config.model.startsWith('gemini-2.5') ? { thinkingBudget: 0 } : { thinkingLevel: config.model.includes('flash-lite') ? 'minimal' : 'low' }, responseMimeType: 'application/json',
        responseSchema: { type: 'OBJECT', properties: { reply: {type:'STRING'}, contact:{type:'BOOLEAN'}, proposal:{ type:'OBJECT', nullable:true, properties: Object.fromEntries(['problem','firstStep','benefit','verify'].map(k=>[k,{type:'STRING'}])), required:['problem','firstStep','benefit','verify'] } }, required:['reply','contact','proposal'] }
      }
    })
  });
  if (!response.ok) throw new ApiError(response.status === 429 ? 429 : 502, response.status === 429 ? 'Kvóta AI je vyčerpaná. Můžete poslat zprávu přímo Petrovi.' : 'AI je nyní nedostupná. Můžete poslat zprávu přímo Petrovi.');
  const payload = await response.json();
  try { return validateResult(JSON.parse(payload.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('') || ''), config.maxResponse); }
  catch { throw new ApiError(502, 'AI nevrátila použitelnou odpověď. Můžete poslat zprávu přímo Petrovi.'); }
}
