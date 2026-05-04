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
    slug: 'web-ktery-nevysvetluje-nabidku',
    title: 'Web, který nevysvětluje nabídku',
    category: 'Jasnější sdělení',
    desc: 'Typický scénář firmy, která má dobrou službu, ale web ji popisuje obecně a návštěvník rychle nepochopí, proč se ozvat.',
    sections: {
      situation: 'Firma má několik služeb, zkušenosti a dobré výsledky, ale web používá obecné fráze. Návštěvník nevidí rozdíl oproti konkurenci a odchází bez kontaktu.',
      goal: 'Přepsat web kolem skutečných otázek zákazníka: co firma řeší, pro koho je vhodná, jak probíhá spolupráce a proč jí věřit.',
      solution: 'Web dostane novou strukturu nabídky, jasné vstupní sdělení, přehled služeb, důvěryhodnostní prvky a kontaktní body na správných místech.',
      capabilities: ['jasná nabídka', 'lepší texty', 'struktura služeb', 'důvěryhodnost', 'kontaktní cesta'],
      extensions: ['reference', 'FAQ', 'články', 'měření poptávek', 'správa obsahu'],
      technologies: ['responzivní frontend', 'SEO základ', 'analytika', 'formulář'],
    },
  },
  {
    slug: 'web-ktery-neprivadi-poptavky',
    title: 'Web, který nepřivádí poptávky',
    category: 'Více kontaktů',
    desc: 'Modelový scénář webu, který má návštěvnost, ale návštěvníci neudělají další krok a neposílají poptávky.',
    sections: {
      situation: 'Lidé na web přicházejí, ale chybí jim jasná cesta. Kontaktní tlačítka jsou slabá, důležité informace zapadnou a web nepracuje s námitkami.',
      goal: 'Zjednodušit cestu od první návštěvy ke kontaktu a posílit důvody, proč má zákazník odeslat poptávku.',
      solution: 'Upraví se struktura stránek, výzvy k akci, kontaktní bloky, důvěryhodnostní prvky a měření hlavních konverzí.',
      capabilities: ['konverzní struktura', 'CTA', 'měření formulářů', 'mobilní použitelnost', 'důvěra'],
      extensions: ['landing page', 'A/B textů', 'rozšíření FAQ', 'nové sekce služeb', 'obsahový plán'],
      technologies: ['frontend', 'analytika', 'rychlost webu', 'SEO základ'],
    },
  },
  {
    slug: 'zastaraly-web',
    title: 'Zastaralý firemní web',
    category: 'Redesign',
    desc: 'Scénář firmy, jejíž současný web už neodpovídá kvalitě práce, nabídce ani očekávání zákazníků na mobilu.',
    sections: {
      situation: 'Web vznikl před lety, špatně se čte na telefonu, graficky působí zastarale a texty neodpovídají tomu, co firma dnes opravdu nabízí.',
      goal: 'Postavit nový web bez zbytečného zahazování všeho, co funguje: zachovat dobrý obsah, opravit slabá místa a připravit jasnější prezentaci.',
      solution: 'Nejdřív proběhne audit současného webu. Potom vznikne nová struktura, upravené texty, modernější vizuální vrstva a technicky čisté spuštění.',
      capabilities: ['audit webu', 'redesign', 'přesměrování URL', 'mobilní verze', 'rychlost'],
      extensions: ['nové reference', 'blog', 'správa obsahu', 'měření poptávek', 'SEO rozšíření'],
      technologies: ['React frontend', 'responzivní CSS', 'SEO metadata', 'analytika'],
    },
  },
  {
    slug: 'web-se-snadnou-spravou',
    title: 'Web se snadnou správou obsahu',
    category: 'Správa obsahu',
    desc: 'Scénář webu, kde firma potřebuje pravidelně upravovat texty, reference, články nebo FAQ bez každého drobného zásahu vývojáře.',
    sections: {
      situation: 'Obsah webu se mění, ale každá úprava jde přes vývojáře. Firma proto aktualizace odkládá a web postupně přestává odpovídat realitě.',
    goal: 'Umožnit jednoduchou správu vybraných částí webu bez zbytečně složitého rozhraní.',
      solution: 'Navrhne se, které části má smysl spravovat. Administrace zůstane úzká a praktická: texty, reference, články, FAQ nebo vybrané bloky.',
      capabilities: ['správa textů', 'reference', 'články', 'FAQ', 'jednoduché workflow'],
      extensions: ['role uživatelů', 'náhled změn', 'publikační plán', 'SEO pole', 'technická péče'],
      technologies: ['frontend', 'správa obsahu', 'strukturovaný obsah', 'zabezpečení'],
    },
  },
];

export const getProjectType = (slug?: string) => projectTypes.find((project) => project.slug === slug);
