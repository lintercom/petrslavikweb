import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';

export function PlatformUpgates() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Upgates | Petr Slavík"
        description="Úpravy a kódování pro platformu Upgates."
        path="/platformy/upgates"
      />
      <PageHero 
        title="Upgates."
        description="Flexibilní platforma pro e-shopy, které přerůstají krabicové řešení."
      />

      {/* Intro Section */}
      <section className="py-32 px-4 bg-brand-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 text-brand-black">Proč Upgates.</h2>
          <p className="text-xl text-brand-grey-medium leading-relaxed mb-12">
            Kompromis mezi krabicovým řešením a vývojem na míru. Hluboké zásahy do šablony a robustní API pro náročné integrace.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 bg-brand-grey-light/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Unikátní design", desc: "Designer modul pro vizuál, který vás odliší od konkurence." },
              { title: "API integrace", desc: "Napojení na ERP, CRM a další systémy — plná automatizace byznysu." },
              { title: "B2B řešení", desc: "Velkoobchodní funkce, individuální ceníky a klientské sekce." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-brand-white p-12 rounded-[2.5rem] border border-brand-grey-light/10 shadow-sm"
              >
                <h3 className="text-3xl font-semibold tracking-tighter mb-6 text-brand-black">{item.title}</h3>
                <p className="text-lg text-brand-grey-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-brand-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-brand-black">Zvažujete Upgates?</h2>
          <Button href="/kontakt" variant="primary" className="py-6 px-12 text-lg uppercase tracking-widest font-semibold">Domluvit konzultaci</Button>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
