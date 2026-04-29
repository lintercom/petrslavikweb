export interface ProjectType {
  slug: string;
  title: string;
  category: string;
  desc: string;
  sections: {
    situation: string;
    goal: string;
    solution: string;
    capabilities: string[];
    extensions: string[];
    technologies: string[];
  };
}

export const projectTypes: ProjectType[] = [
  {
    slug: 'firemni-web-s-vlastni-spravou-obsahu',
    title: 'Firemní web s vlastní správou obsahu',
    category: 'Web na míru',
    desc: 'Prezentační web pro službu nebo firmu s důrazem na důvěru, poptávky a jednoduchou správu obsahu.',
    sections: {
      situation: 'Firma potřebuje web, který jasně vysvětlí nabídku, podpoří důvěru a nebude závislý na zásahu vývojáře při každé změně obsahu.',
      goal: 'Vytvořit přehledný web s jasnou strukturou, kontaktními body a administrací pro správu vybraných částí.',
      solution: 'Web je navržený kolem hlavních služeb, častých dotazů a poptávkových formulářů. V administraci lze spravovat texty, reference, články nebo tým.',
      capabilities: ['správa obsahu', 'kontaktní formuláře', 'měření poptávek', 'SEO základ', 'rychlé responzivní zobrazení'],
      extensions: ['blog', 'reference', 'vícejazyčnost', 'klientská sekce', 'napojení na CRM'],
      technologies: ['frontend aplikace', 'vlastní CMS', 'databáze', 'analytika'],
    },
  },
  {
    slug: 'eshop-objednavkovy-system-na-miru',
    title: 'E-shop / objednávkový systém na míru',
    category: 'E-shop na míru',
    desc: 'Řešení pro prodej produktů, poukazů nebo služeb s objednávkami, platbami a možností budoucích integrací.',
    sections: {
      situation: 'Prodej nejde dobře vměstnat do univerzálního procesu a je potřeba pracovat s produkty, službami, termíny nebo individuálními typy objednávek.',
      goal: 'Navrhnout objednávkový proces, který je srozumitelný pro zákazníka a zároveň dobře spravovatelný v administraci.',
      solution: 'E-shop obsahuje katalog, košík, objednávky, platební bránu, dopravu nebo vlastní způsob odbavení podle charakteru prodeje.',
      capabilities: ['správa produktů', 'košík a objednávky', 'platební brána', 'doprava', 'administrace objednávek', 'e-commerce měření'],
      extensions: ['skladová evidence', 'fakturace', 'věrnostní systém', 'automatizace e-mailů', 'ERP integrace'],
      technologies: ['webová aplikace', 'databáze', 'platební API', 'objednávková administrace'],
    },
  },
  {
    slug: 'rezervacni-system',
    title: 'Rezervační systém',
    category: 'Rezervace',
    desc: 'Systém pro prodej termínů, kapacit, táborů, služeb nebo konzultací bez zbytečně složitého kalendáře.',
    sections: {
      situation: 'Firma potřebuje sbírat rezervace nebo přihlášky, ale běžný kalendář neumí dobře řešit kapacity, platby nebo interní pravidla.',
      goal: 'Zjednodušit rezervaci pro zákazníka a dát provozovateli jasnou administraci termínů, kapacit a účastníků.',
      solution: 'Systém vede návštěvníka přes výběr termínu, vyplnění údajů a potvrzení. Administrace umožní spravovat kapacity, stavy a komunikaci.',
      capabilities: ['termíny a kapacity', 'přihlášky', 'notifikace', 'správa účastníků', 'volitelné online platby'],
      extensions: ['čekací listina', 'slevové kódy', 'exporty', 'opakované termíny', 'napojení na účetnictví'],
      technologies: ['rezervační logika', 'databáze', 'e-mailové notifikace', 'platební napojení'],
    },
  },
  {
    slug: 'vlastni-cms-a-databazova-administrace',
    title: 'Vlastní CMS a databázová administrace',
    category: 'Vlastní CMS',
    desc: 'Administrace vytvořená přesně pro konkrétní web, obsah, produkty, reference, články nebo interní evidenci.',
    sections: {
      situation: 'Správa dat je roztříštěná v tabulkách, e-mailech nebo externích nástrojích a tým potřebuje jeden přehledný systém.',
      goal: 'Vytvořit administraci, která odpovídá konkrétnímu obsahu, rolím a internímu postupu firmy.',
      solution: 'CMS pracuje s vlastní databází, přihlášením, rolemi a formuláři. Obsah je strukturovaný tak, aby se dal bezpečně spravovat a rozšiřovat.',
      capabilities: ['vlastní databáze', 'správa obsahu', 'přihlášení a role', 'interní evidence', 'exporty dat'],
      extensions: ['klientská sekce', 'schvalování obsahu', 'API', 'automatické notifikace', 'napojení na další systémy'],
      technologies: ['backend aplikace', 'databáze', 'autorizace', 'admin rozhraní'],
    },
  },
  {
    slug: 'integrace-na-ucetnictvi-erp',
    title: 'Integrace na účetnictví / ERP',
    category: 'Integrace',
    desc: 'Propojení objednávek, faktur, skladů, ceníků nebo zákaznických dat mezi webem a firemním systémem.',
    sections: {
      situation: 'Data se přepisují ručně mezi webem, e-shopem, účetnictvím a interními nástroji. To zpomaluje práci a zvyšuje riziko chyb.',
      goal: 'Navrhnout bezpečný a kontrolovatelný tok dat mezi systémy podle skutečného procesu firmy.',
      solution: 'Integrace definuje, kdy se data přenášejí, jak se validují a co se stane při chybě. Administrace dává přehled o stavu přenosů.',
      capabilities: ['objednávky', 'faktury', 'sklady', 'ceníky', 'zákaznická data', 'automatizace objednávek'],
      extensions: ['monitoring přenosů', 'fronta úloh', 'ruční opakování chyb', 'reporting', 'další API integrace'],
      technologies: ['API integrace', 'datové transformace', 'fronta úloh', 'monitoring'],
    },
  },
];

export const getProjectType = (slug?: string) => projectTypes.find((project) => project.slug === slug);
