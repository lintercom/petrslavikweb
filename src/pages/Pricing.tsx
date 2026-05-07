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
      label: "Jasná prezentace služby",
      title: "Základní web",
      price: "od 35 000 Kč",
      time: "4-6 týdnů",
      suitedFor: "klienty, kteří začínají, potřebují jednoduchý funkční web a chtějí jasně vysvětlit nabídku",
      desc: "Základní web pro situace, kdy potřebujete, aby návštěvník rychle pochopil, co děláte, pro koho to je a proč vás má kontaktovat.",
      features: ["Ujasnění sdělení", "Návrh jednoduché struktury", "Design na míru", "Responzivní zpracování", "Základní textace", "SEO základ", "Kontaktní formulář", "Rychlé načítání", "Nastavení navazující péče"],
      notIncluded: ["Hlubší práce s konverzí", "Více cílových skupin", "Obsahová strategie", "Analytika"]
    },
    {
      label: "Web jako nástroj",
      title: "Pokročilý web",
      price: "od 60 000 Kč",
      time: "6-10 týdnů",
      suitedFor: "klienty, kteří chtějí z webu poptávky, mají konkurenci a potřebují víc než jen vizitku",
      desc: "Web, který neřeší jen vzhled, ale hlavně chování návštěvníka a cestu k akci. Cílem je dovést správného člověka ke kontaktu nebo poptávce.",
      features: ["Struktura podle rozhodování zákazníka", "Konverzní cesta a CTA", "Více typů návštěvníků", "Cílenější textace", "Důvěryhodnostní prvky", "Pokročilejší SEO základ", "Měření a konverze", "Optimalizace mobilu a rychlosti", "Nastavení navazující péče"],
      featured: true
    },
    {
      label: "Přestavba webu",
      title: "Redesign webu",
      price: "individuálně",
      time: "6-10 týdnů",
      suitedFor: "weby, které nepřinášejí poptávky, působí zastarale nebo nevysvětlují nabídku",
      desc: "Přestavba nefunkčního nebo zastaralého webu. Řeším, kde se návštěvník ztrácí, proč neudělá další krok a co snižuje důvěru.",
      features: ["Analýza současného webu", "Nová struktura", "Úprava nebo přepsání textů", "Zlepšení konverzní cesty", "Technické SEO", "Přesměrování URL", "Měření výsledků", "Nastavení navazující péče"]
    },
    {
      label: "Rozvoj webu",
      title: "Rozšíření a úpravy",
      price: "individuálně",
      time: "podle rozsahu",
      suitedFor: "klienty, kteří už web mají a chtějí ho posouvat dál",
      desc: "Vývoj funkcionalit a postupné vylepšování webu podle konkrétních potřeb, reálného používání a dalšího růstu firmy.",
      features: ["Nové sekce nebo stránky", "Formuláře", "Logika a interakce", "Napojení na systémy", "Úpravy UX", "Zlepšení výkonu", "Dlouhodobý rozvoj", "Nastavení navazující péče"]
    }
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Ceník webových služeb | Petr Slavík"
        description="Orientační ceny pro základní web, pokročilý web, redesign, rozšíření webu a navazující péči po spuštění řešenou měsíčním paušálem podle rozsahu."
        path="/cenik"
        structuredData={[
          serviceSchema({
            name: 'Ceník tvorby webu, redesignu a rozvoje',
            description: 'Orientační ceny podle rozsahu projektu, složitosti webu, obsahu, funkcionalit a dlouhodobé péče.',
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
        description="Cena závisí na složitosti projektu, stavu současného webu, rozsahu obsahu a funkcích, které má web řešit. Po spuštění navazuje péče řešená měsíčním paušálem podle rozsahu spolupráce."
      />

      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
                <h3 className={`text-2xl font-extrabold uppercase tracking-tight mb-4 ${plan.featured ? '!text-brand-white' : '!text-brand-black'}`}>{plan.title}</h3>
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
                  <h4 className={`text-xs font-extrabold uppercase tracking-widest mb-4 ${plan.featured ? '!text-brand-white' : '!text-brand-black'}`}>V ceně:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ShieldCheck className={`w-4 h-4 shrink-0 mt-0.5 ${plan.featured ? 'text-brand-white' : 'text-brand-black'}`} />
                        <span className={`font-medium text-sm ${plan.featured ? 'text-brand-grey-light' : 'text-brand-grey-dark'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.notIncluded && (
                    <div className={`mt-8 pt-6 border-t ${plan.featured ? 'border-brand-grey-light/30' : 'border-brand-black/20'}`}>
                      <h4 className="text-xs font-extrabold uppercase tracking-widest mb-4">Není součástí:</h4>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((item) => (
                          <li key={item} className={`font-medium text-sm ${plan.featured ? 'text-brand-grey-light' : 'text-brand-grey-dark'}`}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
                Web po spuštění nekončí. Proto na každý projekt navazuje péče po spuštění, řešená měsíčním paušálem. Jeho výše závisí na tom, co ode mě budete pravidelně potřebovat: od technické kontroly přes drobné úpravy až po průběžný rozvoj webu.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-white p-8 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                <h3 className="text-xl font-extrabold uppercase text-brand-black mb-2">Stabilita webu</h3>
                <div className="text-2xl font-extrabold text-brand-black mb-6">měsíční paušál podle rozsahu</div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-brand-grey-dark text-sm">
                  {['Technická údržba', 'Drobné úpravy', 'Kontrola funkčnosti', 'Bezpečnostní dohled', 'Kontrola formulářů', 'Průběžná zlepšení'].map((item) => (
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
                  {['Nové sekce', 'Úpravy textů', 'Nové funkcionality', 'Vyhodnocení měření', 'SEO úpravy', 'Zlepšení kontaktní cesty'].map((item) => (
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
