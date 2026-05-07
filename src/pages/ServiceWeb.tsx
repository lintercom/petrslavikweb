import type { ReactNode } from 'react';
import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { PageCTA } from '@/components/layout/PageCTA';
import { Button } from '@/components/ui/Button';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

type ServiceSection = {
  title: string;
  body: ReactNode[];
};

type ServicePage = {
  path: string;
  title: string;
  heroTitle: string;
  description: string;
  seoDescription: string;
  eyebrow: string;
  intro: string;
  essentials: string[];
  sections: ServiceSection[];
  ctaTitle: string;
  ctaDescription: string;
};

const servicePages: Record<string, ServicePage> = {
  'tvorba-webu': {
    path: '/sluzby/tvorba-webu',
    title: 'Tvorba webu',
    heroTitle: 'Tvorba webu.',
    description: 'Nový web stavím od sdělení, struktury a obsahu. Cílem je web, který jasně vysvětlí nabídku, působí důvěryhodně a vede návštěvníka ke kontaktu.',
    seoDescription: 'Tvorba webu na míru: ujasnění nabídky, struktura, textace, design, vývoj, SEO základ, kontaktní formulář a nasazení.',
    eyebrow: 'Nový web na míru',
    intro: 'Tvorba webu je vhodná ve chvíli, kdy začínáte, měníte nabídku nebo potřebujete web, který konečně jasně vysvětlí, co děláte a proč vás má zákazník oslovit.',
    essentials: [
      'Ujasnění nabídky a cílového zákazníka',
      'Návrh struktury webu',
      'Textace klíčových částí',
      'Design a responzivní zpracování',
      'SEO základ a technická příprava',
      'Kontaktní cesta a formulář',
      'Nasazení na hosting',
    ],
    sections: [
      {
        title: 'Začínám tím, co má web říkat',
        body: [
          <>Nejdřív řeším sdělení. Potřebuji pochopit, co nabízíte, komu to pomáhá, proč je vaše řešení hodnotné a jaký další krok má návštěvník udělat. Teprve potom dává smysl řešit strukturu, vzhled a technické zpracování.</>,
          <>Výsledkem není obecná prezentace, ale web postavený kolem konkrétní nabídky. Návštěvník se má rychle zorientovat, pochopit rozdíl proti konkurenci a vědět, proč vás kontaktovat.</>,
        ],
      },
      {
        title: 'Co při tvorbě webu dodávám',
        body: [
          <>Navrhnu strukturu webu, hlavní obsahové bloky, texty pro klíčové části, vizuální podobu a responzivní zpracování pro mobil i desktop. Součástí je také základní technické SEO, rychlé načítání, kontaktní formulář a příprava pro měření důležitých akcí.</>,
          <>Web stavím tak, aby šel dál rozšiřovat. Pokud později přibudou nové služby, reference, články nebo formuláře, naváže na něj služba <Link to="/sluzby/rozsireni-upravy-webu" className="font-extrabold underline underline-offset-4 hover:text-brand-grey-dark">Rozšíření a úpravy webu</Link>.</>,
        ],
      },
      {
        title: 'Jaký je výsledek',
        body: [
          <>Dostanete hotový web, který má jasnou strukturu, srozumitelný obsah, důvěryhodnou prezentaci a jasnou cestu ke kontaktu. Po spuštění na něj může navázat <Link to="/sluzby/mesicni-sprava" className="font-extrabold underline underline-offset-4 hover:text-brand-grey-dark">Měsíční správa</Link>, pokud chcete web dlouhodobě udržovat a rozvíjet bez technických starostí.</>,
        ],
      },
    ],
    ctaTitle: 'Potřebujete nový web, který má jasný cíl?',
    ctaDescription: 'Začneme nabídkou, zákazníkem a tím, co má web reálně přinést. Z toho vznikne struktura, texty, design i technické řešení.',
  },
  'redesign-webu': {
    path: '/sluzby/redesign-webu',
    title: 'Redesign webu',
    heroTitle: 'Redesign webu.',
    description: 'Redesign není jen nový vzhled. Je to přestavba webu, který nepřináší poptávky, špatně vysvětluje nabídku nebo nepůsobí důvěryhodně.',
    seoDescription: 'Redesign webu: analýza současného webu, nová struktura, přepsání textů, zlepšení důvěry, kontaktní cesty, SEO a přesměrování.',
    eyebrow: 'Přestavba nefunkčního webu',
    intro: 'Redesign dává smysl, když web existuje, ale neplní svou roli. Návštěvníci nerozumí nabídce, nepoptávají, nedůvěřují nebo se na webu ztrácí.',
    essentials: [
      'Analýza současného webu',
      'Pojmenování slabých míst',
      'Nová struktura a tok stránky',
      'Přepsání klíčových textů',
      'Důvěryhodnostní prvky',
      'Zlepšení cesty ke kontaktu',
      'Technické SEO a přesměrování',
    ],
    sections: [
      {
        title: 'Neřeším jen vzhled',
        body: [
          <>U redesignu se nejdřív dívám na to, proč současný web nefunguje. Kontroluji sdělení, strukturu, texty, důvěryhodnost, mobilní zobrazení, rychlost a cestu návštěvníka ke kontaktu.</>,
          <>Nový vzhled má smysl až ve chvíli, kdy víme, co má změnit. Pokud web jen graficky převlékneme, ale necháme špatnou strukturu a nejasnou nabídku, problém zůstane.</>,
        ],
      },
      {
        title: 'Co při redesignu měním',
        body: [
          <>Přestavím strukturu webu, upravím nebo přepíšu klíčové části textů, doplním argumenty pro důvěru a zjednoduším cestu ke kontaktu. Součástí může být také přesměrování důležitých URL, aby se neztratila návštěvnost ze starého webu.</>,
          <>Když je původní web technicky nebo obsahově příliš slabý, může být výhodnější postavit nové řešení v rámci služby <Link to="/sluzby/tvorba-webu" className="font-extrabold underline underline-offset-4 hover:text-brand-grey-dark">Tvorba webu</Link>. Řeknu to narovinu, pokud je to pro výsledek lepší cesta.</>,
        ],
      },
      {
        title: 'Jaký je výsledek',
        body: [
          <>Výsledkem je web, který působí profesionálněji, srozumitelněji vysvětluje nabídku a lépe vede návštěvníka k poptávce. Redesign má odstranit důvody, kvůli kterým web dnes zbytečně brzdí obchod.</>,
        ],
      },
    ],
    ctaTitle: 'Máte web, který nefunguje tak, jak má?',
    ctaDescription: 'Podíváme se, kde se návštěvník ztrácí, co snižuje důvěru a jak web přestavět, aby začal dávat obchodní smysl.',
  },
  'rozsireni-upravy-webu': {
    path: '/sluzby/rozsireni-upravy-webu',
    title: 'Rozšíření a úpravy webu',
    heroTitle: 'Rozšíření a úpravy webu.',
    description: 'Pro existující weby doplňuji nové části, funkce a technické úpravy podle toho, co firma reálně potřebuje pro další provoz a růst.',
    seoDescription: 'Rozšíření a úpravy webu: nové sekce, stránky, formuláře, interakce, napojení na systémy, UX úpravy, výkon a technické opravy.',
    eyebrow: 'Rozvoj existujícího webu',
    intro: 'Tahle služba je pro weby, které už běží, ale potřebují se posunout dál. Může jít o novou stránku, formulář, napojení na systém, úpravu použitelnosti nebo technické zlepšení.',
    essentials: [
      'Nové sekce a stránky',
      'Formuláře a interakce',
      'Napojení na externí systémy',
      'Úpravy UX a obsahu',
      'Zlepšení rychlosti',
      'Technické opravy',
      'Rozšíření podle provozu firmy',
    ],
    sections: [
      {
        title: 'Úpravy podle reálné potřeby',
        body: [
          <>Web se po spuštění často začne měnit. Přibudou nové služby, časté dotazy, reference, formuláře, kampaně nebo požadavky z provozu. Tyto změny řeším tak, aby web zůstal přehledný a nerozpadl se do náhodných zásahů.</>,
          <>Nejde jen o to něco doplnit. Důležité je, aby nová část zapadla do struktury webu, dávala smysl návštěvníkovi a technicky fungovala bez zbytečných komplikací.</>,
        ],
      },
      {
        title: 'Co typicky upravuji',
        body: [
          <>Doplňuji nové sekce a podstránky, upravuji texty, stavím formuláře, řeším interakce, opravy chyb, zrychlení vybraných částí webu nebo napojení na externí nástroje. U větších úprav navrhnu i to, jak změna ovlivní celou strukturu webu.</>,
          <>Pokud se úpravy opakují pravidelně, dává větší smysl nastavit <Link to="/sluzby/mesicni-sprava" className="font-extrabold underline underline-offset-4 hover:text-brand-grey-dark">Měsíční správu</Link>, aby byl rozvoj webu průběžný a předvídatelný.</>,
        ],
      },
      {
        title: 'Jaký je výsledek',
        body: [
          <>Výsledkem je web, který se dokáže přizpůsobovat firmě. Nemusíte ho po každé změně nabídky celý předělávat. Místo toho ho postupně rozvíjíme podle toho, co skutečně potřebujete.</>,
        ],
      },
    ],
    ctaTitle: 'Potřebujete web rozšířit nebo opravit?',
    ctaDescription: 'Popište, co má web nově umět nebo co dnes brzdí provoz. Navrhnu úpravu tak, aby dávala smysl technicky i obchodně.',
  },
  'mesicni-sprava': {
    path: '/sluzby/mesicni-sprava',
    title: 'Měsíční správa',
    heroTitle: 'Měsíční správa.',
    description: 'Po spuštění webu navazuje dlouhodobá péče placená měsíčním paušálem. Rozsah nastavíme podle toho, co ode mě budete pravidelně potřebovat.',
    seoDescription: 'Měsíční správa webu: technická kontrola, drobné úpravy, kontrola formulářů, rozvoj obsahu, měření, SEO úpravy a dlouhodobá péče.',
    eyebrow: 'Web bez starostí',
    intro: 'Web není jednorázová věc. Po spuštění je potřeba hlídat funkčnost, provádět drobné úpravy, reagovat na změny ve firmě a postupně zlepšovat obsah i techniku.',
    essentials: [
      'Technická kontrola webu',
      'Drobné obsahové úpravy',
      'Kontrola formulářů',
      'Průběžné opravy',
      'Menší rozvojové úpravy',
      'Vyhodnocení měření',
      'Doporučení dalšího postupu',
    ],
    sections: [
      {
        title: 'Paušál podle skutečného rozsahu',
        body: [
          <>Měsíční správa je placená paušálem. Jeho výše závisí na tom, co ode mě budete pravidelně potřebovat. Jiný rozsah dává smysl pro malý prezentační web a jiný pro web, který se často mění, měří poptávky a průběžně rozvíjí.</>,
          <>Na začátku si domluvíme, co má být v péči zahrnuté: technická kontrola, drobné úpravy textů, nové menší sekce, kontrola formulářů, vyhodnocování měření nebo další doporučení.</>,
        ],
      },
      {
        title: 'Co v rámci správy dělám',
        body: [
          <>Kontroluji, jestli web funguje, jestli se odesílají formuláře, jestli se nerozbíjí důležité části a jestli web postupně neztrácí výkon. Průběžně řeším menší úpravy obsahu, technické opravy a doporučení, co má smysl zlepšit dál.</>,
          <>Větší zásahy, nové funkce nebo rozsáhlejší části webu se řeší samostatně přes <Link to="/sluzby/rozsireni-upravy-webu" className="font-extrabold underline underline-offset-4 hover:text-brand-grey-dark">Rozšíření a úpravy webu</Link>, aby bylo jasné, co patří do pravidelné péče a co je samostatný rozvoj.</>,
        ],
      },
      {
        title: 'Jaký je výsledek',
        body: [
          <>Výsledkem je web, který nezůstane po spuštění bez dozoru. Máte někoho, kdo zná jeho logiku, umí ho upravit, pohlídat a postupně posouvat podle toho, jak se mění vaše firma.</>,
        ],
      },
    ],
    ctaTitle: 'Chcete mít web po spuštění pod kontrolou?',
    ctaDescription: 'Nastavíme rozsah péče podle toho, co budete měsíčně potřebovat. Paušál bude odpovídat reálné práci, ne univerzálnímu balíčku.',
  },
};

const serviceAliases: Record<string, string> = {
  'webove-stranky': 'tvorba-webu',
};

export function ServiceWeb() {
  const { serviceSlug } = useParams();
  const serviceKey = serviceAliases[serviceSlug ?? 'tvorba-webu'] ?? serviceSlug ?? 'tvorba-webu';
  const service = servicePages[serviceKey];

  if (!service) {
    return (
      <div className="flex flex-col bg-brand-white">
        <SEO title="Služba nenalezena | Petr Slavík" description="Požadovaný detail služby nebyl nalezen." path={`/sluzby/${serviceSlug ?? ''}`} />
        <PageHero title="Služba nenalezena." description="Tento detail služby neexistuje nebo byl přesunut." />
        <section className="py-16 md:py-24 px-4 bg-brand-white">
          <div className="container mx-auto max-w-3xl">
            <Button href="/sluzby" variant="primary">Zpět na služby</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title={`${service.title} | Petr Slavík`}
        description={service.seoDescription}
        path={service.path}
        structuredData={[
          serviceSchema({
            name: service.title,
            description: service.seoDescription,
            path: service.path,
          }),
          breadcrumbSchema([
            { name: 'Úvod', path: '/' },
            { name: 'Služby', path: '/sluzby' },
            { name: service.title, path: service.path },
          ]),
        ]}
      />
      <PageHero title={service.heroTitle} description={service.description} />

      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-12 lg:gap-20 items-start"
          >
            <aside className="lg:sticky lg:top-28 border-l-2 border-brand-black pl-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-brand-grey-dark mb-4">{service.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-brand-black mb-6">
                Co ode mě dostanete
              </h2>
              <p className="text-base text-brand-grey-dark leading-relaxed mb-8">{service.intro}</p>
              <ul className="space-y-3 mb-8">
                {service.essentials.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-extrabold uppercase tracking-wide text-brand-black">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-brand-black" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/kontakt" variant="primary" size="lg">
                Poptat službu
              </Button>
            </aside>

            <article className="space-y-14">
              {service.sections.map((section) => (
                <section key={section.title} className="border-t-2 border-brand-black pt-8">
                  <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-brand-black mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-5 text-lg text-brand-grey-dark leading-relaxed">
                    {section.body.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </article>
          </motion.div>
        </div>
      </section>

      <PageCTA title={service.ctaTitle} description={service.ctaDescription} />
      <BigFooterCTA />
    </div>
  );
}
