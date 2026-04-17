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
        title="Vývoj webových aplikací | Petr Slavík"
        description="Webové aplikace a digitalizace procesů pro startupy a technologické firmy."
        path="/sluzby/webove-aplikace"
      />
      <PageHero 
        title="Aplikace."
        description="Klientské portály, interní CRM a rezervační systémy na míru. Digitalizace firemních procesů."
      />

      {/* Features Grid */}
      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: Settings, title: "MVP přístup", desc: "Začneme s Minimum Viable Product, otestujeme na reálných datech a funkce přidáváme postupně." },
              { icon: ShieldCheck, title: "Role a oprávnění", desc: "Bezpečné přihlašování a přesné nastavení toho, kdo má přístup k jakým datům." },
              { icon: Link2, title: "API a integrace", desc: "Napojení na ERP, účetnictví nebo externí služby. Aplikace propojená s vašimi systémy." },
              { icon: LineChart, title: "Monitoring a rozvoj", desc: "Provoz, hlídání chyb a dlouhodobý rozvoj podle vašich priorit." }
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
        title="Máte nápad na aplikaci?"
        description="Ceny od 120 000 Kč. Zavolejme si a probereme, jak proces digitalizovat."
      />

      <BigFooterCTA />
    </div>
  );
}
