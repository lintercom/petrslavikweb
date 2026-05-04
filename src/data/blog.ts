export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  datePublished: string;
  category: string;
  readingTime: string;
  seoDescription: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'proc-web-neprivadi-poptavky',
    title: 'Proč web nepřivádí poptávky',
    excerpt: 'Návštěvnost sama o sobě nestačí. Web musí rychle vysvětlit nabídku, vybudovat důvěru a dovést člověka ke konkrétní akci.',
    date: '12. 1. 2026',
    datePublished: '2026-01-12',
    category: 'Poptávky',
    readingTime: '5 min',
    seoDescription: 'Proč firemní web nepřivádí poptávky a jak zlepšit strukturu, texty, důvěru a cestu návštěvníka ke kontaktu.',
    sections: [
      {
        heading: 'Problém nebývá jen v designu',
        paragraphs: ['Mnoho webů vypadá na první pohled slušně, ale návštěvník z nich nepochopí, proč má firmu kontaktovat. Chybí jasná nabídka, konkrétní přínos a další krok.'],
        bullets: ['nejasné hlavní sdělení', 'obecné fráze místo konkrétní hodnoty', 'slabé kontaktní body', 'málo důkazů důvěry', 'chybějící měření poptávek'],
      },
      {
        heading: 'Co musí být jasné během pár vteřin',
        paragraphs: ['Návštěvník potřebuje rychle vědět, kde je, co nabízíte, pro koho to je a proč má pokračovat. Pokud musí význam webu luštit, často odejde.'],
      },
      {
        heading: 'Jak se web zlepší',
        paragraphs: ['Začíná se strukturou nabídky a cestou návštěvníka. Teprve potom dávají smysl vizuální úpravy, texty, formuláře a měření.'],
      },
    ],
  },
  {
    slug: 'jak-vysvetlit-nabidku-na-webu',
    title: 'Jak vysvětlit nabídku na webu',
    excerpt: 'Dobrá nabídka nestačí. Web ji musí rozdělit, pojmenovat a přeložit do jazyka zákazníka, který vás ještě nezná.',
    date: '19. 1. 2026',
    datePublished: '2026-01-19',
    category: 'Sdělení',
    readingTime: '6 min',
    seoDescription: 'Jak na webu srozumitelně vysvětlit nabídku, strukturovat služby a ukázat zákazníkovi důvod ke kontaktu.',
    sections: [
      {
        heading: 'Zákazník nezná váš kontext',
        paragraphs: ['To, co je pro vás samozřejmé, může být pro návštěvníka nejasné. Web proto nesmí jen vyjmenovat služby, ale ukázat situace, ve kterých dávají smysl.'],
      },
      {
        heading: 'Nabídku rozdělte podle problému',
        paragraphs: ['Místo pouhého seznamu služeb je často silnější ukázat, co klient řeší: málo poptávek, nejasná prezentace, zastaralý web nebo obsah, který nejde spravovat.'],
        bullets: ['pojmenujte situaci klienta', 'vysvětlete důsledek problému', 'ukažte navržený postup', 'dejte jasný další krok'],
      },
      {
        heading: 'Texty mají vést k rozhodnutí',
        paragraphs: ['Cílem textů není zaplnit stránku. Mají zkrátit cestu od nejistoty k rozhodnutí napsat, zavolat nebo poslat poptávku.'],
      },
    ],
  },
  {
    slug: 'redesign-webu-kdy-dava-smysl',
    title: 'Kdy dává smysl redesign webu',
    excerpt: 'Redesign není jen změna vzhledu. Má smysl ve chvíli, kdy současný web neodpovídá nabídce, nepůsobí důvěryhodně nebo nevede ke kontaktu.',
    date: '26. 1. 2026',
    datePublished: '2026-01-26',
    category: 'Redesign',
    readingTime: '5 min',
    seoDescription: 'Kdy dává smysl redesign firemního webu a jak poznat, že problém není jen ve vzhledu, ale ve struktuře a sdělení.',
    sections: [
      {
        heading: 'Zastaralý web může brzdit důvěru',
        paragraphs: ['Pokud web působí hůř než kvalita vaší práce, návštěvník si vytváří špatný první dojem ještě před tím, než vás osloví.'],
      },
      {
        heading: 'Nejdřív audit, potom design',
        paragraphs: ['Před redesignem je potřeba zjistit, co zachovat, co přepsat a co odstranit. Jinak hrozí, že nový web bude jen hezčí verzí stejného problému.'],
        bullets: ['kontrola obsahu', 'kontrola struktury', 'mobilní použitelnost', 'rychlost', 'kontaktní cesta', 'SEO dopady'],
      },
      {
        heading: 'Redesign má mít měřitelný cíl',
        paragraphs: ['Cílem může být více poptávek, lepší vysvětlení nabídky, vyšší důvěra nebo jednodušší správa obsahu. Bez cíle se redesign špatně vyhodnocuje.'],
      },
    ],
  },
  {
    slug: 'kolik-stoji-firemni-web',
    title: 'Kolik stojí firemní web',
    excerpt: 'Cena webu závisí hlavně na rozsahu přípravy, struktuře, textech a tom, jaký problém má web vyřešit.',
    date: '2. 2. 2026',
    datePublished: '2026-02-02',
    category: 'Ceník',
    readingTime: '5 min',
    seoDescription: 'Kolik stojí firemní web, co cenu ovlivňuje a proč nejde cenu dobře určit jen podle počtu podstránek.',
    sections: [
      {
        heading: 'Počet podstránek není všechno',
        paragraphs: ['Dva weby se stejným počtem stránek mohou mít úplně jinou náročnost. Rozdíl dělá hlavně příprava obsahu, struktura nabídky a míra práce s texty.'],
      },
      {
        heading: 'Co cenu ovlivňuje',
        paragraphs: ['Největší vliv má to, jak jasné je zadání a jak moc je potřeba přemýšlet nad sdělením. Pokud web jen skládá hotové podklady, je jednodušší. Pokud má pomoct ujasnit nabídku, práce je hlubší.'],
        bullets: ['rozsah nabídky', 'počet cílových skupin', 'stav současných textů', 'redesign starého webu', 'měření poptávek', 'správa obsahu'],
      },
      {
        heading: 'Cena má odpovídat výsledku',
        paragraphs: ['Web není izolovaný náklad. Pokud pomůže lépe vysvětlit nabídku a získat správné poptávky, vrací se přes obchodní výsledek.'],
      },
    ],
  },
  {
    slug: 'tvorba-webu-pro-sluzby',
    title: 'Tvorba webu pro služby',
    excerpt: 'U služeb lidé nekupují jen výsledek, ale důvěru v člověka nebo firmu. Web proto musí vysvětlit přístup, postup a důvody ke kontaktu.',
    date: '9. 2. 2026',
    datePublished: '2026-02-09',
    category: 'Služby',
    readingTime: '6 min',
    seoDescription: 'Jak má fungovat web pro firmy a odborníky, kteří prodávají služby: jasná nabídka, důvěra, postup spolupráce a cesta k poptávce.',
    sections: [
      {
        heading: 'Služby se prodávají jinak než produkt',
        paragraphs: ['Zákazník často neví, podle čeho vybrat dodavatele. Potřebuje pochopit, v čem jste silní, jak pracujete, co od spolupráce čekat a proč vám má věřit.'],
      },
      {
        heading: 'Web musí odpovědět na nejistotu',
        paragraphs: ['Dobrá stránka pro služby nemá být jen seznamem výkonů. Má ukázat situace klienta, typické problémy, postup řešení a konkrétní důvody, proč se ozvat.'],
        bullets: ['pro koho služba je', 'jaký problém řeší', 'jak probíhá spolupráce', 'co klient získá', 'jaký je další krok'],
      },
      {
        heading: 'Důvěra vzniká z konkrétnosti',
        paragraphs: ['Obecné fráze typu individuální přístup nestačí. Lepší je popsat, co přesně děláte jinak, jak klienta provedete rozhodnutím a jak pozná, že je pro vás vhodný.'],
      },
    ],
  },
  {
    slug: 'seo-zaklad-firemniho-webu',
    title: 'SEO základ firemního webu',
    excerpt: 'SEO není jen seznam klíčových slov. Firemní web musí mít jasnou strukturu, indexovatelné stránky, dobré titulky, technický základ a obsah, který odpovídá na reálné otázky.',
    date: '16. 2. 2026',
    datePublished: '2026-02-16',
    category: 'SEO',
    readingTime: '7 min',
    seoDescription: 'Co má obsahovat SEO základ firemního webu: struktura stránek, titulky, metadata, interní odkazy, rychlost, sitemap, schema.org a měření výsledků.',
    sections: [
      {
        heading: 'Klíčová slova nestačí',
        paragraphs: ['Vyhledávače potřebují pochopit, co nabízíte, komu pomáháte a jaké otázky návštěvník řeší. Samotné opakování fráze tvorba webu nestačí, pokud stránka neodpovídá na konkrétní záměr hledání.'],
      },
      {
        heading: 'Technický základ musí být čistý',
        paragraphs: ['Každá důležitá stránka by měla mít unikátní titulek, popis, canonical URL, přístupnou strukturu nadpisů, rychlé načítání, sitemapu a správně nastavené robots.txt.'],
        bullets: ['indexovatelné URL', 'srozumitelné titulky', 'interní odkazy', 'strukturovaná data', 'rychlost', 'měření konverzí'],
      },
      {
        heading: 'Obsah musí pokrýt rozhodování klienta',
        paragraphs: ['Firemní web má odpovídat na otázky před poptávkou: kolik to stojí, jak dlouho to trvá, jak probíhá spolupráce, pro koho služba je a kdy redesign dává smysl.'],
      },
    ],
  },
  {
    slug: 'web-pro-lokalni-podnikani',
    title: 'Web pro lokální podnikání',
    excerpt: 'Lokální web má rychle ukázat, kde působíte, co nabízíte, proč vám věřit a jak se s vámi člověk spojí.',
    date: '23. 2. 2026',
    datePublished: '2026-02-23',
    category: 'Lokální web',
    readingTime: '5 min',
    seoDescription: 'Jak postavit web pro lokální podnikání: důvěryhodnost, lokální dohledatelnost, jasné služby, kontaktní cesta a obsah pro zákazníky z okolí.',
    sections: [
      {
        heading: 'Lokální návštěvník hledá rychlou jistotu',
        paragraphs: ['U lokální služby člověk často porovnává několik možností. Web musí rychle ukázat, že jste aktivní, dostupní, důvěryhodní a že rozumíte jeho situaci.'],
      },
      {
        heading: 'Důležité jsou konkrétní informace',
        paragraphs: ['Na webu by neměly chybět oblasti působení, jasně popsané služby, kontaktní údaje, odpovědi na časté otázky a obsah, který odpovídá lokálnímu hledání.'],
        bullets: ['město nebo region', 'typy zákazníků', 'služby a ceny od', 'postup spolupráce', 'kontakt bez hledání'],
      },
      {
        heading: 'Web má vést ke kontaktu',
        paragraphs: ['Cílem není jen být dohledatelný. Cílem je snížit nejistotu a zkrátit cestu k poptávce, telefonátu nebo domluvě schůzky.'],
      },
    ],
  },
  {
    slug: 'jak-vybrat-tvurce-webu',
    title: 'Jak vybrat tvůrce webu',
    excerpt: 'Při výběru tvůrce webu nejde jen o vzhled portfolia. Důležité je, jestli umí pochopit byznys, strukturovat nabídku, psát srozumitelně a měřit výsledek.',
    date: '2. 3. 2026',
    datePublished: '2026-03-02',
    category: 'Výběr dodavatele',
    readingTime: '6 min',
    seoDescription: 'Podle čeho vybrat tvůrce webu pro firemní web: strategie, texty, technické SEO, měření, komunikace a schopnost řešit obchodní problém.',
    sections: [
      {
        heading: 'Hezký web není celá práce',
        paragraphs: ['Design je důležitý, ale sám o sobě nezaručí výsledek. Tvůrce webu by se měl ptát na nabídku, zákazníky, námitky, obchodní cíle a současné problémy webu.'],
      },
      {
        heading: 'Ptejte se na postup',
        paragraphs: ['Dobrý postup začíná pochopením problému. Až potom dává smysl řešit strukturu, texty, vizuál, vývoj, spuštění a měření.'],
        bullets: ['jak vznikne struktura', 'kdo řeší texty', 'jak se ověří rychlost', 'jak se nastaví SEO základ', 'jak se bude měřit poptávka'],
      },
      {
        heading: 'Důležitá je i spolupráce po spuštění',
        paragraphs: ['Web se po spuštění může zlepšovat podle dat a poptávek. Proto je dobré vědět, jak budou probíhat úpravy, nové sekce, články a technická péče.'],
      },
    ],
  },
];

export const getBlogPost = (slug?: string) => blogPosts.find((post) => post.slug === slug);
