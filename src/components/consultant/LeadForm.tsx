import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { consultantEndpoint } from './api';
import { Button } from '@/components/ui/Button';
export const fieldClass = 'w-full border-2 border-brand-black bg-brand-white p-3 text-base text-brand-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-black';
export function LeadForm({ initialSummary, direct, testMail, onSuccess, onBack }: { initialSummary: string; direct: boolean; testMail: boolean | null; onSuccess: (test: boolean) => void; onBack?: () => void }) {
  const [busy,setBusy] = useState(false), [error,setError] = useState('');
  const lock = useRef(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    lock.current = true; setBusy(true); setError('');
    try {
      const response = await fetch(consultantEndpoint('lead'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...data,kind:direct ? 'direct' : 'consultation'}),signal:AbortSignal.timeout(25000)});
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error(result.message || 'Odeslání se nezdařilo.');
      onSuccess(result.test === true);
    } catch (e) { setError(e instanceof Error && e.name !== 'TimeoutError' ? e.message : 'Potvrzení odeslání se nepodařilo získat. Zkuste to znovu.'); }
    finally { lock.current = false; setBusy(false); }
  }
  const fields = direct ? [['name','Jméno','text',true],['email','E-mail','email',true]] : [['name','Jméno','text',true],['email','E-mail','email',true],['company','Firma','text',false],['phone','Telefon','tel',false],['web','Web (https://…)','url',false],['budget','Rozpočet','text',false],['deadline','Termín','text',false]];
  return <form onSubmit={submit} className="space-y-6" aria-label={direct ? 'Přímá zpráva Petrovi' : 'Předání poptávky Petrovi'}>
    <h3 className="text-2xl font-extrabold">{direct ? 'Napište přímo Petrovi.' : 'Připravme podklady pro Petra.'}</h3>
    <p className="text-sm">{testMail ? 'Testovací odeslání — e-mail se neodešle.' : direct ? 'Zprávu a kontaktní údaje odešleme Petrovi až po vašem kliknutí na „Odeslat poptávku“.' : 'Podklady z rozhovoru, shrnutí a kontaktní údaje odešleme Petrovi pouze s vaším souhlasem — kliknutím na „Odeslat poptávku“.'} Povinné údaje označuje *.</p>
    <div className="grid sm:grid-cols-2 gap-5">{fields.map(([name,label,type,required])=><label key={String(name)} className="block text-sm font-bold">{String(label)}{required ? ' *' : ' (volitelné)'}<input className={`${fieldClass} mt-2`} name={String(name)} type={String(type)} required={Boolean(required)} maxLength={name === 'email' ? 254 : name === 'web' ? 500 : name === 'phone' ? 40 : name === 'name' ? 120 : 160} autoComplete={name === 'name' ? 'name' : name === 'email' ? 'email' : name === 'phone' ? 'tel' : name === 'company' ? 'organization' : 'off'} /></label>)}</div>
    <label className="block text-sm font-bold">{direct ? 'Zpráva *' : 'Shrnutí k opravě a doplnění *'}<textarea className={`${fieldClass} mt-2 resize-y min-h-40`} name="summary" required maxLength={5000} rows={direct ? 5 : 9} defaultValue={initialSummary} /></label>
    <p className="text-sm text-brand-grey-dark">Údaje slouží výhradně pro vyřízení vašeho dotazu nebo poptávky. <Link className="underline focus-visible:outline" to="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link>.</p>
    {error && <p role="alert" className="text-red-700 text-sm">{error} <a className="underline" href="mailto:petrslavikweb@gmail.com">Napsat e-mail</a></p>}
    <div className="flex flex-wrap gap-3"><Button type="submit" disabled={busy} isLoading={busy}>{busy ? 'Odesílám…' : 'Odeslat poptávku'}</Button>{onBack && <Button type="button" variant="secondary" disabled={busy} onClick={onBack}>Zpět</Button>}</div>
  </form>;
}
