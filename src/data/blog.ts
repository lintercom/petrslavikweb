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
  category: string;
  readingTime: string;
  seoDescription: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'kolik-stoji-web-na-miru-v-roce-2026',
    title: 'Kolik stojí web na míru v roce 2026',
    excerpt: 'Cena webu závisí hlavně na rozsahu, obsahu, administraci a napojeních. Tady je realistický rámec, podle kterého se dá plánovat rozpočet.',
    date: '12. 1. 2026',
    category: 'Ceník',
    readingTime: '6 min',
    seoDescription: 'Kolik stojí tvorba webu na míru v roce 2026, co cenu ovlivňuje a kdy dává smysl vlastní CMS, měření nebo integrace.',
    sections: [
      {
        heading: 'Co cenu nejvíc ovlivňuje',
        paragraphs: ['Největší rozdíl nedělá počet podstránek, ale rozsah přípravy, míra návrhu na míru a funkce pod povrchem webu. Jinou cenu má jednoduchý prezentační web a jinou web s administrací, databází nebo napojením na firemní systém.'],
        bullets: ['rozsah obsahu a struktury', 'náročnost designu', 'vlastní CMS nebo databáze', 'formuláře, měření a konverze', 'napojení na platby, rezervace nebo ERP'],
      },
      {
        heading: 'Orientační cenové hladiny',
        paragraphs: ['Jednodušší web na míru může začínat kolem 35 000 Kč. Web s vlastní administrací se obvykle pohybuje od 60 000 Kč. Pokud se přidává e-shop, rezervace nebo integrace, rozpočet roste podle konkrétního rozsahu.'],
      },
      {
        heading: 'Jak začít bez přeplácení',
        paragraphs: ['Nejlepší je nejdřív určit, co má web opravdu řešit. Část funkcí lze připravit do první verze a zbytek doplnit po spuštění podle reálného používání.'],
      },
    ],
  },
  {
    slug: 'web-na-miru-vs-hotove-reseni',
    title: 'Web na míru vs. hotové řešení',
    excerpt: 'Kdy stačí jednoduchý hotový základ a kdy už se vyplatí vlastní návrh, administrace a technické řešení podle firmy.',
    date: '19. 1. 2026',
    category: 'Strategie',
    readingTime: '5 min',
    seoDescription: 'Srovnání webu na míru a hotového řešení: kdy dává smysl vlastní struktura, design, CMS, SEO základ a měření konverzí.',
    sections: [
      {
        heading: 'Kdy stačí jednodušší řešení',
        paragraphs: ['Pokud potřebujete rychle ověřit nápad nebo jednoduchou vizitku, může dávat smysl začít menším rozsahem. Důležité je vědět, kde jsou limity a co budete potřebovat za rok.'],
      },
      {
        heading: 'Kdy se vyplatí web na míru',
        paragraphs: ['Web na míru dává smysl ve chvíli, kdy potřebujete jasně vysvětlit nabídku, odlišit se, měřit poptávky nebo web napojit na další části firmy.'],
        bullets: ['specifická struktura nabídky', 'vlastní administrace', 'více formulářů nebo typů poptávek', 'databáze a interní evidence', 'plánovaný dlouhodobý rozvoj'],
      },
      {
        heading: 'Nejde jen o vzhled',
        paragraphs: ['Dobře navržený web řeší cestu návštěvníka, správu obsahu, rychlost, měření a další provoz. To jsou věci, které nejsou na první pohled vidět, ale rozhodují o výsledku.'],
      },
    ],
  },
  {
    slug: 'vlastni-cms-pro-web',
    title: 'Vlastní CMS: kdy dává smysl',
    excerpt: 'Vlastní administrace se vyplatí, když běžná správa obsahu nestačí a web má pracovat s konkrétními daty, rolemi nebo procesy.',
    date: '26. 1. 2026',
    category: 'CMS',
    readingTime: '6 min',
    seoDescription: 'Kdy dává smysl vlastní CMS, databáze, přihlášení, role, správa obsahu a administrace webu na míru.',
    sections: [
      {
        heading: 'Co vlastní CMS řeší',
        paragraphs: ['CMS není jen editor textů. Může spravovat reference, články, produkty, rezervace, klienty, dokumenty nebo interní evidenci přesně podle toho, jak firma pracuje.'],
      },
      {
        heading: 'Výhody pro provoz',
        paragraphs: ['Hlavní výhodou je jednoduchost pro konkrétní tým. Administrace obsahuje jen to, co lidé skutečně potřebují, a nezahlcuje je zbytečnými funkcemi.'],
        bullets: ['správa obsahu bez programování', 'vlastní databázová struktura', 'přihlášení a role', 'nižší chybovost při správě dat', 'možnost napojení na další systémy'],
      },
      {
        heading: 'Kdy CMS navrhovat hned',
        paragraphs: ['Pokud už při zadání víte, že se bude obsah často měnit, bude ho spravovat více lidí nebo má být napojený na obchodní proces, je lepší s CMS počítat od začátku.'],
      },
    ],
  },
  {
    slug: 'eshop-na-miru',
    title: 'E-shop na míru: co obnáší a kolik může stát',
    excerpt: 'E-shop na míru není jen katalog produktů. Řeší objednávky, platby, dopravu, administraci, měření a budoucí integrace.',
    date: '2. 2. 2026',
    category: 'E-commerce',
    readingTime: '7 min',
    seoDescription: 'Co obnáší tvorba e-shopu na míru, kolik může stát a jak řešit produkty, objednávky, platební bránu, dopravu a ERP integrace.',
    sections: [
      {
        heading: 'Co musí umět základní e-shop',
        paragraphs: ['Základ tvoří produktový katalog, košík, objednávkový proces, administrace objednávek a e-mailová komunikace. Už tady se vyplatí přemýšlet nad tím, kdo bude e-shop spravovat a jak budou objednávky odbavované.'],
      },
      {
        heading: 'Kdy cena roste',
        paragraphs: ['Rozpočet zvyšují hlavně individuální způsoby prodeje, více typů dopravy, speciální objednávkové scénáře, platby, skladová logika nebo napojení na účetnictví a ERP.'],
        bullets: ['platební brána', 'doprava a výdejní místa', 'správa skladů', 'faktury a účetnictví', 'e-commerce měření', 'automatizace objednávek'],
      },
      {
        heading: 'Proč řešit integrace včas',
        paragraphs: ['Pokud má e-shop růst, je dobré už při návrhu myslet na datovou strukturu. Pozdější napojení na účetnictví nebo ERP je pak jednodušší a levnější.'],
      },
    ],
  },
  {
    slug: 'platebni-brana-na-web',
    title: 'Platební brána na webu nebo e-shopu',
    excerpt: 'Platební brána zkracuje cestu k zaplacení. Hodí se pro e-shopy, rezervace, poukazy, kurzy nebo opakované služby.',
    date: '9. 2. 2026',
    category: 'Platby',
    readingTime: '5 min',
    seoDescription: 'Jak funguje platební brána na webu nebo e-shopu, kdy ji použít a co připravit pro bezpečné napojení.',
    sections: [
      {
        heading: 'Kdy platební bránu použít',
        paragraphs: ['Platby dávají smysl všude tam, kde zákazník může objednávku dokončit online: produkty, služby, rezervace, termíny, poukazy nebo digitální obsah.'],
      },
      {
        heading: 'Co je potřeba připravit',
        paragraphs: ['Kromě samotné brány je potřeba navrhnout stavy objednávky, potvrzovací e-maily, administraci plateb a řešení neúspěšných nebo vrácených plateb.'],
        bullets: ['objednávkový proces', 'bezpečné předání dat', 'stav zaplaceno / nezaplaceno', 'e-mailové notifikace', 'evidence v administraci'],
      },
      {
        heading: 'Napojení na další systémy',
        paragraphs: ['Platba často není poslední krok. Po úhradě může systém vystavit potvrzení, poslat podklady, vytvořit rezervaci nebo předat data do účetnictví.'],
      },
    ],
  },
  {
    slug: 'rezervacni-system-na-miru',
    title: 'Rezervační systém na míru',
    excerpt: 'Rezervace nemusí být složitý kalendář. Často stačí jednoduchý systém pro termíny, kapacity, přihlášky a přehlednou administraci.',
    date: '16. 2. 2026',
    category: 'Rezervace',
    readingTime: '5 min',
    seoDescription: 'Rezervační systém na míru pro termíny, kapacity, služby, konzultace nebo akce s administrací a možností online platby.',
    sections: [
      {
        heading: 'Co může rezervační systém řešit',
        paragraphs: ['Rezervace se hodí pro konzultace, služby, kurzy, tábory, kapacity nebo konkrétní termíny. Důležité je navrhnout jednoduchou cestu pro zákazníka i správce.'],
      },
      {
        heading: 'Typické funkce',
        paragraphs: ['Systém může obsahovat kapacity, potvrzení e-mailem, přehled přihlášek, exporty, platby nebo interní poznámky pro tým.'],
        bullets: ['termíny a kapacity', 'přihlašovací formuláře', 'správa rezervací', 'notifikace', 'online platby', 'export dat'],
      },
      {
        heading: 'Proč na míru',
        paragraphs: ['Každý provoz má trochu jiná pravidla. Vlastní řešení umožní nastavit jen ty kroky, které opravdu potřebujete, a nezatěžovat zákazníka složitým procesem.'],
      },
    ],
  },
  {
    slug: 'napojeni-webu-na-erp',
    title: 'Napojení webu nebo e-shopu na ERP',
    excerpt: 'Napojení na účetnictví nebo ERP šetří ruční práci, snižuje chybovost a dává firmě lepší kontrolu nad daty.',
    date: '23. 2. 2026',
    category: 'Integrace',
    readingTime: '6 min',
    seoDescription: 'Napojení webu nebo e-shopu na ERP a účetnictví: objednávky, faktury, sklady, ceníky, zákazníci a automatizace dat.',
    sections: [
      {
        heading: 'Co se dá synchronizovat',
        paragraphs: ['Typicky se přenáší objednávky, faktury, skladové položky, ceníky, zákaznická data nebo stav objednávky. Rozsah závisí na procesu firmy a možnostech cílového systému.'],
        bullets: ['objednávky', 'faktury', 'sklady', 'ceníky', 'zákazníci', 'stavy objednávek'],
      },
      {
        heading: 'Proč nezačínat od technologie',
        paragraphs: ['Nejdřív je potřeba pochopit proces: kdo data zadává, kdo je schvaluje, kdy se mají přenášet a co se stane při chybě. Teprve potom dává smysl řešit API nebo datové formáty.'],
      },
      {
        heading: 'Jak probíhá návrh integrace',
        paragraphs: ['Začínám mapou dat a scénářů. Díky tomu je jasné, co bude automatické, co zůstane ruční a jak se bude kontrolovat správnost přenosu.'],
      },
    ],
  },
  {
    slug: 'jak-pripravit-podklady-pro-web',
    title: 'Jak připravit podklady pro nový web',
    excerpt: 'Dobré podklady zrychlí návrh i vývoj. Stačí připravit cíle, nabídku, typy zákazníků, obsah a příklady toho, co se vám líbí.',
    date: '2. 3. 2026',
    category: 'Proces',
    readingTime: '4 min',
    seoDescription: 'Jak připravit podklady pro nový web na míru: cíle, obsah, struktura, reference, fotky, texty a technické požadavky.',
    sections: [
      {
        heading: 'Začněte cílem',
        paragraphs: ['Nejdůležitější otázka není, jak má web vypadat, ale co má přinášet. Poptávky, objednávky, rezervace, důvěru, nebo jednodušší správu obsahu?'],
      },
      {
        heading: 'Co se hodí připravit',
        paragraphs: ['Nemusíte mít hotové perfektní texty. Stačí posbírat základní informace, které pomůžou navrhnout strukturu a priority.'],
        bullets: ['popis služeb nebo produktů', 'typy zákazníků', 'nejčastější otázky', 'fotky a vizuální materiály', 'příklady webů, které vám dávají smysl', 'technické požadavky a napojení'],
      },
      {
        heading: 'Co když podklady nemáte',
        paragraphs: ['V tom případě začneme strukturou. Společně určíme hlavní sdělení a až potom se doplní texty, fotky a detaily jednotlivých stránek.'],
      },
    ],
  },
];

export const getBlogPost = (slug?: string) => blogPosts.find((post) => post.slug === slug);
