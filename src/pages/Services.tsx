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
      title: "Web pro jasnější nabídku",
      desc: "Když zákazník nechápe, co přesně děláte, pro koho to je a proč by měl oslovit právě vás. Web postavím kolem srozumitelné nabídky a rozhodovacích otázek klienta.",
      link: "/sluzby/webove-stranky",
      features: ["Struktura nabídky", "Texty sekcí", "Jasná navigace", "Argumenty pro důvěru", "CTA bez slepých uliček", "SEO základ"]
    },
    {
      title: "Web pro více poptávek",
      desc: "Když návštěvníci na web chodí, ale neozývají se. Zaměřím se na cestu návštěvníka, obsah, důvěryhodnost a kontaktní body, které vedou k poptávce.",
      link: "/sluzby/webove-stranky",
      features: ["Poptávková cesta", "Kontaktní body", "Měření konverzí", "Úprava obsahu", "Mobilní použitelnost", "Rychlé načítání"]
    },
    {
      title: "Redesign zastaralého webu",
      desc: "Když web neodpovídá tomu, jak dnes firma funguje, nevypadá důvěryhodně nebo špatně vysvětluje aktuální služby. Zachovám, co dává smysl, a zbytek přestavím.",
      link: "/sluzby/webove-stranky",
      features: ["Audit současného webu", "Nová struktura", "Lepší texty", "Responzivní design", "Přesměrování URL", "Kontrola po spuštění"]
    },
    {
      title: "Web se snadnou správou",
      desc: "Když potřebujete pravidelně měnit texty, reference, články nebo často kladené dotazy bez zásahu vývojáře. Správu obsahu navrhnu jen pro části, které opravdu potřebujete měnit.",
      link: "/sluzby/webove-stranky",
      features: ["Správa obsahu", "Reference", "Články", "FAQ", "Jednoduché úpravy", "Technická péče"]
    }
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Služby | Petr Slavík"
        description="Tvorba firemních webů podle problému, který mají vyřešit: jasnější nabídka, více poptávek, redesign nebo snadná správa obsahu."
        path="/sluzby"
        structuredData={[
          serviceSchema({
            name: 'Tvorba firemních webů podle problému',
            description: 'Weby pro firmy, které potřebují jasně vysvětlit nabídku, získávat poptávky, posílit důvěru nebo nahradit zastaralý web.',
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
        description="Neprodávám balíček podstránek. Navrhnu web podle toho, co dnes brzdí vaše zákazníky v rozhodnutí ozvat se."
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
