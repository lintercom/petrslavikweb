import { HeroInteractive } from '@/components/blocks/HeroInteractive';
import { MarqueeServices } from '@/components/blocks/MarqueeServices';
import { LogoGrid } from '@/components/blocks/LogoGrid';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { Accordion } from '@/components/ui/Accordion';
import { TrendingUp, Database, CreditCard, CalendarClock, BarChart3, Cable, Workflow, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SpotlightHeading } from '@/components/ui/SpotlightHeading';
import { SectionSpotlight } from '@/components/ui/SectionSpotlight';
import { SEO } from '@/components/ui/SEO';

export function Home() {
  const faqItems = [
    { title: "Kolik to stojí?", content: "Jednodušší weby začínají od 35 000 Kč. Weby s vlastním CMS obvykle od 60 000 Kč, e-shopy na míru od 90 000 Kč a rozsáhlejší webové systémy od 120 000 Kč. Přesnou cenu určím po úvodní konzultaci a specifikaci rozsahu." },
    { title: "Jak dlouho to trvá?", content: "Jednodušší firemní web obvykle 4–6 týdnů. Web s vlastním CMS, e-shop nebo řešení s integracemi trvá podle rozsahu přibližně 2–3 měsíce a více." },
    { title: "Co když nemám texty?", content: "Pomůžu vám navrhnout strukturu obsahu, hlavní sdělení a logiku stránek. Pokud bude potřeba, můžeme zapojit copywriting tak, aby texty byly srozumitelné pro zákazníky i dobře připravené pro SEO." },
    { title: "Kdo vlastní web a data?", content: "Vy. Web, obsah i data patří vám. Doména a hosting mohou být vedené na vaše jméno a po doplacení projektu máte k řešení plný přístup podle domluveného rozsahu." },
    { title: "Jak řešíte měření a cookies?", content: "Web můžu dodat s nastavením GA4, Google Search Console, měřením hlavních konverzí a cookie lištou podle potřeb projektu." },
    { title: "Jak funguje napojení na POHODA?", content: "Napojení na POHODA řeším podle konkrétního procesu firmy — například přes XML komunikaci nebo POHODA mServer. Přenášet lze objednávky, faktury, sklady, ceníky nebo další data podle možností systému." }
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
        title="Petr Slavík | Tvorba webů a e-shopů na míru"
        description="Tvorba webů a e-shopů na míru s vlastním CMS, databází, měřením, platebními bránami, rezervačními systémy a napojením na účetnictví nebo ERP."
        path="/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <HeroInteractive />
      <MarqueeServices />
      
      {/* Text Intro Section */}
      <section className="py-16 md:py-24 px-4 bg-brand-white">
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
                Stavím weby a e-shopy, které nejsou jen hezkou prezentací, ale praktickým nástrojem pro poptávky, prodej a správu obsahu.
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-base text-brand-grey-dark leading-relaxed mb-6">
                Od návrhu přes vývoj až po vlastní administraci, databázi a napojení na platební brány, rezervační systémy, účetnictví nebo ERP.
              </p>
              <p className="text-base text-brand-grey-dark leading-relaxed">
                Komunikujete přímo se mnou. Projekt řešíte s člověkem, který ho navrhuje, vyvíjí a rozumí jeho technickým i obchodním souvislostem.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <LogoGrid />

      <section className="py-16 md:py-24 px-4 bg-brand-white border-t-2 border-brand-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-brand-black mb-6">
                Co může být součástí řešení
              </h2>
              <p className="text-base md:text-lg text-brand-grey-dark leading-relaxed">
                Web nemusí být jen sada statických stránek. Podle potřeby může obsahovat vlastní administraci, databázi, platby, rezervace nebo napojení na další systémy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Settings, title: 'Vlastní CMS' },
                { icon: Database, title: 'Databáze' },
                { icon: CreditCard, title: 'Platební brána' },
                { icon: CalendarClock, title: 'Rezervační systém' },
                { icon: Cable, title: 'ERP / účetnictví' },
                { icon: BarChart3, title: 'Měření a konverze' },
                { icon: Workflow, title: 'Automatizace' },
                { icon: TrendingUp, title: 'API integrace' },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 border-2 border-brand-black bg-brand-white p-4 shadow-[3px_3px_0px_0px_rgba(18,18,18,1)]">
                  <item.icon className="w-6 h-6 text-brand-black shrink-0" />
                  <span className="text-sm font-extrabold uppercase tracking-wide text-brand-black">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Pro koho to je - Redesigned to fit the bold style */}
      <section
        style={{ isolation: 'isolate' }}
        className="relative py-16 md:py-24 px-4 bg-brand-black text-brand-white overflow-hidden"
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
            <p className="text-xl text-brand-grey-light max-w-2xl">Weby, e-shopy a online systémy podle toho, jak vaše firma opravdu funguje.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {[
              { title: "Živnostníci a malé firmy", desc: "Web na míru, který jasně vysvětlí vaše služby, budí důvěru a pomáhá získávat poptávky.", link: "/sluzby/webove-stranky", linkText: "Weby na míru" },
              { title: "Firmy s vlastním provozem", desc: "Web s vlastní administrací, databází, měřením, formuláři a funkcemi podle konkrétního provozu firmy.", link: "/sluzby/webove-aplikace", linkText: "Vlastní CMS" },
              { title: "E-shopy a online prodej", desc: "E-shop nebo objednávkový systém na míru s platbami, dopravou, správou objednávek a napojením na účetnictví nebo ERP.", link: "/sluzby/e-shop", linkText: "E-shopy na míru" },
              { title: "Digitalizace procesů", desc: "Klientské zóny, interní administrace, rezervační systémy, evidence, API integrace a automatizace firemních procesů.", link: "/sluzby/webove-aplikace", linkText: "Vlastní CMS a systémy" }
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
      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-8 text-brand-black">Časté dotazy.</h2>
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
