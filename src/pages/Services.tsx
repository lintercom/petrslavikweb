import { SEO } from '@/components/ui/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { TrendingUp } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';

export function Services() {
  const services = [
    { 
      title: "Weby na míru", 
      desc: "Firemní a prezentační weby na míru, které jasně vysvětlí vaše služby, budí důvěru a vedou návštěvníka k poptávce.", 
      link: "/sluzby/webove-stranky",
      features: ["Návrh struktury", "Design na míru", "Rychlé načítání", "SEO základ", "Měření konverzí", "Možnost vlastního CMS"]
    },
    { 
      title: "E-shopy na míru", 
      desc: "E-shopy navržené podle vašeho způsobu prodeje — od produktů a objednávek přes platby a dopravu až po napojení na účetnictví nebo ERP.", 
      link: "/sluzby/e-shop",
      features: ["Správa produktů", "Košík a objednávky", "Platební brána", "Doprava", "Administrace objednávek", "E-commerce měření", "Napojení na účetnictví / ERP"]
    },
    { 
      title: "Vlastní CMS a webové systémy", 
      desc: "Když běžný web nestačí, vytvořím vlastní administraci, databázi, rezervační systém, klientskou zónu nebo interní nástroj na míru.", 
      link: "/sluzby/webove-aplikace",
      features: ["Vlastní databáze", "Správa obsahu", "Přihlášení a role", "Rezervace", "Klientské sekce", "Interní evidence"]
    },
    { 
      title: "Integrace a automatizace", 
      desc: "Propojuji weby, e-shopy a firemní systémy tak, aby data nemusela být přepisována ručně.", 
      link: "/sluzby/integrace",
      features: ["Platební brány", "Rezervační systémy", "Účetnictví / ERP", "CRM", "E-mailing", "API propojení", "Automatizace objednávek"]
    }
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Služby | Petr Slavík"
        description="Tvorba webů a e-shopů na míru, vlastní CMS, webové systémy, platební brány, rezervační systémy a integrace na ERP nebo účetnictví."
        path="/sluzby"
      />
      <PageHero 
        title="Služby."
        description="Web nemá být jen vizitka. Má přivádět zákazníky, prodávat, šetřit čas a zapadat do fungování vaší firmy."
      />

      {/* Services List */}
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
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-5">Co získáte</h4>
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
