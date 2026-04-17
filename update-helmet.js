import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src/pages');
const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const paths = {
  'Home.tsx': '/',
  'Services.tsx': '/sluzby',
  'ServiceWeb.tsx': '/sluzby/webove-stranky',
  'ServiceEshop.tsx': '/sluzby/e-shop',
  'ServiceApp.tsx': '/sluzby/webove-aplikace',
  'Pricing.tsx': '/cenik',
  'References.tsx': '/reference',
  'Process.tsx': '/proces',
  'Blog.tsx': '/blog',
  'IntegrationPohoda.tsx': '/integrace/pohoda',
  'PlatformShoptet.tsx': '/platformy/shoptet',
  'PlatformUpgates.tsx': '/platformy/upgates',
  'PlatformWooCommerce.tsx': '/platformy/woocommerce',
  'Contact.tsx': '/kontakt',
  'About.tsx': '/o-mne',
  'Privacy.tsx': '/ochrana-osobnich-udaju',
  'Cookies.tsx': '/cookies'
};

pages.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip files without Helmet
  const helmetRegex = /<Helmet>([\s\S]*?)<\/Helmet>/;
  const helmetMatch = content.match(helmetRegex);
  if (!helmetMatch) return;

  const innerHelmet = helmetMatch[1];
  
  // Extract title
  const titleMatch = innerHelmet.match(/<title>([\s\S]*?)<\/title>/);
  const rawTitle = titleMatch ? titleMatch[1].trim() : '';

  // Extract description
  const descMatch = innerHelmet.match(/<meta\s+name="description"\s+content=({[\s\S]*?}|"[^"]*")\s*\/>/);
  const rawDesc = descMatch ? descMatch[1] : '""';

  // Determine what to put in the `content={...}` or `content="..."` block
  // If rawTitle is inside braces { ... } we extract the inner expression. Otherwise we output "Raw Title"
  let titleExprForContent = '';
  if (rawTitle.startsWith('{') && rawTitle.endsWith('}')) {
    titleExprForContent = `{${rawTitle.substring(1, rawTitle.length - 1)}}`;
  } else {
    titleExprForContent = `"${rawTitle}"`;
  }

  let newHelmetInner = '';

  if (file === 'ReferenceDetail.tsx' || file === 'BlogDetail.tsx') {
    const slugBase = file === 'ReferenceDetail.tsx' ? 'reference' : 'blog';
    newHelmetInner = `
        <title>${rawTitle}</title>
        <meta name="description" content=${rawDesc} />
        <link rel="canonical" href={\`https://petrslavik.cz/${slugBase}/\${slug}\`} />
        <meta property="og:title" content=${titleExprForContent} />
        <meta property="og:description" content=${rawDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={\`https://petrslavik.cz/${slugBase}/\${slug}\`} />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:site_name" content="Petr Slavík" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=${titleExprForContent} />
        <meta name="twitter:description" content=${rawDesc} />
`;
  } else {
    const relPath = paths[file] || '';
    const fullUrl = `https://petrslavik.cz${relPath}`;
    
    newHelmetInner = `
        <title>${rawTitle}</title>
        <meta name="description" content=${rawDesc} />
        <link rel="canonical" href="${fullUrl}" />
        <meta property="og:title" content=${titleExprForContent} />
        <meta property="og:description" content=${rawDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="${fullUrl}" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:site_name" content="Petr Slavík" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=${titleExprForContent} />
        <meta name="twitter:description" content=${rawDesc} />
`;
  }

  const newContent = content.replace(helmetRegex, `<Helmet>${newHelmetInner}      </Helmet>`);
  fs.writeFileSync(filePath, newContent, 'utf8');
});
