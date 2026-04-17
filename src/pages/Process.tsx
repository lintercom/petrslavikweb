import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';

export function Process() {
  const steps = [
    { step: '01', title: 'Úvodní konzultace', desc: 'Pochopení vašeho byznysu a cílů. Zjistíme, zda si sedneme a zda vám dokážu pomoci.', out: 'Zápis a návrh řešení' },
    { step: '02', title: 'Specifikace a cena', desc: 'Detailní rozpis prací, funkcí a fixní rozpočet. Žádné skryté poplatky.', out: 'Smlouva a harmonogram' },
    { step: '03', title: 'Wireframy a design', desc: 'Návrh struktury (drátěné modely) a vizuální podoby webu.', out: 'Schválený design' },
    { step: '04', title: 'Vývoj a integrace', desc: 'Samotné kódování, nastavení platformy a napojení systémů (POHODA, platby).', out: 'Funkční beta verze' },
    { step: '05', title: 'Testování a obsah', desc: 'Plnění daty, testování na různých zařízeních a kontrola rychlosti.', out: 'Web připravený ke spuštění' },
    { step: '06', title: 'Spuštění a rozvoj', desc: 'Nasazení na ostrou doménu, měření a následná péče (servisní plán).', out: 'Živý projekt' },
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Jak pracuji | Petr Slavík"
        description="Můj proces tvorby webu od první schůzky po spuštění a následnou správu."
        path="/proces"
      />
      <PageHero 
        title="Proces."
        description="Žádný chaos. Jasný postup od první schůzky až po spuštění a následnou péči."
      />

      {/* Steps Section */}
      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-24">
            {steps.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-8 md:gap-16"
              >
                <div className="text-5xl md:text-7xl font-extrabold text-brand-black shrink-0 tabular-nums">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tighter text-brand-black mb-4">{item.title}</h3>
                  <p className="text-lg text-brand-grey-dark leading-relaxed mb-6 max-w-2xl">{item.desc}</p>
                  <div className="inline-flex items-center gap-3 px-6 py-3 border-2 border-brand-black bg-brand-white shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark">Výstup:</span>
                    <span className="text-base font-extrabold text-brand-black uppercase">{item.out}</span>
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
