import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/ui/SEO';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot: if the hidden field is filled, silently abort (likely bot).
    const honeypot = form.elements.namedItem('website') as HTMLInputElement | null;
    if (honeypot && honeypot.value) return;
    trackEvent('form_submit');
    setIsSubmitted(true);
  };

  const labelClass = 'block text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-2';
  const inputClass = 'w-full bg-transparent border-b-2 border-brand-black py-4 text-lg font-medium focus:border-brand-black outline-none transition-colors placeholder:text-brand-grey-dark text-brand-black';

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Kontakt | Petr Slavík"
        description="Spojte se se mnou a proberme váš projekt."
        path="/kontakt"
      />
      <PageHero 
        title="Kontakt."
        description="Pojďme probrat váš projekt. Vyplňte formulář nebo si rovnou rezervujte termín v mém kalendáři."
      />

      {/* Contact Form Section */}
      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-16">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-6">Kde mě najdete</h3>
                <div className="space-y-6 text-xl font-extrabold text-brand-black">
                  <p>
                    <span className="block text-xs text-brand-grey-dark mb-1 uppercase tracking-widest">Email</span>
                    <a href="mailto:hello@devstudio.cz" className="hover:underline">hello@devstudio.cz</a>
                  </p>
                  <p>
                    <span className="block text-xs text-brand-grey-dark mb-1 uppercase tracking-widest">Telefon</span>
                    <a href="tel:+420123456789" className="hover:underline">+420 123 456 789</a>
                  </p>
                </div>
              </div>

              <div className="bg-brand-white p-8 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                <h3 className="text-xl font-extrabold uppercase mb-4 text-brand-black">Rychlá konzultace (20 min)</h3>
                <p className="text-base text-brand-grey-dark mb-8">Probereme vaši situaci a zjistíme, zda vám dokážu pomoci.</p>
                <Button 
                  onClick={() => trackEvent('calendar_click')}
                  variant="primary" 
                  className="w-full py-4 text-base font-extrabold uppercase tracking-widest"
                >
                  Rezervovat call
                </Button>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-black text-brand-white p-12 border-2 border-brand-black text-center h-full flex flex-col items-center justify-center"
                >
                  <h3 className="text-3xl font-extrabold uppercase tracking-tighter mb-4">Děkuji!</h3>
                  <p className="text-lg text-brand-grey-light">Brzy se vám ozvu na zadaný e-mail.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10" noValidate>
                  {/* Honeypot — skrytý pro uživatele, bot vyplní */}
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
                      <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="+420 …" className={inputClass} />
                    </div>
                    <div className="relative">
                      <label htmlFor="type" className={labelClass}>Typ projektu *</label>
                      <select required id="type" name="type" className={`${inputClass} text-brand-black`}>
                        <option value="">Vyberte…</option>
                        <option value="web">Webové stránky</option>
                        <option value="eshop">E-shop</option>
                        <option value="app">Webová aplikace</option>
                        <option value="other">Jiné / Konzultace</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className={labelClass}>Zpráva *</label>
                    <textarea required id="message" name="message" rows={4} placeholder="Popište stručně, co potřebujete vyřešit…" className={`${inputClass} resize-none`}></textarea>
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-6 text-lg font-extrabold uppercase tracking-widest">
                    Odeslat poptávku
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
