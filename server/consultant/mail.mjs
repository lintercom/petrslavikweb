import { ApiError, formatLead } from './validation.mjs';
export async function sendLead(lead, session, config, fetcher = fetch) {
  if (config.mock || config.mailMode !== 'live') return { success: true, test: true };
  if (!config.mailEndpoint) throw new ApiError(503, 'Odesílání není nakonfigurováno. Napište na petrslavikweb@gmail.com.');
  const endpoint = new URL(config.mailEndpoint);
  if (endpoint.protocol !== 'https:' && !['localhost','127.0.0.1'].includes(endpoint.hostname)) throw new ApiError(503, 'Neplatná konfigurace odesílání.');
  const response = await fetcher(endpoint, { method:'POST', signal:AbortSignal.timeout(config.timeout), headers: { Accept:'application/json' }, body: new URLSearchParams({ name:lead.name, email:lead.email, phone:lead.phone, service: lead.kind === 'direct' ? 'Přímá zpráva' : 'AI konzultace', message:formatLead(lead,session), website:'' }) });
  const payload = await response.json().catch(()=>null);
  if (!response.ok || payload?.success !== true) throw new ApiError(502, 'Zprávu se nepodařilo odeslat. Zkuste to znovu nebo napište na petrslavikweb@gmail.com.');
  return { success:true, test:false };
}
