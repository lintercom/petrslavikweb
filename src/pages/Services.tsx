import { SEO } from '@/components/ui/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { TrendingUp } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';

export function Services() {
  const services = [
    { 
      title: "Webové stránky", 
      desc: "Prezentační weby, které nosí poptávky a budí důvěru. Žádné šablony, čistý kód a promyšlený UX.", 
      link: "/sluzby/webove-stranky",
      features: ["Rychlé načítání a SEO", "Měření konverzí (GA4)", "Snadná správa obsahu"]
    },
    { 
      title: "E-shopy na míru", 
      desc: "Prodejní stroje s automatizací, napojením na účetnictví a bezchybným nákupním procesem.", 
      link: "/sluzby/e-shop",
      features: ["Shoptet, Upgates, Woo", "Napojení na POHODA", "Důvěryhodný checkout"]
    },
    { 
      title: "Webové aplikace", 
      desc: "Systémy na míru — klientské portály, digitalizace procesů a integrace, které řeší reálné problémy.", 
      link: "/sluzby/webove-aplikace",
      features: ["MVP a iterativní vývoj", "API a datové můstky", "Správa rolí a oprávnění"]
    }
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Služby | Petr Slavík"
        description="Přehled služeb: tvorba webů, e-shopů a webových aplikací na míru."
        path="/sluzby"
      />
      <PageHero 
        title="Služby."
        description="Web není vizitka, ale prodejní a procesní systém. Dodávám řešení, která pracují pro váš byznys."
      />

      {/* Services List */}
      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-24">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mb-6 text-brand-black">{service.title}</h2>
                  <p className="text-lg text-brand-grey-dark leading-relaxed mb-8">{service.desc}</p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center gap-4 text-brand-black font-extrabold uppercase tracking-widest text-sm hover:gap-6 transition-all duration-300"
                  >
                    Detail služby <TrendingUp className="w-5 h-5" />
                  </Link>
                </div>
                <div className="bg-brand-white p-8 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-6">Co získáte</h4>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-lg font-extrabold uppercase text-brand-black">
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
