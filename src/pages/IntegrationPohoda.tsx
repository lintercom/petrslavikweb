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
        description="Napojení e-shopů a aplikací na účetní systém POHODA."
        path="/integrace/pohoda"
      />
      <PageHero 
        title="Pohoda."
        description="Automatizujte přenos dat mezi vaším e-shopem a účetním systémem POHODA. Konec ručního přepisování."
      />

      {/* Features Section */}
      <section className="py-32 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Objednávky", desc: "Automatický import z e-shopu do Pohody v reálném čase. Žádné prodlevy, žádné chyby." },
              { title: "Zásoby", desc: "Aktualizace skladových zásob z Pohody na e-shop. Zákazník vždy vidí aktuální dostupnost." },
              { title: "Ceníky", desc: "Synchronizace cen a slevových skupin. Spravujte ceny na jednom místě a nechte je propsat všude." },
              { title: "Faktury", desc: "Vystavování faktur a jejich párování s platbami. Kompletní automatizace finančních toků." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-brand-grey-light/5 p-12 rounded-[2.5rem] border border-brand-grey-light/10"
              >
                <h3 className="text-3xl font-semibold tracking-tighter mb-6 text-brand-black">{item.title}</h3>
                <p className="text-lg text-brand-grey-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 px-4 bg-brand-grey-light/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-brand-black">Jak to funguje.</h2>
          <p className="text-2xl text-brand-grey-medium leading-relaxed mb-12">
            Využívám POHODA mServer nebo XML komunikaci pro bezpečný a spolehlivý přenos dat. Řešení je vždy navrženo na míru vašim specifickým procesům a potřebám.
          </p>
          <Button href="/kontakt" variant="primary" className="py-6 px-12 text-lg uppercase tracking-widest font-semibold">Poptat integraci</Button>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
