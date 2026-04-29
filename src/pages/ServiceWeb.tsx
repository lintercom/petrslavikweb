import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, LineChart, Settings } from 'lucide-react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { PageCTA } from '@/components/layout/PageCTA';

export function ServiceWeb() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Tvorba webových stránek na míru | Petr Slavík"
        description="Tvorba webových stránek na míru s moderním designem, rychlým načítáním, SEO základem, měřením konverzí a možností vlastního CMS."
        path="/sluzby/webove-stranky"
      />
      <PageHero 
        title="Webové stránky na míru."
        description="Web nemá být jen online vizitka. Má srozumitelně vysvětlit, co děláte, vzbudit důvěru a dovést návštěvníka k poptávce."
      />

      {/* Features Grid */}
      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: TrendingUp, title: "Více poptávek", desc: "Jasná struktura, silná CTA a copy, který vede k akci. Žádné slepé uličky." },
              { icon: ShieldCheck, title: "Maximální důvěra", desc: "Profesionální design, rychlé načítání a bezchybný mobil přesvědčí i náročné klienty." },
              { icon: LineChart, title: "Měření a data", desc: "Odevzdávám s nastaveným GA4 a měřením konverzí. Víte, odkud chodí platící klienti." },
              { icon: Settings, title: "Snadná správa", desc: "Podle rozsahu projektu vytvořím vlastní administraci, ve které můžete upravovat texty, fotky, reference, články nebo další obsah bez programování." }
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
        title="Potřebujete web, který bude pracovat pro vás?"
        description="Jednodušší weby začínají od 35 000 Kč. Web s vlastním CMS nebo pokročilejšími funkcemi nacením podle rozsahu."
      />

      <BigFooterCTA />
    </div>
  );
}
