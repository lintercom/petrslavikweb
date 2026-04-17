import fs from 'fs';
import path from 'path';

const replaceInFile = (filePath: string, searchValue: string | RegExp, replaceValue: string) => {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(searchValue, replaceValue);
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
    }
  }
};

// 1 & 2 App.tsx code splitting & indentation
let appTsx = fs.readFileSync('src/App.tsx', 'utf8');
appTsx = appTsx.replace(/import \{ ([a-zA-Z]+) \} from '\.\/pages\/\1';/g, "const $1 = lazy(() => import('./pages/$1').then(m => ({ default: m.$1 })));");
if (!appTsx.includes('import React, { Suspense, lazy }')) {
  appTsx = `import React, { Suspense, lazy } from 'react';\nimport { ErrorBoundary } from './components/ui/ErrorBoundary';\n` + appTsx;
}
appTsx = appTsx.replace(/<SpotlightProvider>\s*<BrowserRouter>\s*<ScrollToTop \/>\s*<Routes>/, `<SpotlightProvider>\n      <BrowserRouter>\n        <ScrollToTop />\n        <ErrorBoundary>\n          <Suspense fallback={null}>\n            <Routes>`);
appTsx = appTsx.replace(/<\/Routes>\s*<\/BrowserRouter>\s*<\/SpotlightProvider>/, `            </Routes>\n          </Suspense>\n        </ErrorBoundary>\n      </BrowserRouter>\n    </SpotlightProvider>`);
// Clean up indentation for routes
appTsx = appTsx.replace(/<Route path="\/" element=\{<Layout \/>\}>\n.*<Route index/g, `<Route path="/" element={<Layout />}>\n              <Route index`);
for (let i = 0; i < 20; i++) {
  appTsx = appTsx.replace(/\n\s*<Route /g, '\n              <Route ');
}
appTsx = appTsx.replace(/<Route path="\/" element=\{<Layout \/>\}>/g, `            <Route path="/" element={<Layout />}>`);
fs.writeFileSync('src/App.tsx', appTsx);

// 3 package.json
const pkgPath = 'package.json';
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
if (pkg.dependencies && pkg.dependencies['vite']) delete pkg.dependencies['vite'];
if (pkg.dependencies && pkg.dependencies['@vitejs/plugin-react']) {
  pkg.devDependencies['@vitejs/plugin-react'] = pkg.dependencies['@vitejs/plugin-react'];
  delete pkg.dependencies['@vitejs/plugin-react'];
}
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

// 4 BigFooterCTA
let footerJsx = fs.readFileSync('src/components/blocks/BigFooterCTA.tsx', 'utf8');
footerJsx = footerJsx.replace("import { SectionSpotlight } from '../ui/SectionSpotlight';", "import { SectionSpotlight } from '../ui/SectionSpotlight';\nimport { Link } from 'react-router-dom';");
footerJsx = footerJsx.replace(/<footer([^>]*)onClick=\{[^{}]+\}([^>]*)>/, '<footer$1$2 style={{ isolation: \'isolate\' }}>\n      <Link to="/kontakt" className="absolute inset-0 z-20" aria-label="Přejít na kontakt"></Link>');
fs.writeFileSync('src/components/blocks/BigFooterCTA.tsx', footerJsx);

// 5 & 6 MarqueeServices
let marquee = fs.readFileSync('src/components/blocks/MarqueeServices.tsx', 'utf8');
marquee = marquee.replace(/import \{ motion \} from 'motion\/react';\n/, '');
marquee = marquee.replace(/<motion\.div\s+animate=\{\{ x: \[0, -2000\] \}\}\s+transition=\{[^\}]+\}\s+className="flex flex-nowrap"\s*>/, '<div className="flex flex-nowrap animate-marquee">');
marquee = marquee.replace(/<\/motion\.div>/g, '</div>');
marquee = marquee.replace(/\{\[\.\.\.items, \.\.\.items, \.\.\.items\]\.map/g, '{[...items, ...items].map');
marquee = marquee.replace(/<img src=\{item\.img\}/g, '<img src={item.img} loading="lazy" decoding="async" width={96} height={48}');
fs.writeFileSync('src/components/blocks/MarqueeServices.tsx', marquee);

// 5 LogoGrid
let logoGrid = fs.readFileSync('src/components/blocks/LogoGrid.tsx', 'utf8');
logoGrid = logoGrid.replace(/<img src=\{logo\.url\}/g, '<img src={logo.url} loading="lazy" decoding="async" width={128} height={64}');
fs.writeFileSync('src/components/blocks/LogoGrid.tsx', logoGrid);

// 7 Header
let header = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');
header = header.replace(/window\.addEventListener\('scroll', handleScroll\);/, "window.addEventListener('scroll', handleScroll, { passive: true });");
fs.writeFileSync('src/components/layout/Header.tsx', header);

// 8 index.html
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<title>/, `<link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;800&family=Hind:wght@400;600&display=swap">\n    <title>`);
html = html.replace(/<meta property="og:image" content="https:\/\/petrslavik\.cz\/og-image\.jpg" \/>\s*<meta property="og:image:width" content="1200" \/>\s*<meta property="og:image:height" content="630" \/>\s*<meta name="twitter:image" content="https:\/\/petrslavik\.cz\/og-image\.jpg" \/>/, `<!-- TODO: přidat public/og-image.jpg (1200x630) -->\n    <!--\n    <meta property="og:image" content="https://petrslavik.cz/og-image.jpg" />\n    <meta property="og:image:width" content="1200" />\n    <meta property="og:image:height" content="630" />\n    <meta name="twitter:image" content="https://petrslavik.cz/og-image.jpg" />\n    -->`);
html = html.replace(/<div id="root"><\/div>/, `<noscript><div style="padding:2rem;font-family:sans-serif;text-align:center;">Pro zobrazení této stránky je potřeba mít zapnutý JavaScript.</div></noscript>\n    <div id="root"></div>`);
fs.writeFileSync('index.html', html);

// 8 CSS
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/@import url\('https:\/\/fonts\.googleapis\.com[^\n]*\n/, '');
if (!css.includes('@keyframes marquee')) {
  css += `\n@keyframes marquee {\n  from { transform: translateX(0); }\n  to { transform: translateX(-50%); }\n}\n.animate-marquee {\n  animation: marquee 30s linear infinite;\n  will-change: transform;\n}\n`;
}
fs.writeFileSync('src/index.css', css);

// 9 isolation: isolate
replaceInFile('src/components/blocks/HeroInteractive.tsx', /<section \n      ref=\{containerRef\} \n      data-hero="true"\n      className="relative w-full min-h-screen bg-brand-black flex items-center justify-center overflow-hidden"/, `<section \n      ref={containerRef} \n      data-hero="true"\n      className="relative w-full min-h-screen bg-brand-black flex items-center justify-center overflow-hidden"\n      style={{ isolation: 'isolate' }}`);
replaceInFile('src/components/layout/PageHero.tsx', /className="relative pt-32 pb-20 px-4 bg-brand-black text-brand-white overflow-hidden"/, `className="relative pt-32 pb-20 px-4 bg-brand-black text-brand-white overflow-hidden" style={{ isolation: 'isolate' }}`);

let home = fs.readFileSync('src/pages/Home.tsx', 'utf8');
home = home.replace(/<section className="relative py-24 px-4 bg-brand-black text-brand-white overflow-hidden">/, `<section className="relative py-24 px-4 bg-brand-black text-brand-white overflow-hidden" style={{ isolation: 'isolate' }}>`);
fs.writeFileSync('src/pages/Home.tsx', home);

// 10 SEO Component
const seoComponent = `import { Helmet } from 'react-helmet-async';

export function SEO({ title, description, path }: { title: string; description: string; path: string; }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={\`https://petrslavik.cz\${path}\`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={\`https://petrslavik.cz\${path}\`} />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content="Petr Slavík" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}`;
fs.writeFileSync('src/components/ui/SEO.tsx', seoComponent);

// Refactor all pages
const pagesDir = 'src/pages';
const pages = fs.readdirSync(pagesDir).filter((f: string) => f.endsWith('.tsx'));
pages.forEach((file: string) => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('<Helmet>')) {
    const titleMatch = content.match(/<title>([^<]+|\{.*?\})<\/title>/);
    const descMatch = content.match(/<meta\s+name="description"\s+content=({[^}]+}|"[^"]+")/);
    const pathMatch = content.match(/<link\s+rel="canonical"\s+href=(?:\{`https:\/\/petrslavik\.cz([^`]+)`\}|"https:\/\/petrslavik\.cz([^"]+)")/);

    if (titleMatch && descMatch) {
      let title = titleMatch[1];
      let desc = descMatch[1];
      let pagePath = pathMatch ? (pathMatch[1] || pathMatch[2]) : '';

      let seoTitle = title.startsWith('{') ? title.slice(1,-1) : '"' + title + '"';
      let seoDesc = desc; // already has quotes
      let seoPath = '';
      if (file === 'ReferenceDetail.tsx' || file === 'BlogDetail.tsx') {
        const p = file === 'ReferenceDetail.tsx' ? 'reference' : 'blog';
        seoPath = '{\\`/' + p + '/${slug}\\`}';
      } else {
        seoPath = '"' + pagePath + '"';
      }

      const seoTag = '<SEO title={' + seoTitle + '} description={' + seoDesc + '} path=' + seoPath + ' />';
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/, seoTag);
      content = content.replace(/import \{ Helmet \} from 'react-helmet-async';/, "import { SEO } from '@/components/ui/SEO';");
      fs.writeFileSync(filePath, content);
    }
  }
});

// 11 analytics.ts
replaceInFile('src/lib/analytics.ts', /console\.log\(`\[Event\]: \$\{eventName\}`,\s*eventData\);/, `if (import.meta.env.DEV) { console.log(\`[Event]: \${eventName}\`, eventData); }`);

// 12 Contact.tsx
let contact = fs.readFileSync('src/pages/Contact.tsx', 'utf8');
contact = contact.replace(/<form onSubmit=\{handleSubmit\} className="space-y-6">/, `<form onSubmit={handleSubmit} className="space-y-6">\n              <input type="text" name="website" aria-hidden="true" tabIndex={-1} className="sr-only" onChange={(e) => { if (e.target.value) setIsSubmitted(true); }} />`);
contact = contact.replace(/<input\s+type="text"\s+placeholder="Jméno a příjmení"\s+name="name"/, `<label htmlFor="field-name" className="sr-only">Jméno a příjmení</label>\n                <input id="field-name" type="text" placeholder="Jméno a příjmení" name="name"`);
contact = contact.replace(/<input\s+type="email"\s+placeholder="E-mail"\s+name="email"/, `<label htmlFor="field-email" className="sr-only">E-mail</label>\n                <input id="field-email" type="email" placeholder="E-mail" name="email"`);
contact = contact.replace(/<input\s+type="tel"\s+placeholder="Telefon"\s+name="phone"/, `<label htmlFor="field-phone" className="sr-only">Telefon</label>\n                <input id="field-phone" type="tel" placeholder="Telefon" name="phone"`);
contact = contact.replace(/<textarea\s+placeholder="Představení projektu nebo dotaz"\s+name="message"/, `<label htmlFor="field-message" className="sr-only">Vaše zpráva</label>\n                <textarea id="field-message" placeholder="Představení projektu nebo dotaz" name="message"`);
contact = contact.replace(/<select\s+className="w-full bg-brand-white border-2 border-brand-black p-4 text-brand-black placeholder-brand-grey-dark focus:outline-none focus:ring-4 focus:ring-brand-grey-light\/20 font-medium"/, `<label htmlFor="field-budget" className="sr-only">Rozpočet</label>\n                <select id="field-budget" className="w-full bg-brand-white border-2 border-brand-black p-4 text-brand-black placeholder-brand-grey-dark focus:outline-none focus:ring-4 focus:ring-brand-grey-light/20 font-medium"`);
fs.writeFileSync('src/pages/Contact.tsx', contact);

// 13 Icons dedup
const findLucideIcons = ['TrendingUp', 'ShieldCheck', 'Zap', 'Settings', 'Link2', 'ShoppingCart', 'LineChart', 'Globe', 'Smartphone', 'ArrowLeft', 'Quote'];

const searchReplaceIcons = (dir: string) => {
  const files = fs.readdirSync(dir);
  files.forEach((file: string) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      searchReplaceIcons(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('Icons.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      let usedIcons = new Set();
      
      findLucideIcons.forEach(icon => {
        const regex = new RegExp(\`Icons\\\\.\${icon}\`, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, icon);
          usedIcons.add(icon);
          changed = true;
        }
      });
      
      if (changed) {
        const importStatement = \`import { \${Array.from(usedIcons).join(', ')} } from 'lucide-react';\\n\`;
        content = importStatement + content;
        fs.writeFileSync(fullPath, content);
      }
    }
  });
};
searchReplaceIcons('src');

let iconsTsx = fs.readFileSync('src/components/ui/Icons.tsx', 'utf8');
findLucideIcons.forEach(icon => {
  iconsTsx = iconsTsx.replace(new RegExp(\`,?\\s*\${icon}\\s*(?=[,}])\`, 'g'), '');
});
fs.writeFileSync('src/components/ui/Icons.tsx', iconsTsx);

// 14 ErrorBoundary Component
const errBoundaryCode = `import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-brand-white text-brand-black px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-8">Něco se pokazilo.</h1>
          <a href="/" className="px-8 py-4 bg-brand-black text-brand-white font-extrabold uppercase tracking-widest text-sm hover:opacity-80 transition-opacity">
            Zpět na úvod
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
`;
fs.writeFileSync('src/components/ui/ErrorBoundary.tsx', errBoundaryCode);

// 17 Cursor-default in HeroInteractive
replaceInFile('src/components/blocks/HeroInteractive.tsx', ' overflow-hidden cursor-default"', ' overflow-hidden"');

// 18 transition-[transform,box-shadow]
const replaceTransition = (dir: string) => {
  const files = fs.readdirSync(dir);
  files.forEach((file: string) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceTransition(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const newContent = content.replace(/hover:-translate-y-1 hover:shadow-\\[8px_8px_0px_0px_rgba\\(18,18,18,1\\)\\] transition-all duration-300/g, 'hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow] duration-300');
      if (content !== newContent) fs.writeFileSync(fullPath, newContent);
    }
  });
}
replaceTransition('src');