import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';

export function PlatformWooCommerce() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="WooCommerce | Petr Slavík"
        description="Tvorba a úpravy e-shopů na platformě WooCommerce."
        path="/platformy/woocommerce"
      />
      <PageHero 
        title="Woo."
        description="Vývoj e-shopů na nejrozšířenější open-source platformě. Plná kontrola nad kódem i daty."
      />

      {/* Intro Section */}
      <section className="py-32 px-4 bg-brand-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 text-brand-black">Kdy zvolit WooCommerce.</h2>
          <p className="text-xl text-brand-grey-medium leading-relaxed mb-12">
            Ideální pro specifické projekty, které vyžadují plnou kontrolu nad každým detailem, nebo pro weby, kde je e-shop doplňkem k rozsáhlému obsahu. Žádné měsíční poplatky za platformu, jen čistý výkon.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 bg-brand-grey-light/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Šablony na míru", desc: "Stavím lehké a rychlé šablony od nuly. Žádné pomalé kupované balíky plné zbytečného kódu." },
              { title: "Vlastní pluginy", desc: "Pokud neexistuje hotové řešení, naprogramuji vám plugin na míru vašim potřebám." },
              { title: "Optimalizace", desc: "Ladění výkonu serveru i databáze pro bleskové načítání i při větším počtu produktů." },
              { title: "České integrace", desc: "Bezchybné napojení na Zásilkovnu, GoPay, Comgate, POHODA a další lokální služby." }
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
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-brand-black">Potřebujete WooCommerce e-shop?</h2>
          <Button href="/kontakt" variant="primary" className="py-6 px-12 text-lg uppercase tracking-widest font-semibold">Nezávazná poptávka</Button>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
