import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Settings, ShieldCheck, Link2, LineChart } from 'lucide-react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { PageCTA } from '@/components/layout/PageCTA';

export function ServiceApp() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Vlastní CMS a webové systémy na míru | Petr Slavík"
        description="Vývoj vlastního CMS, administrací, databází, rezervačních systémů, klientských zón a webových systémů na míru."
        path="/sluzby/webove-aplikace"
      />
      <PageHero 
        title="Vlastní CMS a webové systémy."
        description="Když běžný web nestačí, vytvořím administraci, databázi, rezervační systém, klientskou zónu nebo interní nástroj přesně podle vašeho provozu."
      />

      {/* Features Grid */}
      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: Settings, title: "Vlastní administrace", desc: "CMS vytvořené podle konkrétního webu nebo firmy. Bez zbytečných funkcí, které nikdo nepoužívá." },
              { icon: ShieldCheck, title: "Databáze a obsah", desc: "Strukturovaná data pro produkty, články, reference, objednávky, rezervace, klienty nebo interní evidenci." },
              { icon: Link2, title: "Přihlášení, role a oprávnění", desc: "Uživatelé, správci, klienti nebo zaměstnanci mohou mít různé úrovně přístupu podle potřeby." },
              { icon: LineChart, title: "Integrace a automatizace", desc: "Napojení na platební brány, ERP, účetnictví, e-mailing, externí API nebo interní nástroje." }
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
        title="Potřebujete web s vlastní administrací nebo systémem na míru?"
        description="Webové systémy, vlastní CMS a pokročilé integrace začínají orientačně od 120 000 Kč. Rozsah navrhnu podle toho, co má systém skutečně řešit."
      />

      <BigFooterCTA />
    </div>
  );
}
