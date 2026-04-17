import { HeroInteractive } from '@/components/blocks/HeroInteractive';
import { MarqueeServices } from '@/components/blocks/MarqueeServices';
import { LogoGrid } from '@/components/blocks/LogoGrid';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { Accordion } from '@/components/ui/Accordion';
import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SpotlightHeading } from '@/components/ui/SpotlightHeading';
import { SectionSpotlight } from '@/components/ui/SectionSpotlight';
import { SEO } from '@/components/ui/SEO';

export function Home() {
  const faqItems = [
    { title: "Kolik to stojí?", content: "Menší weby začínají na 35 000 Kč, e-shopy s integracemi na 60 000 Kč a webové aplikace na 120 000 Kč. Vždy ale dostanete přesnou fixní cenu předem na základě diagnostiky." },
    { title: "Jak dlouho to trvá?", content: "Standardní firemní web trvá 4-6 týdnů. E-shop s integracemi 2-3 měsíce. Pracuji podle jasného harmonogramu." },
    { title: "Co když nemám texty?", content: "Nevadí. Pomohu vám s obsahovou strukturou a v rámci doplňkových služeb zajistím profesionálního copywritera, který texty napíše tak, aby prodávaly." },
    { title: "Kdo vlastní web a data?", content: "Vy. Po doplacení faktury přechází veškerá práva k dílu na vás. Hosting i doména jsou vedeny na vaše jméno." },
    { title: "Jak řešíte měření a cookies?", content: "Weby odevzdávám se základním nastavením Google Analytics 4, měřením hlavních konverzí a plně funkční cookie lištou v souladu s legislativou." },
    { title: "Jak funguje napojení na POHODA?", content: "Využívám POHODA mServer nebo XML komunikaci. Z e-shopu se automaticky stahují objednávky a tvoří faktury, zpět se posílají stavy skladů a ceníky." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.content
      }
    }))
  };

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Petr Slavík | Tvorba webů, e-shopů a aplikací"
        description="Freelance web developer se specializací na weby, e-shopy a webové aplikace. Fixní ceny, jasný harmonogram, integrace s POHODOU."
        path="/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <HeroInteractive />
      <MarqueeServices />
      
      {/* Text Intro Section */}
      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-black">
                Jsem Petr Slavík a navrhuji weby, e-shopy a aplikace na míru, které mají jasný cíl – přivádět zákazníky a podporovat růst vašeho byznysu.
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-base text-brand-grey-dark leading-relaxed mb-6">
                Specializuji se na tvorbu webových stránek, e-shopů a webových aplikací na míru. Od prvního návrhu až po finální nasazení řeším celý proces tak, aby výsledek dával smysl nejen technicky, ale hlavně obchodně.
              </p>
              <p className="text-base text-brand-grey-dark leading-relaxed mb-6">
                Na každém projektu pracuji osobně od začátku do konce. Díky tomu vznikají řešení, která jsou rychlá, přehledná a připravená na další rozvoj, bez zbytečné složitosti.
              </p>
              <p className="text-base text-brand-grey-dark leading-relaxed">
                Spolupráce je přímá a efektivní – bez byrokracie, zdržování a zbytečných mezičlánků.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <LogoGrid />

      {/* Pro koho to je - Redesigned to fit the bold style */}
      <section
        style={{ isolation: 'isolate' }}
        className="relative py-24 px-4 bg-brand-black text-brand-white overflow-hidden"
      >
        <SectionSpotlight />
        <div className="container mx-auto max-w-6xl relative z-10 mix-blend-difference">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <SpotlightHeading as="h2" text="Pro koho tvořím." size="md" className="mb-4" />
            <p className="text-xl text-brand-grey-light max-w-2xl">Řešení na míru vaší aktuální situaci a velikosti byznysu.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {[
              { title: "Malý podnikatel", desc: "Potřebujete profesionální web, ale bojíte se skrytých nákladů a složitého procesu. Rychlé spuštění, jasná cena, web, který budí důvěru a generuje poptávky.", link: "/sluzby/webove-stranky", linkText: "Webové stránky" },
              { title: "Firma & Marketing", desc: "Váš současný web nekonvertuje, je pomalý a špatně se spravuje. Výkonný web postavený na datah, snadná správa, více kvalitních leadů.", link: "/sluzby/webove-stranky", linkText: "Firemní weby" },
              { title: "E-commerce", desc: "Trávíte hodiny ručním přepisováním objednávek a faktur. E-shop s automatizovaným napojením na účetnictví a dopravce. Čas na růst.", link: "/sluzby/e-shop", linkText: "E-shopy na míru" },
              { title: "Startup / Tech", desc: "Potřebujete digitalizovat procesy nebo postavit MVP aplikace. Bezpečný systém, API integrace, správa rolí a jasná roadmapa rozvoje.", link: "/sluzby/webove-aplikace", linkText: "Webové aplikace" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="w-full h-[2px] bg-brand-grey-dark mb-6 group-hover:bg-brand-white transition-colors duration-500"></div>
                <h3 className="text-xl md:text-2xl font-extrabold uppercase mb-4 group-hover:translate-x-4 transition-transform duration-500 text-brand-white">{item.title}</h3>
                <p className="text-base text-brand-grey-light mb-6 leading-relaxed">{item.desc}</p>
                <Link to={item.link} className="inline-flex items-center gap-2 text-brand-white font-extrabold uppercase tracking-widest text-xs hover:gap-4 transition-[gap] duration-300">
                  {item.linkText} <TrendingUp className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Minimalist style */}
      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-8 text-brand-black">Časté dotazy.</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion items={faqItems} />
          </motion.div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
