import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';

export function Process() {
  const steps = [
    { step: '01', title: 'Úvodní konzultace', desc: 'Projdeme vaše cíle, současný stav a zjistíme, jestli dává smysl nový web, e-shop, CMS nebo integrace.', out: 'Základní doporučení dalšího postupu' },
    { step: '02', title: 'Návrh rozsahu', desc: 'Sepíšeme, co má řešení umět, jaký obsah bude potřeba, jaké funkce mají prioritu a co se bude řešit později.', out: 'Struktura řešení a rozsah prací' },
    { step: '03', title: 'Cena a harmonogram', desc: 'Na základě rozsahu připravím cenový rámec, harmonogram a jasné rozdělení etap.', out: 'Nabídka, termíny a plán realizace' },
    { step: '04', title: 'Design a struktura', desc: 'Navrhnu rozložení stránek, obsahovou logiku a vizuální podobu tak, aby web vedl uživatele ke správné akci.', out: 'Schválený návrh' },
    { step: '05', title: 'Vývoj a integrace', desc: 'Vyvíjím web, CMS, databázi, formuláře, objednávky, platby, rezervace nebo napojení na další systémy.', out: 'Funkční testovací verze' },
    { step: '06', title: 'Testování a spuštění', desc: 'Otestuji responzivitu, rychlost, formuláře, měření, základní SEO a funkční části systému.', out: 'Spuštěný projekt' },
    { step: '07', title: 'Servis a rozvoj', desc: 'Po spuštění můžeme řešit údržbu, zálohy, drobné úpravy, měření, nové funkce a další rozvoj.', out: 'Dlouhodobě udržované řešení' },
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Jak pracuji | Petr Slavík"
        description="Jak probíhá tvorba webu, e-shopu nebo webového systému na míru — od úvodní konzultace přes návrh až po spuštění a správu."
        path="/proces"
      />
      <PageHero 
        title="Proces."
        description="Jasný postup od první konzultace přes návrh, vývoj a integrace až po spuštění a dlouhodobou péči."
      />

      {/* Steps Section */}
      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 md:mb-16 border-2 border-brand-black bg-brand-white p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
            <p className="text-lg md:text-xl font-medium text-brand-black leading-relaxed">
              Po každém kroku víte, co je hotové, co se řeší dál a co ode mě nebo od vás bude potřeba.
            </p>
          </div>
          <div className="space-y-10 md:space-y-16">
            {steps.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 border-b-2 border-brand-black pb-10 md:pb-16 last:border-b-0 last:pb-0"
              >
                <div className="text-4xl md:text-6xl font-extrabold text-brand-black shrink-0 tabular-nums leading-none">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-brand-black mb-4">{item.title}</h3>
                  <p className="text-base md:text-lg text-brand-grey-dark leading-relaxed mb-6 max-w-2xl">{item.desc}</p>
                  <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-5 md:px-6 py-3 border-2 border-brand-black bg-brand-white shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark">Výstup:</span>
                    <span className="text-sm md:text-base font-extrabold text-brand-black uppercase">{item.out}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
