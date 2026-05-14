export const SITE_URL = 'https://www.petrslavikweb.cz';
export const PERSON_NAME = 'Petr Slavík';
export const SITE_EMAIL = 'petrslavikweb@gmail.com';

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    jobTitle: 'Tvůrce firemních webů',
    knowsAbout: [
      'tvorba webových stránek',
      'firemní weby',
      'redesign webu',
      'SEO základ',
      'konverzní texty',
      'měření poptávek',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Petr Slavík - tvorba webů',
    url: SITE_URL,
    inLanguage: 'cs-CZ',
    publisher: {
      '@id': `${SITE_URL}/#person`,
    },
  };
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: 'Petr Slavík - tvorba firemních webů',
    url: SITE_URL,
    email: SITE_EMAIL,
    taxID: '05695961',
    priceRange: 'od 35 000 Kč',
    image: absoluteUrl('/og-image.svg'),
    areaServed: [
      {
        '@type': 'Country',
        name: 'Česko',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Zlínský kraj',
      },
    ],
    serviceType: [
      'tvorba webových stránek',
      'firemní weby',
      'redesign webu',
      'SEO základ',
      'měření poptávek',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Webové služby',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Tvorba webu',
          url: absoluteUrl('/sluzby/tvorba-webu'),
        },
        {
          '@type': 'Offer',
          name: 'Redesign webu',
          url: absoluteUrl('/sluzby/redesign-webu'),
        },
        {
          '@type': 'Offer',
          name: 'Rozšíření a úpravy webu',
          url: absoluteUrl('/sluzby/rozsireni-upravy-webu'),
        },
        {
          '@type': 'Offer',
          name: 'Měsíční správa webu',
          url: absoluteUrl('/sluzby/mesicni-sprava'),
        },
      ],
    },
    founder: {
      '@id': `${SITE_URL}/#person`,
    },
  };
}

export function serviceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      '@id': `${SITE_URL}/#service`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Česko',
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified = datePublished,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl('/og-image.svg'),
    inLanguage: 'cs-CZ',
    datePublished,
    dateModified,
    author: {
      '@id': `${SITE_URL}/#person`,
    },
    publisher: {
      '@id': `${SITE_URL}/#person`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(path),
    },
  };
}
