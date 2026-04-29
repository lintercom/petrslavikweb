import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Cable, CalendarClock, CreditCard, DatabaseZap } from 'lucide-react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { PageCTA } from '@/components/layout/PageCTA';

export function ServiceIntegrations() {
  const features = [
    {
      icon: CreditCard,
      title: 'Platby a objednávky',
      desc: 'Napojení platebních bran, objednávkových procesů a potvrzovacích e-mailů tak, aby zákazník prošel nákupem bez zbytečných kroků.',
    },
    {
      icon: CalendarClock,
      title: 'Rezervační systémy',
      desc: 'Rezervace termínů, kapacit, služeb nebo konzultací s administrací, notifikacemi a možností platby předem.',
    },
    {
      icon: DatabaseZap,
      title: 'Účetnictví a ERP',
      desc: 'Přenos objednávek, faktur, skladů, ceníků nebo zákaznických dat mezi webem, e-shopem a firemním systémem.',
    },
    {
      icon: Cable,
      title: 'API a automatizace',
      desc: 'Propojení nástrojů, které dnes fungují odděleně. Méně ručního přepisování, méně chyb a lepší přehled nad daty.',
    },
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Integrace a automatizace na míru | Petr Slavík"
        description="API integrace, automatizace objednávek, platební brány, rezervační systémy a napojení webů nebo e-shopů na účetnictví a ERP."
        path="/sluzby/integrace"
      />
      <PageHero
        title="Integrace a automatizace."
        description="Propojuji weby, e-shopy, databáze a firemní systémy tak, aby data proudila automaticky a lidé je nemuseli přepisovat ručně."
      />

      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-brand-white p-8 md:p-10 border-2 border-brand-black hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow] duration-300"
              >
                <item.icon className="w-10 h-10 md:w-12 md:h-12 text-brand-black mb-6" />
                <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-4 text-brand-black">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-brand-grey-dark leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Chcete propojit web s firemními procesy?"
        description="Nejdřív společně projdeme, odkud data přichází, kam mají odcházet a které kroky má smysl automatizovat."
      />

      <BigFooterCTA />
    </div>
  );
}
