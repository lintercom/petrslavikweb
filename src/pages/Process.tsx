import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { breadcrumbSchema } from '@/lib/seo';

export function Process() {
  const steps = [
    { step: '01', title: 'Pochopení problému', desc: 'Projdeme, co dnes na webu nefunguje: nejasná nabídka, slabé poptávky, nedůvěra, zastaralý vzhled nebo složitá správa obsahu.', out: 'Jasně pojmenovaný problém webu', time: 'obvykle 1 hovor', client: 'Dodáte kontext, odkaz na web a cíle.' },
    { step: '02', title: 'Návrh struktury', desc: 'Navrhnu, jak má být web poskládaný, aby návštěvník rychle pochopil nabídku, našel důležité informace a věděl, co udělat dál.', out: 'Struktura stránek a cesta ke kontaktu', time: 'přibližně 3-7 dní', client: 'Schválíte směr a doplníte poznámky k obsahu.' },
    { step: '03', title: 'Rozsah a cena', desc: 'Podle struktury, obsahu a technických potřeb určím rozsah práce, cenu a harmonogram.', out: 'Nabídka, termíny a plán realizace', time: '1-2 dny', client: 'Potvrdíte rozsah a priority.' },
    { step: '04', title: 'Texty a design', desc: 'Připravím obsahovou logiku, texty klíčových sekcí a vizuální podobu webu tak, aby sdělení i vzhled táhly stejným směrem.', out: 'Schválený návrh webu', time: '1-3 týdny podle rozsahu', client: 'Dodáte podklady, připomínky a schválení.' },
    { step: '05', title: 'Vývoj webu', desc: 'Postavím responzivní, rychlý a technicky čistý web s formulářem, SEO základem a případně správou vybraného obsahu.', out: 'Funkční testovací verze', time: '1-3 týdny podle rozsahu', client: 'Kontrolujete průběh a testujete klíčové části.' },
    { step: '06', title: 'Testování a spuštění', desc: 'Otestuji mobilní verzi, rychlost, formuláře, metadata, přesměrování a měření hlavních akcí.', out: 'Spuštěný web', time: '2-5 dní', client: 'Potvrdíte finální obsah a přístupy k doméně nebo hostingu.' },
    { step: '07', title: 'Vyhodnocení a rozvoj', desc: 'Po spuštění lze upravovat texty, doplňovat sekce, měřit poptávky a zlepšovat web podle reálného chování návštěvníků.', out: 'Web, který se dá dál zlepšovat', time: 'průběžně', client: 'Posíláte zpětnou vazbu a rozhodujete o dalších úpravách.' },
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Jak probíhá tvorba webu | Petr Slavík"
        description="Postup tvorby firemního webu od pochopení problému přes strukturu, texty, design, vývoj, spuštění a další zlepšování."
        path="/proces"
        structuredData={breadcrumbSchema([
          { name: 'Úvod', path: '/' },
          { name: 'Proces', path: '/proces' },
        ])}
      />
      <PageHero
        title="Proces."
        description="Nejdřív pojmenujeme problém. Až potom navrhuji strukturu, texty, design a technické řešení webu."
      />

      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 md:mb-16 border-2 border-brand-black bg-brand-white p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
            <p className="text-lg md:text-xl font-medium text-brand-black leading-relaxed">
              Cílem není jen dodat hotový web. Cílem je, abyste věděli, proč je postavený právě takhle a jaký problém má řešit.
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
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                    <div className="border-2 border-brand-black bg-brand-white px-4 py-3">
                      <div className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-1">Časový rámec</div>
                      <div className="text-sm font-semibold text-brand-black">{item.time}</div>
                    </div>
                    <div className="border-2 border-brand-black bg-brand-white px-4 py-3">
                      <div className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-1">Co dodá klient</div>
                      <div className="text-sm font-semibold text-brand-black">{item.client}</div>
                    </div>
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
