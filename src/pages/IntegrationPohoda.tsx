import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';

export function IntegrationPohoda() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Integrace POHODA | Petr Slavík"
        description="Napojení webů, e-shopů a online systémů na účetní systém POHODA přes XML komunikaci, mServer nebo individuální integrační řešení."
        path="/integrace/pohoda"
      />
      <PageHero 
        title="Integrace POHODA."
        description="Propojení e-shopu, webového systému nebo vlastní administrace s účetnictvím POHODA. Méně ručního přepisování, méně chyb a lepší kontrola nad daty."
      />

      {/* Features Section */}
      <section className="py-32 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Objednávky", desc: "Přenos objednávek z e-shopu nebo objednávkového systému do POHODY podle domluveného scénáře." },
              { title: "Zásoby", desc: "Synchronizace skladů a dostupnosti podle možností vašeho systému, e-shopu a účetního nastavení." },
              { title: "Ceníky", desc: "Přenos cen, slevových skupin nebo individuálních ceníků podle struktury dat a obchodního procesu." },
              { title: "Faktury", desc: "Možnost vytváření faktur, přenosu dokladů a párování plateb podle konkrétního účetního postupu." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-brand-grey-light/5 p-12 rounded-[2.5rem] border border-brand-grey-light/10"
              >
                <h3 className="text-3xl font-semibold tracking-tight mb-6 text-brand-black">{item.title}</h3>
                <p className="text-lg text-brand-grey-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 px-4 bg-brand-grey-light/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 text-brand-black">Jak to funguje.</h2>
          <p className="text-2xl text-brand-grey-medium leading-relaxed mb-12">
            POHODA mServer nebo XML komunikace. Řešení navrhnu podle vašich procesů a možností konkrétního systému.
          </p>
          <Button href="/kontakt" variant="primary" className="py-6 px-12 text-lg uppercase tracking-widest font-semibold">Poptat integraci</Button>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
