export type Proposal = { problem: string; firstStep: string; benefit: string; verify: string };
export type Message = { role: 'user' | 'assistant'; text: string };
export type Settings = { mock: boolean; testMail: boolean; maxInput: number; available?: boolean; message?: string };
export const greeting = 'Dobrý den, jsem AI konzultant Petra Slavíka. Pomůžu vám najít, jak může web nebo automatizace podpořit vaše podnikání. Čím se vaše firma zabývá a co chcete zlepšit?';
export const proposalLabels: Record<keyof Proposal, string> = { problem: 'Pochopený problém', firstStep: 'Doporučený první krok', benefit: 'Možný praktický přínos', verify: 'Co ověří Petr' };
export function proposalSummary(proposal: Proposal | null, messages: Message[]) {
  const answers = messages.filter(m => m.role === 'user').map(m => m.text);
  return [answers.length ? `Moje zadání:\n${answers.join('\n')}` : '', proposal ? `\nPředběžný návrh konzultanta:\n${Object.entries(proposal).map(([key, value]) => `${proposalLabels[key]}: ${value}`).join('\n')}` : ''].filter(Boolean).join('\n').slice(0,5000);
}
