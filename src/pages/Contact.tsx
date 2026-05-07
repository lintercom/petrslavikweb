import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/ui/SEO';
import { ChevronDown } from 'lucide-react';

const serviceOptions = [
  'Tvorba webu',
  'Redesign webu',
  'Rozšíření a úpravy webu',
  'Měsíční správa',
  'Jiné',
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isServiceOpen, setIsServiceOpen] = useState(false);
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

    if (!selectedService) {
      setSubmitError('Vyberte prosím službu, o kterou máte zájem.');
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
      setSelectedService('');
      trackEvent('form_submit', { form_id: 'contact_form', service: selectedService });
      trackEvent('form_submit_success', { form_id: 'contact_form', service: selectedService });
      setIsSubmitted(true);
    } catch {
      setSubmitError('Zprávu se nepodařilo odeslat. Napište mi prosím přímo na petrslavikweb@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelClass = 'block text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-2';
  const inputClass = 'w-full bg-transparent border-b-2 border-brand-black py-4 text-lg font-medium focus:border-brand-black focus:bg-brand-white outline-none transition-colors placeholder:text-brand-grey-dark text-brand-black autofill:shadow-[inset_0_0_0px_1000px_#F3F2EE]';

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Kontakt | Petr Slavík"
        description="Napište mi, co má váš firemní web vyřešit: jasnější nabídku, více poptávek, redesign nebo snazší správu obsahu."
        path="/kontakt"
      />
      <PageHero
        title="Kontakt."
        description="Pojďme probrat, co dnes na vašem webu nefunguje a jaký výsledek od nového webu očekáváte."
      />

      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-6">Email</h3>
                <div className="space-y-6 text-xl font-extrabold text-brand-black">
                  <p>
                    <span className="block text-xs text-brand-grey-dark mb-1 uppercase tracking-widest">Email</span>
                    <a
                      href="mailto:petrslavikweb@gmail.com"
                      className="hover:underline"
                      data-gtm-event="email_click"
                      data-gtm-target="petrslavikweb@gmail.com"
                      onClick={() => trackEvent('email_click', { email: 'petrslavikweb@gmail.com' })}
                    >
                      petrslavikweb@gmail.com
                    </a>
                  </p>
                  <p className="text-base font-medium text-brand-grey-dark leading-relaxed">
                    Nejrychlejší cesta je poslat stručný popis toho, co má web změnit. Nemusíte mít hotové zadání, stačí popsat současný problém.
                  </p>
                </div>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-black text-brand-white p-12 border-2 border-brand-black text-center h-full flex flex-col items-center justify-center"
                  data-gtm-event="form_submit_success"
                  data-gtm-form="contact_form"
                >
                  <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-4">Děkuji.</h3>
                  <p className="text-lg text-brand-grey-light">Brzy se vám ozvu na zadaný e-mail.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-10"
                  noValidate
                  data-gtm-form="contact_form"
                  data-gtm-event="form_submit_success"
                >
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
                      <label id="service-label" className={labelClass}>O jakou službu máte zájem *</label>
                      <input type="hidden" name="service" value={selectedService} />
                      <button
                        type="button"
                        aria-labelledby="service-label"
                        aria-expanded={isServiceOpen}
                        className={`${inputClass} flex items-center justify-between text-left`}
                        onClick={() => setIsServiceOpen((open) => !open)}
                        onBlur={() => window.setTimeout(() => setIsServiceOpen(false), 120)}
                      >
                        <span className={selectedService ? 'text-brand-black' : 'text-brand-grey-dark'}>
                          {selectedService || 'Vyberte službu...'}
                        </span>
                        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServiceOpen && (
                        <div className="absolute left-0 right-0 top-full z-20 mt-2 border-2 border-brand-black bg-brand-white shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                          {serviceOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              className="block w-full px-4 py-3 text-left text-base font-extrabold uppercase tracking-wide text-brand-black hover:bg-brand-black hover:text-brand-white focus:bg-brand-black focus:text-brand-white focus:outline-none transition-colors"
                              onMouseDown={(event) => event.preventDefault()}
                              onClick={() => {
                                setSelectedService(option);
                                setIsServiceOpen(false);
                                setSubmitError('');
                              }}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className={labelClass}>Co dnes nefunguje? *</label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Popište stručně současný web, cíle a problém, který chcete vyřešit..."
                      className={`${inputClass} resize-none`}
                    ></textarea>
                  </div>

                  {submitError && (
                    <p className="text-sm font-semibold text-red-700" role="alert">
                      {submitError}
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full py-6 text-lg font-extrabold uppercase tracking-widest"
                    data-gtm-event="contact_form_submit_click"
                    data-gtm-form="contact_form"
                  >
                    {isSubmitting ? 'Odesílám...' : 'Domluvit konzultaci'}
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
