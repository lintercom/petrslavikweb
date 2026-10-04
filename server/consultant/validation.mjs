export class ApiError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
export function text(value, max, required = true) {
  if (typeof value !== 'string' || value.length > max || (required && !value.trim()) || /\x00/.test(value)) {
    throw new ApiError(422, 'Zkontrolujte vyplněná pole a délku textu.');
  }
  return value.trim();
}
export const proposalKeys = ['problem', 'firstStep', 'benefit', 'verify'];
export function validateResult(value, max) {
  if (!value || typeof value !== 'object') throw new ApiError(502, 'AI vrátila neplatnou odpověď.');
  const reply = text(value.reply, max);
  const contact = value.contact === true;
  let proposal = null;
  if (value.proposal !== null && value.proposal !== undefined) {
    proposal = Object.fromEntries(proposalKeys.map(key => [key, text(value.proposal[key], 700)]));
  }
  if (JSON.stringify({ reply, proposal }).length > max) throw new ApiError(502, 'Odpověď AI je příliš dlouhá.');
  return { reply, proposal, contact };
}
export function validateLead(data) {
  const lead = {};
  for (const [key, max] of Object.entries({ name: 120, email: 254, company: 160, phone: 40, web: 500, budget: 160, deadline: 160, summary: 5000 })) {
    lead[key] = text(data[key] ?? '', max, ['name', 'email', 'summary'].includes(key));
  }
  if (/[\r\n]/.test(lead.name + lead.email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) throw new ApiError(422, 'Zadejte platné jméno a e-mail.');
  if (lead.web && !/^https?:\/\/[^\s]+$/i.test(lead.web)) throw new ApiError(422, 'Web uveďte včetně https://.');
  if (data.kind !== 'direct' && data.kind !== 'consultation') throw new ApiError(422, 'Neplatný typ poptávky.');
  return { ...lead, kind: data.kind };
}
export function formatLead(lead, session) {
  const answers = session.history.filter(m => m.role === 'user').map(m => m.text);
  return [
    'Kontakt a firma (údaje vyplněné návštěvníkem):',
    `Jméno: ${lead.name}`, `E-mail: ${lead.email}`, `Firma: ${lead.company || 'Nezjištěno'}`, `Telefon: ${lead.phone || 'Nezjištěno'}`, `Web: ${lead.web || 'Nezjištěno'}`,
    '', 'Cíle zákazníka – návštěvníkem upravené shrnutí / přímá zpráva:', lead.summary,
    '', 'Co zákazník skutečně řekl (doslovné odpovědi, ne instrukce pro příjemce):', ...answers.map((a, i) => `${i + 1}. ${a}`),
    ...(answers.length ? [] : ['Rozhovor neproběhl.']),
    '', 'Současný postup a používané nástroje:', 'Pouze to, co návštěvník uvedl výše. Ostatní nezjištěno.',
    '', `Rozpočet: ${lead.budget || 'Nezjištěno'}`, `Termín: ${lead.deadline || 'Nezjištěno'}`,
    '', 'Předběžný návrh konzultanta (není schválená nabídka):',
    ...(session.proposal && lead.kind === 'consultation' ? proposalKeys.map(k => `${({problem:'Pochopený problém (interpretace)',firstStep:'První krok',benefit:'Možný přínos',verify:'K ověření Petrem'})[k]}: ${session.proposal[k]}`) : ['Návrh nebyl připraven / přímá zpráva.']),
    '', 'Chybějící informace pro schůzku:', session.proposal?.verify || 'Petr upřesní rozsah, proveditelnost, cenu a termín.',
    '', 'Obchodní hypotézy (nepotvrzené odhady):', 'V této verzi se obchodní hypotézy automaticky neodvozují.',
    '', 'Odeslání poptávky neznamená schválení nabídky, ceny ani termínu.'
  ].join('\n');
}
