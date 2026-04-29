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
        title="Tvorba e-shopů na míru | Petr Slavík"
        description="Tvorba e-shopů na míru s administrací produktů, objednávkami, platební bránou, dopravou a napojením na účetnictví, POHODA nebo ERP."
        path="/sluzby/e-shop"
      />
      <PageHero 
        title="E-shopy na míru."
        description="E-shop není jen výloha produktů. Je to systém pro prodej, správu objednávek, platby, dopravu a napojení na účetnictví nebo ERP."
      />

      {/* Features Grid */}
      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: Link2, title: "Vlastní e-shopové řešení", desc: "E-shop navrhnu podle vašich produktů, zákazníků a způsobu prodeje. Řešení se přizpůsobí vašemu procesu, ne opačně." },
              { icon: Zap, title: "Platby a doprava", desc: "Napojení na platební brány, dopravce, výdejní místa nebo individuální způsob objednání podle potřeb projektu." },
              { icon: ShoppingCart, title: "Napojení na účetnictví / ERP", desc: "Objednávky, faktury, sklady, ceníky nebo zákazníci se mohou synchronizovat s vaším účetnictvím nebo firemním systémem." },
              { icon: TrendingUp, title: "Správa produktů a objednávek", desc: "Vlastní administrace pro produkty, kategorie, objednávky, zákazníky, obsah a další části e-shopu." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-brand-white p-8 md:p-12 border-2 border-brand-black hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow] duration-300"
              >
                <item.icon className="w-12 h-12 text-brand-black mb-8" />
                <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-6 text-brand-black">{item.title}</h3>
                <p className="text-lg text-brand-grey-dark leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA 
        title="Chcete e-shop, který odpovídá vašemu prodeji?"
        description="E-shopy na míru začínají orientačně od 90 000 Kč. Přesnou cenu určím podle rozsahu administrace, plateb, dopravy, produktů a integrací."
      />

      <BigFooterCTA />
    </div>
  );
}
