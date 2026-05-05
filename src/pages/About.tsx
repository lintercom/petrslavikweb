import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';

export function About() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="O mně | Petr Slavík"
        description="Jsem Petr Slavík. Navrhuji a stavím firemní weby, které pomáhají vysvětlit nabídku, budovat důvěru a získávat poptávky."
        path="/o-mne"
      />
      <PageHero
        title="O mně."
        description="Stavím weby jako obchodní nástroj. Nejdřív řeším sdělení, strukturu a problém klienta, až potom vizuální podobu."
      />

      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-6 text-brand-black">Jsem Petr Slavík.</h2>
              <p className="text-lg text-brand-grey-dark leading-relaxed mb-6">
                Navrhuji a stavím firemní weby pro lidi, kteří nechtějí jen novou prezentaci. Potřebují, aby zákazník rychle pochopil nabídku, získal důvěru a udělal další krok.
              </p>
              <p className="text-lg text-brand-grey-dark leading-relaxed mb-6">
                Na web se nedívám jen jako na vzhled. Řeším strukturu, texty, rozhodovací cestu návštěvníka, měření a technické zpracování, které se dá dál rozvíjet.
              </p>
              <p className="text-lg text-brand-grey-dark leading-relaxed mb-10">
                Komunikujete přímo se mnou. Bez předávání mezi obchodníkem, grafikem a vývojářem. Od prvního rozhovoru až po spuštění řešíme, co má web změnit.
              </p>
              <Button href="/kontakt" variant="primary" className="py-4 px-10 text-base uppercase tracking-widest font-extrabold">Domluvit konzultaci</Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="aspect-[4/5] bg-brand-black border-2 border-brand-black overflow-hidden relative">
              <div className="w-full h-full flex items-center justify-center text-brand-white">
                <span className="text-sm font-extrabold uppercase tracking-widest">Fotografie Petr Slavík</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-brand-white border-t-2 border-brand-black">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-16 text-brand-black">
            Proč pracovat se mnou.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Začínám problémem", desc: "Neptám se jen na barvy a počet podstránek. Nejdřív hledám, proč web dnes nefunguje a co má pro firmu změnit." },
              { title: "Přemýšlím nad sdělením", desc: "Pomůžu vaši nabídku rozdělit, zjednodušit a popsat tak, aby jí rozuměl člověk, který vás ještě nezná." },
              { title: "Spojuju návrh a vývoj", desc: "Struktura, texty, design a technické řešení drží pohromadě. Web nevzniká jako slepenec oddělených rozhodnutí." },
              { title: "Po spuštění lze zlepšovat", desc: "Web se dá měřit, upravovat a rozvíjet podle toho, co návštěvníci skutečně dělají a jaké poptávky chodí." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-brand-white p-12 border-2 border-brand-black hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow] duration-300">
                <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-6 text-brand-black">{item.title}</h3>
                <p className="text-lg text-brand-grey-dark leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
