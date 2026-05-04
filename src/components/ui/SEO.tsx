import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export function SEO({ title, description, path, image = '/og-image.svg', type = 'website', structuredData }: SEOProps) {
  const siteUrl = import.meta.env.APP_URL || 'https://www.petrslavikweb.cz';
  const url = `${siteUrl}${path}`;
  const imageUrl = `${siteUrl}${image}`;
  const jsonLd = Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content="Petr Slavík" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {jsonLd.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
