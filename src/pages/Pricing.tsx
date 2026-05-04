import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { ShieldCheck } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { useEffect } from 'react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

export function Pricing() {
  useEffect(() => {
    trackEvent('pricing_view');
  }, []);

  const pricingPlans = [
    {
      label: "Startovací web",
      title: "Jasná nabídka",
      price: "od 35 000 Kč",
      time: "4-6 týdnů",
      suitedFor: "živnostníky, odborníky, služby a menší firmy",
      desc: "Firemní web, který srozumitelně vysvětlí, co děláte, komu pomáháte a proč vás má zákazník kontaktovat.",
      features: ["Návrh struktury", "Design na míru", "Responzivní web", "Základní textace", "SEO základ", "Kontaktní formulář", "Rychlé načítání"]
    },
    {
      label: "Problémový redesign",
      title: "Lepší poptávky",
      price: "od 60 000 Kč",
      time: "6-10 týdnů",
      suitedFor: "firmy, kterým současný web nevysvětluje nabídku nebo nepřivádí poptávky",
      desc: "Přestavba webu podle toho, kde se návštěvník ztrácí, čemu nevěří a proč neudělá další krok.",
      features: ["Audit současného webu", "Nová informační struktura", "Přepsání klíčových textů", "Důvěryhodnostní prvky", "Měření konverzí", "Přesměrování URL", "Kontrola po spuštění"],
      featured: true
    },
    {
      label: "Rozsáhlejší firemní web",
      title: "Web jako obchodní nástroj",
      price: "od 90 000 Kč",
      time: "8-12 týdnů",
      suitedFor: "firmy s více službami, cílovými skupinami nebo pravidelně měněným obsahem",
      desc: "Větší web s propracovanou strukturou, texty, měřením a volitelnou správou vybraných částí obsahu.",
      features: ["Více typů služeb", "Obsahová architektura", "Správa vybraného obsahu", "Reference a články", "Pokročilejší SEO základ", "Analytika", "Dlouhodobý rozvoj"]
    }
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Ceník webových stránek | Petr Slavík"
        description="Orientační ceny tvorby firemních webů podle problému, který mají vyřešit: jasná nabídka, více poptávek nebo rozsáhlejší obchodní web."
        path="/cenik"
        structuredData={[
          serviceSchema({
            name: 'Ceník tvorby webových stránek',
            description: 'Orientační ceny firemních webů podle rozsahu, obsahu, textů, měření a problému, který má web vyřešit.',
            path: '/cenik',
          }),
          breadcrumbSchema([
            { name: 'Úvod', path: '/' },
            { name: 'Ceník', path: '/cenik' },
          ]),
        ]}
      />
      <PageHero
        title="Ceník."
        description="Cena se neodvíjí jen od počtu podstránek. Důležité je, jak moc musíme ujasnit nabídku, přepsat obsah a navrhnout cestu návštěvníka ke kontaktu."
      />

      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex flex-col p-6 md:p-8 border-2 border-brand-black hover:-translate-y-1 transition-[transform,box-shadow] duration-300 ${plan.featured ? 'bg-brand-black text-brand-white hover:shadow-[8px_8px_0px_0px_rgba(243,242,238,1),8px_8px_0px_2px_rgba(18,18,18,1)]' : 'bg-brand-white text-brand-black hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)]'}`}
              >
                <div className={`text-xs font-extrabold uppercase tracking-widest mb-6 ${plan.featured ? 'text-brand-grey-light' : 'text-brand-grey-dark'}`}>
                  {plan.label}
                </div>
                <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-4">{plan.title}</h3>
                <div className="text-2xl font-extrabold mb-2">{plan.price}</div>
                <div className={`text-xs font-extrabold uppercase tracking-widest mb-6 ${plan.featured ? 'text-brand-grey-light/60' : 'text-brand-grey-dark/60'}`}>
                  {plan.time}
                </div>
                <p className={`text-base mb-8 leading-relaxed ${plan.featured ? 'text-brand-grey-light' : 'text-brand-grey-dark'}`}>
                  {plan.desc}
                </p>
                <div className={`mb-8 border-t border-b py-4 ${plan.featured ? 'border-brand-grey-light/30' : 'border-brand-black/20'}`}>
                  <div className={`text-xs font-extrabold uppercase tracking-widest mb-2 ${plan.featured ? 'text-brand-grey-light' : 'text-brand-grey-dark'}`}>Vhodné pro</div>
                  <p className="text-sm font-medium leading-relaxed">{plan.suitedFor}</p>
                </div>

                <div className="flex-grow mb-8">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4">V ceně:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ShieldCheck className={`w-4 h-4 shrink-0 mt-0.5 ${plan.featured ? 'text-brand-white' : 'text-brand-black'}`} />
                        <span className="font-medium text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href="/kontakt"
                  variant={plan.featured ? 'onDark' : 'primary'}
                  size="lg"
                  className="w-full"
                >
                  Poptat web
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-brand-white border-t-2 border-brand-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-6 text-brand-black">Péče po spuštění.</h2>
              <p className="text-lg text-brand-grey-dark leading-relaxed max-w-xl">
                Web po spuštění nekončí. Lze průběžně hlídat technický stav, měření, drobné úpravy, nové sekce a obsah podle toho, co ukážou reálné poptávky.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-white p-8 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                <h3 className="text-xl font-extrabold uppercase text-brand-black mb-2">Stabilita webu</h3>
                <div className="text-2xl font-extrabold text-brand-black mb-6">od 2 500 Kč / měsíc</div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-brand-grey-dark text-sm">
                  {['Zálohy', 'Technická kontrola', 'Drobná údržba', 'Bezpečnostní dohled', 'Kontrola formulářů', 'Prioritní podpora podle tarifu'].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-medium">
                      <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-white p-8 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                <h3 className="text-xl font-extrabold uppercase text-brand-black mb-2">Rozvoj podle poptávek</h3>
                <div className="text-2xl font-extrabold text-brand-black mb-6">Individuálně</div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-brand-grey-dark text-sm">
                  {['Nové sekce', 'Úpravy textů', 'Nové reference', 'Vyhodnocení měření', 'SEO úpravy', 'Zlepšení kontaktní cesty'].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-medium">
                      <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
