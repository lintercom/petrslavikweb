import { motion } from 'motion/react';
import { Layout, Database, Webhook, Fingerprint } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { label: 'Důraz na výsledek', value: '100%', sub: 'Transparentní komunikace' },
  { label: 'Zkušenost', value: '10+', sub: 'Let u kódu a produktů' },
  { label: 'Moderní stack', value: 'React', sub: 'Vite, TypeScript, nástroje 2025' },
];

export function Services() {
  return (
    <section id="sluzby" className="py-20 lg:py-28 w-full relative z-10 bg-[#F8F7F5]">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        {/* O mně / důvěra */}
        <div
          id="o-nas"
          className="rounded-[2rem] border border-[#9D9C99]/20 bg-white p-8 md:p-12 lg:p-14 mb-10 md:mb-14 shadow-[0_16px_50px_rgba(92,88,80,0.06)]"
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.35em] text-[#9D9C99] mb-4">
                Petr Slavík — vývoj
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black tracking-tight text-[#5C5850] leading-[1.08]">
                Více než desetiletá soustředěnost na web, který drží krok s byznysem.
              </h2>
              <p className="mt-5 text-[#7E7B76] font-medium leading-relaxed max-w-md">
                Od architektury frontendu po napojení na API a nasazení — jeden
                partner, srozumitelný proces a kód připravený na růst.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-wrap items-center justify-center lg:justify-end gap-6 md:gap-10 opacity-80">
              {['Vite', 'React', 'TS', 'Tailwind', 'Node', 'API'].map((word) => (
                <span
                  key={word}
                  className="text-lg md:text-xl font-black tracking-tight text-[#5C5850]/25 uppercase"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-14">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-[#9D9C99]/15 bg-[#F8F7F5] px-6 py-8 text-center"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9D9C99] mb-3">
                  {s.label}
                </p>
                <p className="text-3xl md:text-4xl font-black text-[#5C5850] tracking-tight">
                  {s.value}
                </p>
                <p className="mt-2 text-xs text-[#7E7B76] font-medium">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-12 md:mb-16">
          <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.35em] text-[#9D9C99] mb-3">
            Specializace
          </p>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight text-[#5C5850] max-w-2xl leading-[1.1]">
            Co pro vás postavím
          </h3>
        </div>

        {/* Bento — horizontální karty */}
        <div className="flex flex-col gap-6 md:gap-8 mb-12 md:mb-16">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            className="grid md:grid-cols-2 rounded-[2rem] overflow-hidden border border-[#9D9C99]/15 bg-[#FBFAD6] shadow-[0_20px_60px_rgba(92,88,80,0.07)]"
          >
            <div className="relative min-h-[240px] md:min-h-[320px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
                alt="Strategie a návrh"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <h4 className="text-2xl md:text-3xl font-black text-[#5C5850] tracking-tight mb-4">
                Frontend &amp; design systém
              </h4>
              <p className="text-[#7E7B76] font-medium leading-relaxed mb-8">
                Komponenty, tokeny a layouty, které drží pohromadě. Čistý React,
                plynulé animace a špičkový výkon pro náročné uživatele.
              </p>
              <a
                href="#kontakt"
                className="self-start inline-flex px-7 py-3 rounded-full bg-[#5C5850] text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#7F7560] transition-colors"
              >
                Více informací
              </a>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.06 }}
            className="grid md:grid-cols-2 rounded-[2rem] overflow-hidden border border-[#9C9F5B]/25 bg-white shadow-[0_20px_60px_rgba(92,88,80,0.07)]"
          >
            <div className="relative min-h-[240px] md:min-h-[320px] md:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Tým a integrace"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center md:order-1">
              <h4 className="text-2xl md:text-3xl font-black text-[#5C5850] tracking-tight mb-4">
                Fullstack přesah &amp; API
              </h4>
              <p className="text-[#7E7B76] font-medium leading-relaxed mb-8">
                Napojení na CMS, platby, interní systémy. Doporučím stack a
                dodám funkční celek od databáze po rozhraní.
              </p>
              <a
                href="#kontakt"
                className="self-start inline-flex px-7 py-3 rounded-full bg-[#5C5850] text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#7F7560] transition-colors"
              >
                Více informací
              </a>
            </div>
          </motion.article>
        </div>

        {/* Mřížka služeb */}
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {[
            {
              icon: Layout,
              title: 'Frontend vývoj',
              text: 'React, TypeScript, Vite. Komponenty připravené na měřítko.',
            },
            {
              icon: Database,
              title: 'Data & backend přesah',
              text: 'Supabase, Firebase nebo vlastní API — podle typu projektu.',
            },
            {
              icon: Webhook,
              title: 'Integrace',
              text: 'Platby, headless CMS, automatizace a webhooky.',
            },
            {
              icon: Fingerprint,
              title: 'Konzultace',
              text: 'Architektura, výběr stacku a roadmapa před startem.',
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border border-[#9D9C99]/15 bg-white p-8 hover:border-[#9C9F5B]/35 transition-colors shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F8F7F5] border border-[#9D9C99]/15 flex items-center justify-center mb-5 text-[#5C5850]">
                <card.icon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#5C5850] mb-2">{card.title}</h4>
              <p className="text-sm text-[#7E7B76] font-medium leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
