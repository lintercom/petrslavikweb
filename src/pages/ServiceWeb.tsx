import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { BarChart3, MessageSquare, PenLine, ShieldCheck } from 'lucide-react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { PageCTA } from '@/components/layout/PageCTA';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

export function ServiceWeb() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Tvorba webových stránek, které řeší problém | Petr Slavík"
        description="Tvorba firemních webů, které pomáhají vysvětlit nabídku, vybudovat důvěru a získávat poptávky."
        path="/sluzby/webove-stranky"
        structuredData={[
          serviceSchema({
            name: 'Tvorba webových stránek',
            description: 'Tvorba firemních webů, které jasně vysvětlí nabídku, budují důvěru a vedou návštěvníka ke kontaktu.',
            path: '/sluzby/webove-stranky',
          }),
          breadcrumbSchema([
            { name: 'Úvod', path: '/' },
            { name: 'Služby', path: '/sluzby' },
            { name: 'Tvorba webových stránek', path: '/sluzby/webove-stranky' },
          ]),
        ]}
      />
      <PageHero
        title="Webové stránky."
        description="Web nemá být jen online vizitka. Má návštěvníkovi rychle vysvětlit, jestli jste pro něj správná volba, a dovést ho ke kontaktu."
      />

      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: MessageSquare, title: "Více správných poptávek", desc: "Web povedu kolem otázek, které zákazník řeší před oslovením. Cílem nejsou jen návštěvy, ale relevantní poptávky." },
              { icon: ShieldCheck, title: "Důvěra před prvním kontaktem", desc: "Struktura, reference, jasné vysvětlení postupu a konkrétní argumenty pomůžou snížit nejistotu návštěvníka." },
              { icon: PenLine, title: "Texty, které něco říkají", desc: "Pomůžu přepsat obecné fráze do srozumitelného sdělení: co děláte, komu pomáháte a jaký problém řešíte." },
              { icon: BarChart3, title: "Měření výsledku", desc: "Web může obsahovat měření důležitých akcí, abyste věděli, jestli lidé klikají na kontakt, čtou klíčové stránky a posílají poptávky." }
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
        title="Potřebujete web, který má jasný úkol?"
        description="Začneme tím, co má web změnit: vysvětlit nabídku, zvýšit důvěru, získat poptávky nebo zpřehlednit obsah. Až potom řeším podobu stránky."
      />

      <BigFooterCTA />
    </div>
  );
}
