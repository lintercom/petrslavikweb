import { useEffect, useRef, useState } from 'react';
import { consultantEndpoint } from './api';
import { Button } from '@/components/ui/Button';
import { trackEvent, type EventName } from '@/lib/analytics';
import { LeadForm, fieldClass } from './LeadForm';
import { greeting, proposalLabels, proposalSummary, type Message, type Proposal, type Settings } from './types';
export function Consultant() {
  const [messages,setMessages] = useState<Message[]>([{role:'assistant',text:greeting}]);
  const [settings,setSettings] = useState<Settings | null>(null);
  const [draft,setDraft] = useState(''), [busy,setBusy] = useState(false), [error,setError] = useState('');
  const [proposal,setProposal] = useState<Proposal | null>(null), [refining,setRefining] = useState(false);
  const [form,setForm] = useState<'direct' | 'consultation' | null>(null);
  const [success,setSuccess] = useState<boolean | null>(null);
  const log = useRef<HTMLDivElement>(null), textarea = useRef<HTMLTextAreaElement>(null), lock = useRef(false);
  const started = useRef(false), shown = useRef(false), formHeading = useRef<HTMLDivElement>(null);
  const metric = (name: EventName) => { if (settings && !settings.mock && !settings.testMail && !import.meta.env.DEV) trackEvent(name); };
  useEffect(()=>{const controller = new AbortController(); fetch(consultantEndpoint('config'),{signal:controller.signal}).then(r=>{if(!r.ok)throw new Error();return r.json();}).then((config: Settings)=>{setSettings(config);if(config.available === false){setError(config.message || 'AI konzultace zatím není aktivní. Napište přímo Petrovi.');setForm('direct');}}).catch(()=>{if(!controller.signal.aborted){setError('Konzultant je nedostupný. Můžete poslat zprávu přímo Petrovi.');setForm('direct');}});return()=>controller.abort();},[]);
  useEffect(()=>{if(log.current)log.current.scrollTop=log.current.scrollHeight;},[messages,busy]);
  useEffect(()=>{if(refining)textarea.current?.focus({preventScroll:true});},[refining]);
  useEffect(()=>{if(form || success !== null)formHeading.current?.focus({preventScroll:true});},[form,success]);
  function openContact(direct: boolean, fallback = false) {
    setForm(direct ? 'direct' : 'consultation');
    metric('consultant_contact_opened'); if(fallback || direct)metric('consultant_fallback_used');
  }
  async function send(event?: React.FormEvent) {
    event?.preventDefault();
    if(lock.current || !draft.trim() || !settings)return;
    lock.current=true; setBusy(true); setError('');
    const message = draft.trim();
    try {
      const response = await fetch(consultantEndpoint('chat'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message}),signal:AbortSignal.timeout(25000)});
      const result = await response.json();
      if(!response.ok)throw new Error(result.message || 'AI je nedostupná.');
      if(!started.current){metric('consultant_started');started.current=true;}
      setMessages(previous=>[...previous,{role:'user',text:message},{role:'assistant',text:result.reply}]);setDraft('');
      if(result.proposal){setProposal(result.proposal);setRefining(false);if(!shown.current){metric('consultant_proposal_shown');shown.current=true;}}
      if(result.contact)openContact(false);
    }catch(e){setError(e instanceof Error && e.name !== 'TimeoutError' ? e.message : 'AI neodpověděla včas. Můžete poslat zprávu přímo Petrovi.');}
    finally{lock.current=false;setBusy(false);textarea.current?.focus({preventScroll:true});}
  }
  return <div className="min-w-0">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Pojďme najít řešení pro vaše podnikání.</h2>
    <p className="text-brand-grey-dark leading-relaxed mb-8">Popište, co chcete zlepšit. AI konzultant vám pomůže ujasnit možnosti a připravit podklady pro konzultaci s Petrem.</p>
    <div className="border-2 border-brand-black shadow-[5px_5px_0_0_#121212]">
      <div className="bg-brand-black text-brand-white px-5 py-4 flex flex-wrap gap-2 justify-between items-center"><span className="font-extrabold uppercase tracking-widest text-sm">AI konzultant</span><span className="text-xs">{settings ? settings.available === false ? 'Přímý kontakt' : settings.mock ? 'MOCK · ukázkové odpovědi' : 'Gemini' : error ? 'Nedostupný' : 'Připojuji…'}</span></div>
      {settings?.mock && <p className="border-b-2 border-brand-black px-5 py-3 text-sm">Lokální test: odpovědi jsou simulované, Gemini se nevolá a e-maily se neodesílají.</p>}
      {!settings?.mock && settings && settings.available !== false && <p className="px-5 pt-4 text-xs text-brand-grey-dark">Odpovědi připravuje Google Gemini z vašeho popisu. Do rozhovoru nezadávejte osobní ani důvěrné údaje.</p>}
      <div className="p-4 sm:p-6">
        {success !== null ? <div ref={formHeading} tabIndex={-1} className="space-y-4 focus-visible:outline"><h3 className="text-2xl font-extrabold">{success ? 'Testovací poptávka přijata.' : 'Děkuji za poptávku.'}</h3><p role="status">{success ? 'E-mail nebyl odeslán. Průchod formulářem proběhl v testovacím režimu.' : 'Server potvrdil odeslání. Petr se vám ozve na zadaný e-mail.'}</p></div> : form ? <div ref={formHeading} tabIndex={-1} className="focus-visible:outline">{settings?.available === false && <p className="text-sm text-brand-grey-dark mb-6">{settings.message || 'AI konzultace zatím není aktivní. Můžete napsat přímo Petrovi.'}</p>}<LeadForm initialSummary={form === 'direct' ? draft : [proposalSummary(proposal,messages),draft].filter(Boolean).join('\n').slice(0,5000)} direct={form === 'direct'} testMail={settings?.testMail ?? null} onSuccess={test=>{setSuccess(test);if(!test)metric('consultant_lead_submitted');}} onBack={settings && settings.available !== false ? ()=>setForm(null) : undefined} /></div> : <>
          <p className="mb-5 text-sm leading-relaxed text-brand-grey-dark">Zatím si píšete pouze s AI konzultantem. Podklady z konzultace a kontaktní údaje odešleme Petrovi až s vaším souhlasem — po vyplnění formuláře a potvrzení tlačítkem „Odeslat poptávku“.</p>
          <div ref={log} role="log" aria-label="Rozhovor s AI konzultantem" aria-live="polite" aria-relevant="additions" tabIndex={0} className="h-72 sm:h-80 overflow-y-auto overscroll-contain space-y-4 pr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-black">
            {messages.map((m,i)=><div key={i} className={`max-w-[94%] p-4 border-2 border-brand-black ${m.role === 'user' ? 'ml-auto bg-brand-black text-brand-white' : 'mr-auto bg-brand-white text-brand-black'}`}><span className="block text-[10px] font-extrabold uppercase tracking-widest mb-2">{m.role === 'user' ? 'Vy' : 'AI konzultant'}</span><p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">{m.text}</p></div>)}
            {busy && <p role="status" className="text-sm font-bold animate-pulse">Konzultant připravuje odpověď…</p>}
          </div>
          {proposal && <section aria-label="Předběžný návrh" className="border-t-2 border-brand-black mt-6 pt-6 space-y-4"><h3 className="font-extrabold text-2xl">Váš předběžný návrh</h3><dl className="space-y-4">{Object.entries(proposal).map(([key,value])=><div key={key}><dt className="text-xs uppercase font-extrabold tracking-wide mb-1">{proposalLabels[key]}</dt><dd className="text-sm leading-relaxed whitespace-pre-wrap break-words">{value}</dd></div>)}</dl><div className="flex flex-wrap gap-3"><Button type="button" disabled={busy} onClick={()=>openContact(false)}>Předat Petrovi</Button><Button type="button" variant="secondary" disabled={busy} className="!whitespace-normal !h-auto min-h-10 py-2" onClick={()=>{setRefining(true);textarea.current?.focus({preventScroll:true});}}>Ještě návrh upřesnit</Button></div></section>}
          {error && <div className="my-5 text-sm text-red-700" role="alert"><p>{error}</p><button type="button" disabled={busy} className="underline font-bold mt-2 focus-visible:outline" onClick={()=>openContact(false,true)}>Předat dosavadní podklady Petrovi</button></div>}
          {(!proposal || refining) && <form onSubmit={send} className="mt-6 space-y-3"><label htmlFor="consultant-message" className="text-xs font-extrabold uppercase tracking-widest">{refining ? 'Co chcete doplnit?' : 'Vaše zpráva'}</label><textarea ref={textarea} id="consultant-message" className={`${fieldClass} resize-none`} rows={3} readOnly={busy} required maxLength={settings?.maxInput || 1500} value={draft} onChange={e=>setDraft(e.target.value)} onKeyDown={e=>{if(e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing){e.preventDefault();void send();}}} placeholder="Vaše zpráva"/><div className="flex flex-wrap items-center justify-between gap-3"><p className="text-xs text-brand-grey-dark">Enter odešle · Shift + Enter nový řádek</p><Button type="submit" disabled={busy || !settings || settings.available === false || !draft.trim()} isLoading={busy}>Odeslat</Button></div></form>}
          <button type="button" disabled={busy} className="mt-6 text-sm underline underline-offset-4 text-brand-grey-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-50" onClick={()=>openContact(true,!!error)}>Chci jen poslat zprávu</button>
        </>}
      </div>
    </div>
  </div>;
}
