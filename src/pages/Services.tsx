import { SEO } from '@/components/ui/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

export function Services() {
  const services = [
    {
      title: "Tvorba webu",
      desc: "Web na míru podle složitosti projektu. Pokrývá vše od jednoduchého webu s jasnou nabídkou přes firemní prezentaci až po komplexnější řešení se strukturou, obsahem a analytikou.",
      link: "/sluzby/webove-stranky",
      features: ["Nový web", "Jasná nabídka", "Struktura obsahu", "Cesta k poptávce", "SEO základ", "Možnost dalšího růstu"]
    },
    {
      title: "Redesign webu",
      desc: "Přestavba nefunkčního nebo zastaralého webu. Pro weby, které už existují, ale nepřinášejí poptávky, špatně vysvětlují nabídku nebo nepůsobí důvěryhodně.",
      link: "/sluzby/webove-stranky",
      features: ["Analýza webu", "Nová struktura", "Přepsání klíčových částí", "Konverzní cesta", "SEO a přesměrování", "Důvěryhodnost"]
    },
    {
      title: "Rozšíření a úpravy webu",
      desc: "Vývoj funkcionalit a postupné vylepšování. Pro klienty, kteří už web mají a chtějí doplnit nové části, formuláře, logiku, napojení na systémy nebo zlepšit použitelnost.",
      link: "/sluzby/webove-stranky",
      features: ["Nové sekce", "Nové stránky", "Formuláře", "Interakce", "Napojení na systémy", "UX a výkon"]
    },
    {
      title: "Měsíční správa",
      desc: "Web bez starostí a s dlouhodobým rozvojem. Tahle služba není volitelná, je součástí každého projektu, protože web není jednorázová věc a bez správy postupně ztrácí výkon.",
      link: "/sluzby/webove-stranky",
      features: ["Technická údržba", "Drobné úpravy", "Kontrola funkčnosti", "Průběžná zlepšení", "Dohled nad webem", "Dlouhodobý rozvoj"]
    }
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Služby | Petr Slavík"
        description="Tvorba webu, redesign, rozšíření a měsíční správa. Weby navržené podle problému, který mají klientovi vyřešit."
        path="/sluzby"
        structuredData={[
          serviceSchema({
            name: 'Tvorba webů, redesign a dlouhodobá správa',
            description: 'Weby pro firmy, které potřebují jasně vysvětlit nabídku, získávat poptávky, rozšířit současný web nebo zajistit dlouhodobou péči.',
            path: '/sluzby',
          }),
          breadcrumbSchema([
            { name: 'Úvod', path: '/' },
            { name: 'Služby', path: '/sluzby' },
          ]),
        ]}
      />
      <PageHero
        title="Služby."
        description="Od nového webu přes redesign až po rozšiřování a správu. Vždy řeším, co má web změnit pro vaše zákazníky i pro váš provoz."
      />

      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col h-full bg-brand-white border-2 border-brand-black p-6 md:p-8 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow] duration-300"
              >
                <div className="flex-grow">
                  <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-5 text-brand-black">{service.title}</h2>
                  <p className="text-base md:text-lg text-brand-grey-dark leading-relaxed mb-8">{service.desc}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-3 px-5 py-3 border-2 border-brand-black bg-brand-black text-brand-white font-extrabold uppercase tracking-widest text-xs md:text-sm hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(243,242,238,1),4px_4px_0px_2px_rgba(18,18,18,1)] transition-[transform,box-shadow,background-color,color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2"
                  >
                    Detail služby <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
                <div className="mt-8 pt-8 border-t-2 border-brand-black">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-5">Co řeším</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-extrabold uppercase text-brand-black">
                        <div className="w-2 h-2 bg-brand-black rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
