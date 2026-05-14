import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { build, defineConfig, loadEnv, type Plugin } from 'vite';

const siteUrl = 'https://www.petrslavikweb.cz';

const seoRoutes = [
  {
    path: '/',
    title: 'Petr Slavík | Weby, které řeší problém',
    description: 'Tvorba firemních webů, které jasně vysvětlí nabídku, budují důvěru a pomáhají získávat poptávky.',
  },
  {
    path: '/sluzby',
    title: 'Služby | Petr Slavík',
    description: 'Tvorba webu, redesign, rozšíření webu a měsíční správa. Weby navržené podle problému, který mají klientovi vyřešit.',
  },
  {
    path: '/sluzby/tvorba-webu',
    title: 'Tvorba webu | Petr Slavík',
    description: 'Tvorba webu na míru: sdělení, struktura, textace, design, vývoj, SEO základ, kontaktní formulář a nasazení.',
  },
  {
    path: '/sluzby/redesign-webu',
    title: 'Redesign webu | Petr Slavík',
    description: 'Redesign webu jako přestavba nefunkční prezentace: analýza, nová struktura, texty, důvěra, kontaktní cesta, SEO a přesměrování.',
  },
  {
    path: '/sluzby/rozsireni-upravy-webu',
    title: 'Rozšíření a úpravy webu | Petr Slavík',
    description: 'Rozšíření a úpravy webu: nové sekce, formuláře, interakce, napojení na systémy, UX úpravy, rychlost a technické opravy.',
  },
  {
    path: '/sluzby/mesicni-sprava',
    title: 'Měsíční správa webu | Petr Slavík',
    description: 'Měsíční správa webu: technická kontrola, drobné úpravy, kontrola formulářů, rozvoj obsahu, měření a dlouhodobá péče.',
  },
  {
    path: '/cenik',
    title: 'Ceník webových služeb | Petr Slavík',
    description: 'Orientační ceny pro tvorbu webu, redesign, rozšíření webu a navazující péči po spuštění řešenou měsíčním paušálem podle rozsahu.',
  },
  {
    path: '/proces',
    title: 'Jak probíhá tvorba webu | Petr Slavík',
    description: 'Postup tvorby firemního webu od pochopení problému přes strukturu, texty, design, vývoj, spuštění a další zlepšování.',
  },
  {
    path: '/blog',
    title: 'Blog | Petr Slavík',
    description: 'Články o tvorbě firemních webů, struktuře nabídky, textech, SEO základu, důvěře a získávání poptávek.',
  },
  {
    path: '/blog/proc-web-neprivadi-poptavky',
    title: 'Proč web nepřivádí poptávky | Petr Slavík',
    description: 'Proč firemní web nepřivádí poptávky a jak zlepšit strukturu, texty, důvěru a cestu návštěvníka ke kontaktu.',
    type: 'article',
  },
  {
    path: '/blog/jak-vysvetlit-nabidku-na-webu',
    title: 'Jak vysvětlit nabídku na webu | Petr Slavík',
    description: 'Jak na webu srozumitelně vysvětlit nabídku, strukturovat služby a ukázat zákazníkovi důvod ke kontaktu.',
    type: 'article',
  },
  {
    path: '/blog/redesign-webu-kdy-dava-smysl',
    title: 'Kdy dává smysl redesign webu | Petr Slavík',
    description: 'Kdy dává smysl redesign firemního webu a jak poznat, že problém není jen ve vzhledu, ale ve struktuře a sdělení.',
    type: 'article',
  },
  {
    path: '/blog/kolik-stoji-firemni-web',
    title: 'Kolik stojí firemní web | Petr Slavík',
    description: 'Kolik stojí firemní web, co cenu ovlivňuje a proč nejde cenu dobře určit jen podle počtu podstránek.',
    type: 'article',
  },
  {
    path: '/blog/tvorba-webu-pro-sluzby',
    title: 'Tvorba webu pro služby | Petr Slavík',
    description: 'Jak má fungovat web pro firmy a odborníky, kteří prodávají služby: jasná nabídka, důvěra, postup spolupráce a cesta k poptávce.',
    type: 'article',
  },
  {
    path: '/blog/seo-zaklad-firemniho-webu',
    title: 'SEO základ firemního webu | Petr Slavík',
    description: 'Co má obsahovat SEO základ firemního webu: struktura stránek, titulky, metadata, interní odkazy, rychlost, sitemap, schema.org a měření výsledků.',
    type: 'article',
  },
  {
    path: '/blog/web-pro-lokalni-podnikani',
    title: 'Web pro lokální podnikání | Petr Slavík',
    description: 'Jak postavit web pro lokální podnikání: důvěryhodnost, lokální dohledatelnost, jasné služby, kontaktní cesta a obsah pro zákazníky z okolí.',
    type: 'article',
  },
  {
    path: '/blog/jak-vybrat-tvurce-webu',
    title: 'Jak vybrat tvůrce webu | Petr Slavík',
    description: 'Podle čeho vybrat tvůrce webu pro firemní web: strategie, texty, technické SEO, měření, komunikace a schopnost řešit obchodní problém.',
    type: 'article',
  },
  {
    path: '/kontakt',
    title: 'Kontakt | Petr Slavík',
    description: 'Napište mi, co má váš firemní web vyřešit: jasnější nabídku, více poptávek, redesign nebo snadnější správu obsahu.',
  },
  {
    path: '/o-mne',
    title: 'O mně | Petr Slavík',
    description: 'Jsem Petr Slavík. Navrhuji a stavím firemní weby, které pomáhají vysvětlit nabídku, budovat důvěru a získávat poptávky.',
  },
  {
    path: '/reference',
    title: 'Reference webů | Petr Slavík',
    description: 'Ukázky webů, které jsem navrhl a vytvořil pro klienty včetně rezervačních systémů a dlouhodobé správy.',
  },
  {
    path: '/reference/web-pro-farmu-pod-janovou-horou',
    title: 'Web pro Farmu pod Janovou horou | Petr Slavík',
    description: 'Reference projektu pro Farmu pod Janovou horou: web s rezervačním systémem, integrací Přihláškárny a dlouhodobým rozvojem.',
  },
  {
    path: '/reference/web-pro-osobniho-fitness-trenera',
    title: 'Web pro osobního fitness trenéra | Petr Slavík',
    description: 'Reference projektu pro osobního fitness trenéra: web s rezervačním systémem Reenio, jasnou prezentací služeb a automatizací objednávek.',
  },
  {
    path: '/ochrana-osobnich-udaju',
    title: 'Ochrana osobních údajů | Petr Slavík',
    description: 'Informace o zpracování osobních údajů na webu Petr Slavík.',
  },
  {
    path: '/cookies',
    title: 'Cookies | Petr Slavík',
    description: 'Informace o používání cookies na webu Petr Slavík.',
  },
];

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function stripHeadTagsFromRenderedHtml(html: string) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/g, '')
    .replace(/<meta\b[^>]*\/?>/g, '')
    .replace(/<link\b[^>]*\/?>/g, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
}

function extractStructuredDataScripts(html: string) {
  return Array.from(html.matchAll(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g))
    .map((match) => match[0])
    .join('');
}

function staticRouteHtmlPlugin(): Plugin {
  return {
    name: 'static-route-html',
    apply: 'build',
    async closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(indexPath)) {
        return;
      }

      const baseHtml = fs.readFileSync(indexPath, 'utf8');
      let renderRoute: ((routePath: string) => { html: string; scripts: string }) | undefined;

      try {
        const ssrDir = path.resolve(__dirname, 'dist-ssr');
        await build({
          configFile: false,
          root: __dirname,
          plugins: [react(), tailwindcss()],
          resolve: {
            alias: {
              '@': path.resolve(__dirname, './src'),
            },
          },
          define: {
            'import.meta.env.APP_URL': JSON.stringify(siteUrl),
          },
          build: {
            ssr: path.resolve(__dirname, 'src/entry-server.tsx'),
            outDir: ssrDir,
            emptyOutDir: true,
            rollupOptions: {
              output: {
                entryFileNames: 'entry-server.js',
              },
            },
          },
        });

        const serverEntry = path.join(ssrDir, 'entry-server.js');
        const moduleUrl = `${pathToFileURL(serverEntry).href}?t=${Date.now()}`;
        const serverModule = await import(moduleUrl);
        renderRoute = serverModule.renderRoute;
      } catch (error) {
        this.warn(`Static prerender failed, route HTML will contain SEO head only: ${error}`);
      }

      const withRouteHead = (route: (typeof seoRoutes)[number]) => {
        const url = `${siteUrl}${route.path === '/' ? '' : route.path}`;
        const title = escapeHtml(route.title);
        const description = escapeHtml(route.description);
        const type = route.type ?? 'website';
        const rendered = renderRoute?.(route.path);

        let html = baseHtml
          .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
          .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`)
          .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
          .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`)
          .replace(/<meta property="og:type" content=".*?" \/>/, `<meta property="og:type" content="${type}" />`)
          .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`);

        html = html.replace(/<link rel="canonical" href=".*?" \/>\n\s*/g, '');
        html = html.replace('</title>', `</title>\n    <link rel="canonical" href="${url}" />`);
        if (rendered) {
          html = html.replace('<div id="root"></div>', `<div id="root">${stripHeadTagsFromRenderedHtml(rendered.html)}</div>`);
          const structuredDataScripts = rendered.scripts || extractStructuredDataScripts(rendered.html);
          if (structuredDataScripts) {
            html = html.replace('</head>', `    ${structuredDataScripts}\n  </head>`);
          }
        }
        return html;
      };

      for (const route of seoRoutes) {
        const html = withRouteHead(route);
        if (route.path === '/') {
          fs.writeFileSync(indexPath, html);
          continue;
        }

        const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, 'index.html'), html);
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    base: '/',
    plugins: [react(), tailwindcss(), staticRouteHtmlPlugin()],
    define: {
      'import.meta.env.APP_URL': JSON.stringify(env.APP_URL || 'https://www.petrslavikweb.cz'),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // HMR can be disabled via DISABLE_HMR when file watching is noisy.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
