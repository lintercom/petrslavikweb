import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/ui/SEO';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formEndpoint = 'https://formsubmit.co/ajax/petrslavikweb@gmail.com';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = form.elements.namedItem('website') as HTMLInputElement | null;
    if (honeypot && honeypot.value) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error('Form submit failed');
      }

      form.reset();
      trackEvent('form_submit');
      setIsSubmitted(true);
    } catch {
      setSubmitError('Zprávu se nepodařilo odeslat. Napište mi prosím přímo na petrslavikweb@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelClass = 'block text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-2';
  const inputClass = 'w-full bg-transparent border-b-2 border-brand-black py-4 text-lg font-medium focus:border-brand-black outline-none transition-colors placeholder:text-brand-grey-dark text-brand-black';

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO title="Kontakt | Petr Slavík" description="Napište mi, co má váš firemní web vyřešit: jasnější nabídku, více poptávek, redesign nebo snadnější správu obsahu." path="/kontakt" />
      <PageHero title="Kontakt." description="Pojďme probrat, co dnes na vašem webu nefunguje a jaký výsledek od nového webu očekáváte." />

      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-12 md:mb-16">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-6">Kde mě najdete</h3>
                <div className="space-y-6 text-xl font-extrabold text-brand-black">
                  <p>
                    <span className="block text-xs text-brand-grey-dark mb-1 uppercase tracking-widest">Email</span>
                    <a href="mailto:petrslavikweb@gmail.com" className="hover:underline">petrslavikweb@gmail.com</a>
                  </p>
                  <p className="text-base font-medium text-brand-grey-dark leading-relaxed">
                    Nejrychlejší cesta je poslat stručný popis toho, co má web změnit. Nemusíte mít hotové zadání, stačí popsat současný problém.
                  </p>
                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-brand-black text-brand-white p-12 border-2 border-brand-black text-center h-full flex flex-col items-center justify-center">
                  <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-4">Děkuji!</h3>
                  <p className="text-lg text-brand-grey-light">Brzy se vám ozvu na zadaný e-mail.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10" noValidate>
                  <input type="hidden" name="_subject" value="Nová poptávka z petrslavikweb.cz" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
                    <label htmlFor="website">Vaše webové stránky</label>
                    <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label htmlFor="name" className={labelClass}>Jméno a příjmení *</label>
                      <input required type="text" id="name" name="name" autoComplete="name" placeholder="Jan Novák" className={inputClass} />
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className={labelClass}>E-mail *</label>
                      <input required type="email" id="email" name="email" autoComplete="email" placeholder="jan@firma.cz" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label htmlFor="phone" className={labelClass}>Telefon</label>
                      <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="+420 ..." className={inputClass} />
                    </div>
                    <div className="relative">
                      <label htmlFor="type" className={labelClass}>Co má web řešit *</label>
                      <select required id="type" name="type" className={`${inputClass} text-brand-black`}>
                        <option value="">Vyberte...</option>
                        <option value="nabidka">Lépe vysvětlit nabídku</option>
                        <option value="poptavky">Získávat více poptávek</option>
                        <option value="redesign">Nahradit zastaralý web</option>
                        <option value="obsah">Lépe spravovat obsah</option>
                        <option value="other">Jiné</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className={labelClass}>Co dnes nefunguje? *</label>
                    <textarea required id="message" name="message" rows={4} placeholder="Popište stručně současný web, cíle a problém, který chcete vyřešit..." className={`${inputClass} resize-none`}></textarea>
                  </div>

                  {submitError && (
                    <p className="text-sm font-semibold text-red-700" role="alert">
                      {submitError}
                    </p>
                  )}

                  <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full py-6 text-lg font-extrabold uppercase tracking-widest">
                    {isSubmitting ? 'Odesílám...' : 'Odeslat poptávku'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
