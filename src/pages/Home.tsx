import { HeroInteractive } from '@/components/blocks/HeroInteractive';
import { MarqueeServices } from '@/components/blocks/MarqueeServices';
import { LogoGrid } from '@/components/blocks/LogoGrid';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { Accordion } from '@/components/ui/Accordion';
import { BarChart3, MessageSquare, PenLine, Search, Settings, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SpotlightHeading } from '@/components/ui/SpotlightHeading';
import { SectionSpotlight } from '@/components/ui/SectionSpotlight';
import { SEO } from '@/components/ui/SEO';
import { personSchema, professionalServiceSchema, websiteSchema } from '@/lib/seo';

export function Home() {
  const faqItems = [
    { title: "Kolik stojí web?", content: "Menší firemní web obvykle začíná od 35 000 Kč. Web s propracovanější strukturou, více podstránkami, měřením a přípravou obsahu se většinou pohybuje od 60 000 Kč. Přesný rozsah určím až podle toho, jaký problém má web vyřešit." },
    { title: "Jak dlouho to trvá?", content: "Jednodušší firemní web obvykle 4-6 týdnů. Pokud je potřeba nejdřív ujasnit nabídku, strukturu, texty nebo více typů zákazníků, počítejte spíš s 6-10 týdny." },
    { title: "Co když nevím, co má na webu být?", content: "To je běžná situace. Nezačínám barvami ani efekty, ale tím, co má web přinést: poptávky, důvěru, lepší vysvětlení nabídky nebo méně zbytečných dotazů. Z toho vznikne struktura a texty." },
    { title: "Pomůžete i s texty?", content: "Ano. Pomůžu pojmenovat hlavní sdělení, rozdělit nabídku do srozumitelných sekcí a napsat texty tak, aby návštěvník rychle pochopil, proč má kontaktovat právě vás." },
    { title: "Budu si moct web upravovat?", content: "Podle rozsahu projektu lze připravit jednoduchou správu vybraných částí webu, například textů, referencí, článků nebo často kladených dotazů." },
    { title: "Jak poznám, že web funguje?", content: "Součástí může být měření hlavních akcí: kliknutí na kontakt, odeslání formuláře nebo návštěvy důležitých stránek. Web pak není jen hotová prezentace, ale nástroj, který se dá vyhodnocovat a zlepšovat." }
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
        title="Petr Slavík | Weby, které řeší problém"
        description="Tvorba firemních webů, které jasně vysvětlí nabídku, budují důvěru a pomáhají získávat poptávky."
        path="/"
        structuredData={[personSchema(), websiteSchema(), professionalServiceSchema(), faqSchema]}
      />

      <HeroInteractive />
      <MarqueeServices />

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
                Stavím weby pro firmy, které potřebují jasně vysvětlit svou nabídku, získávat poptávky a nepůsobit jako další zaměnitelná prezentace.
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-base text-brand-grey-dark leading-relaxed mb-6">
                Neřeším web jako sadu pěkných obrazovek. Nejdřív hledám, kde se návštěvník ztrácí, čemu nerozumí a proč neudělá další krok.
              </p>
              <p className="text-base text-brand-grey-dark leading-relaxed">
                Výsledkem je web s promyšlenou strukturou, texty, důvěryhodnými argumenty a jasnou cestou ke kontaktu.
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
                Jaký problém má web řešit
              </h2>
              <p className="text-base md:text-lg text-brand-grey-dark leading-relaxed">
                Dobrý web nezačíná otázkou, jak má vypadat. Začíná tím, co dnes nefunguje: lidé nerozumí nabídce, nevěří vám, neptají se, nebo se ptají pořád na totéž.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Search, title: 'Nejasná nabídka' },
                { icon: ShieldCheck, title: 'Nízká důvěra' },
                { icon: MessageSquare, title: 'Málo poptávek' },
                { icon: PenLine, title: 'Slabé texty' },
                { icon: Settings, title: 'Složitá správa' },
                { icon: BarChart3, title: 'Chybí měření' },
                { icon: TrendingUp, title: 'Špatná cesta k akci' },
                { icon: MessageSquare, title: 'Zbytečné dotazy' },
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
            <p className="text-xl text-brand-grey-light max-w-2xl">Weby pro firmy a živnostníky, kteří potřebují, aby návštěvník rychle pochopil hodnotu jejich práce.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {[
              { title: "Služby a odborníci", desc: "Když prodáváte znalost, zkušenost nebo osobní přístup a web musí vysvětlit, proč má klient oslovit právě vás.", link: "/sluzby/webove-stranky", linkText: "Web pro služby" },
              { title: "Menší firmy", desc: "Když máte nabídku, která dává smysl, ale web ji neumí strukturovat, zjednodušit a přeložit do jazyka zákazníka.", link: "/sluzby/webove-stranky", linkText: "Web pro firmu" },
              { title: "Lokální podnikání", desc: "Když potřebujete působit důvěryhodně, být dohledatelní a vést lidi rychle ke kontaktu, domluvě schůzky nebo návštěvě.", link: "/sluzby/webove-stranky", linkText: "Lokální web" },
              { title: "Zastaralý web", desc: "Když současný web nepůsobí profesionálně, špatně se čte na mobilu nebo už neodpovídá tomu, co dnes nabízíte.", link: "/sluzby/webove-stranky", linkText: "Redesign webu" }
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
