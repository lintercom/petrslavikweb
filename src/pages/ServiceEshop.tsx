import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Link2, Zap, ShoppingCart, TrendingUp } from 'lucide-react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { PageCTA } from '@/components/layout/PageCTA';

export function ServiceEshop() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Tvorba e-shopů | Petr Slavík"
        description="E-shopy na míru s automatizovaným napojením na účetnictví a dopravce."
        path="/sluzby/e-shop"
      />
      <PageHero 
        title="E-shopy."
        description="Prodejní stroje, které šetří čas. E-shop není výloha, ale systém napojený na účetnictví i dopravce."
      />

      {/* Features Grid */}
      <section className="py-32 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: Link2, title: "Integrace na POHODA", desc: "Konec ručního přepisování. Objednávky, faktury, sklady i ceníky se synchronizují automaticky." },
              { icon: Zap, title: "Platby a doprava", desc: "GoPay, Comgate, Stripe, Zásilkovna a další. Rychlý a důvěryhodný checkout." },
              { icon: ShoppingCart, title: "Shoptet, Upgates, Woo", desc: "Vybereme platformu podle velikosti — od krabicového řešení po custom úpravy." },
              { icon: TrendingUp, title: "Konverzní optimalizace", desc: "Rychlé vyhledávání, jasné filtry a bezproblémový košík. Navrženo tak, aby zákazník nakoupil." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-brand-white p-12 border-2 border-brand-black hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow] duration-300"
              >
                <item.icon className="w-12 h-12 text-brand-black mb-8" />
                <h3 className="text-3xl font-extrabold uppercase tracking-tighter mb-6 text-brand-black">{item.title}</h3>
                <p className="text-lg text-brand-grey-dark leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA 
        title="Chcete e-shop, který šetří čas?"
        description="Ceny od 60 000 Kč včetně základních integrací. Pojďme probrat automatizaci vašeho prodeje."
      />

      <BigFooterCTA />
    </div>
  );
}
