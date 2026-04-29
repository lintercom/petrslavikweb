import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { ShieldCheck } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { useEffect } from 'react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';

export function Pricing() {
  useEffect(() => {
    trackEvent('pricing_view');
  }, []);

  const pricingPlans = [
    {
      label: "Web na míru",
      title: "Web na míru",
      price: "od 35 000 Kč",
      time: "4–6 týdnů",
      suitedFor: "živnostníky, služby, osobní značky a menší firmy",
      desc: "Firemní nebo prezentační web, který jasně vysvětlí vaše služby, budí důvěru a pomáhá získávat poptávky.",
      features: ["Návrh struktury", "Design na míru", "Responzivní web", "SEO základ", "Rychlé načítání", "Kontaktní formulář", "Základní měření návštěvnosti"]
    },
    {
      label: "Web s vlastním CMS",
      title: "Web + administrace",
      price: "od 60 000 Kč",
      time: "6–10 týdnů",
      suitedFor: "firmy, které chtějí web samy spravovat a pravidelně měnit obsah",
      desc: "Web s vlastní administrací, databází a možností jednoduché správy obsahu bez programování.",
      features: ["Vše z webu na míru", "Vlastní CMS", "Databáze", "Správa stránek, článků nebo referencí", "Přihlášení do administrace", "Základní zabezpečení"]
    },
    {
      label: "E-shop na míru",
      title: "E-shop na míru",
      price: "od 90 000 Kč",
      time: "2–3 měsíce",
      suitedFor: "prodej produktů, poukazů, služeb, termínů nebo objednávek",
      desc: "E-shopové řešení na míru se správou produktů, objednávek, plateb, dopravy a možností napojení na účetnictví nebo ERP.",
      features: ["Produktový katalog", "Kategorie", "Košík a objednávkový proces", "Administrace objednávek", "Platební brána", "Doprava", "Základní e-commerce měření", "Možnost napojení na účetnictví / ERP"],
      featured: true
    },
    {
      label: "Webový systém / integrace na míru",
      title: "Webové systémy",
      price: "od 120 000 Kč",
      time: "3+ měsíce",
      suitedFor: "rezervační systémy, klientské zóny, interní evidence, automatizace a integrace",
      desc: "Vlastní CMS, klientské zóny, rezervační systémy, interní evidence, API integrace a automatizace firemních procesů.",
      features: ["Analýza procesu", "Návrh architektury", "Databáze", "Přihlášení a role", "API integrace", "Testování", "Zabezpečení", "Dlouhodobý rozvoj"]
    }
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Ceník | Petr Slavík"
        description="Orientační ceník tvorby webů na míru, e-shopů, vlastního CMS, webových systémů a integrací. Přesná cena podle rozsahu projektu."
        path="/cenik"
      />
      <PageHero 
        title="Ceník."
        description="Orientační cenové rámce podle typu řešení. Přesnou cenu a termín stanovím po úvodní konzultaci, návrhu rozsahu a specifikaci projektu."
      />

      {/* Pricing Grid */}
      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-7xl">
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
                  Poptat projekt
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servisní plány */}
      <section className="py-16 md:py-24 px-4 bg-brand-white border-t-2 border-brand-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-6 text-brand-black">Měsíční servis a rozvoj.</h2>
              <p className="text-lg text-brand-grey-dark leading-relaxed max-w-xl">
                Spuštěním projekt nekončí. Hlídám provoz, bezpečnost, zálohy, drobné úpravy, měření a další rozvoj podle reálných potřeb.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-white p-8 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                <h3 className="text-xl font-extrabold uppercase text-brand-black mb-2">Stabilita & Bezpečnost</h3>
                <div className="text-2xl font-extrabold text-brand-black mb-6">od 2 500 Kč / měsíc</div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-brand-grey-dark text-sm">
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Zálohy
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Monitoring dostupnosti
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Technická kontrola
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Drobné úpravy
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Bezpečnostní dohled
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Prioritní podpora podle tarifu
                  </li>
                </ul>
              </div>
              <div className="bg-brand-white p-8 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                <h3 className="text-xl font-extrabold uppercase text-brand-black mb-2">Růst & Integrace</h3>
                <div className="text-2xl font-extrabold text-brand-black mb-6">Individuálně</div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-brand-grey-dark text-sm">
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Nové funkce
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Analytika
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> UX úpravy
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Rozvoj integrací
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Automatizace
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Další vývoj podle priorit
                  </li>
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
