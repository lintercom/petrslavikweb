import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';

export function PlatformShoptet() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Shoptet | Petr Slavík"
        description="Úpravy a kódování pro platformu Shoptet."
        path="/platformy/shoptet"
      />
      <PageHero 
        title="Shoptet."
        description="Realizace a úpravy e-shopů na nejrozšířenější české platformě — od šablon po integrace."
      />

      {/* Services Section */}
      <section className="py-32 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Kódování šablon", desc: "Úpravy vzhledu na míru značce — od drobností po kompletní redesign." },
              { title: "Napojení systémů", desc: "Propojení s účetnictvím, ERP, CRM a dalšími nástroji přes API." },
              { icon: "zap", title: "Optimalizace", desc: "Zrychlení načítání a vyšší konverzní poměr." },
              { title: "Migrace dat", desc: "Bezpečný přenos produktů, zákazníků a objednávek ze starého e-shopu." }
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

      {/* CTA Section */}
      <section className="py-32 px-4 bg-brand-grey-light/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-brand-black">Potřebujete pomoci se Shoptetem?</h2>
          <Button href="/kontakt" variant="primary" className="py-6 px-12 text-lg uppercase tracking-widest font-semibold">Nezávazná poptávka</Button>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
