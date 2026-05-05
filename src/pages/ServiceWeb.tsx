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
        title="Tvorba webu, redesign a rozvoj | Petr Slavík"
        description="Tvorba webu na míru, redesign nefunkčního webu, rozšíření funkcionalit a měsíční správa jako součást každého řešení."
        path="/sluzby/webove-stranky"
        structuredData={[
          serviceSchema({
            name: 'Tvorba webu, redesign a rozvoj',
            description: 'Tvorba webů na míru podle složitosti projektu, redesign stávajících webů, rozšíření funkcionalit a dlouhodobá správa.',
            path: '/sluzby/webove-stranky',
          }),
          breadcrumbSchema([
            { name: 'Úvod', path: '/' },
            { name: 'Služby', path: '/sluzby' },
            { name: 'Tvorba webu', path: '/sluzby/webove-stranky' },
          ]),
        ]}
      />
      <PageHero
        title="Tvorba webu."
        description="Od jednoduchého webu přes redesign až po rozšíření funkcionalit. Začínám tím, co má web říkat, komu má prodávat a jak má vést k poptávce."
      />

      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: MessageSquare, title: "Tvorba webu", desc: "Nový web na míru podle aktuální situace. Od jednoduché prezentace až po rozsáhlejší řešení se strukturou, obsahem a analytikou." },
              { icon: ShieldCheck, title: "Redesign webu", desc: "Přestavba webu, který neplní roli: zákazník nechápe nabídku, web nepůsobí důvěryhodně nebo nevede k dalšímu kroku." },
              { icon: PenLine, title: "Rozšíření a úpravy", desc: "Nové sekce, formuláře, interakce, napojení na systémy nebo zlepšení použitelnosti podle reálných potřeb firmy." },
              { icon: BarChart3, title: "Měsíční správa", desc: "Součást každého řešení. Web dlouhodobě hlídám, udržuji, drobně upravuji a posouvám podle toho, jak se firma vyvíjí." }
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
        title="Potřebujete web, který řeší konkrétní problém?"
        description="Začneme tím, co má web změnit: získat klienty, vysvětlit nabídku, nahradit zastaralou prezentaci nebo rozšířit současné řešení."
      />

      <BigFooterCTA />
    </div>
  );
}
