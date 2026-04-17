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
      label: "Web Start / Growth",
      title: "Webové stránky",
      price: "od 35 000 Kč",
      time: "4–6 týdnů",
      desc: "Ideální pro firemní prezentace, které potřebují budit důvěru a generovat leady.",
      features: ["Návrh struktury a UX", "Unikátní moderní design", "Rychlé načítání a SEO základ", "CMS pro snadnou správu", "Základní nastavení analytiky (GA4)"]
    },
    {
      label: "E-shop Start / Scale",
      title: "E-shopy",
      price: "od 60 000 Kč",
      time: "2–3 měsíce",
      desc: "Prodejní stroje na platformách Shoptet/Upgates s důrazem na automatizaci.",
      features: ["Vizuální úpravy šablony", "Nastavení platformy a dopravy", "Napojení na platební bránu", "Základní napojení na POHODA / ERP", "E-commerce analytika"],
      featured: true
    },
    {
      label: "Web App MVP / Product",
      title: "Webové aplikace",
      price: "od 120 000 Kč",
      time: "3+ měsíce",
      desc: "Systémy na míru, klientské portály a digitalizace interních procesů.",
      features: ["Discovery fáze a návrh architektury", "Vývoj na míru (React, Node.js)", "API integrace třetích stran", "Správa rolí a oprávnění", "Zabezpečení a testování"]
    }
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Ceník | Petr Slavík"
        description="Transparentní ceník za tvorbu webů, e-shopů a aplikací. Fixní ceny předem."
        path="/cenik"
      />
      <PageHero 
        title="Ceník."
        description="Transparentní cenové rámce. Přesnou fixní cenu a harmonogram dostanete vždy předem na základě úvodní diagnostiky."
      />

      {/* Pricing Grid */}
      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex flex-col p-8 md:p-10 border-2 border-brand-black hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow] duration-300 ${plan.featured ? 'bg-brand-black text-brand-white' : 'bg-brand-white text-brand-black'}`}
              >
                <div className={`text-xs font-extrabold uppercase tracking-widest mb-6 ${plan.featured ? 'text-brand-grey-light' : 'text-brand-grey-dark'}`}>
                  {plan.label}
                </div>
                <h3 className="text-3xl font-extrabold uppercase tracking-tighter mb-4">{plan.title}</h3>
                <div className="text-2xl font-extrabold mb-2">{plan.price}</div>
                <div className={`text-xs font-extrabold uppercase tracking-widest mb-6 ${plan.featured ? 'text-brand-grey-light/60' : 'text-brand-grey-dark/60'}`}>
                  {plan.time}
                </div>
                <p className={`text-base mb-8 leading-relaxed ${plan.featured ? 'text-brand-grey-light' : 'text-brand-grey-dark'}`}>
                  {plan.desc}
                </p>
                
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
                  variant={plan.featured ? 'outline' : 'primary'} 
                  className={`w-full py-4 text-base font-extrabold uppercase tracking-widest ${plan.featured ? 'border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black hover:shadow-[4px_4px_0px_0px_rgba(243,242,238,1)]' : ''}`}
                >
                  Poptat projekt
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servisní plány */}
      <section className="py-24 px-4 bg-brand-white border-t-2 border-brand-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-6 text-brand-black">Měsíční servis a rozvoj.</h2>
              <p className="text-lg text-brand-grey-dark leading-relaxed max-w-xl">
                Spuštěním webu to nekončí. Starám se o to, aby váš projekt byl bezpečný, rychlý a neustále se zlepšoval.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-white p-8 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                <h3 className="text-xl font-extrabold uppercase text-brand-black mb-2">Stabilita & Bezpečnost</h3>
                <div className="text-2xl font-extrabold text-brand-black mb-6">od 2 500 Kč / měsíc</div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-brand-grey-dark text-sm">
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Aktualizace systému
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Denní zálohování
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Monitoring dostupnosti
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Prioritní podpora
                  </li>
                </ul>
              </div>
              <div className="bg-brand-white p-8 border-2 border-brand-black shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
                <h3 className="text-xl font-extrabold uppercase text-brand-black mb-2">Růst & Integrace</h3>
                <div className="text-2xl font-extrabold text-brand-black mb-6">Individuálně</div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-brand-grey-dark text-sm">
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Analytika a UX
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> A/B testování
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Nové funkce
                  </li>
                  <li className="flex items-center gap-2 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full"></div> Rozvoj integrací
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
