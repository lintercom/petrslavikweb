import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv, type Plugin } from 'vite';

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
    description: 'Tvorba firemních webů podle problému, který mají vyřešit: jasnější nabídka, více poptávek, redesign nebo snadná správa obsahu.',
  },
  {
    path: '/sluzby/webove-stranky',
    title: 'Tvorba webových stránek, které řeší problém | Petr Slavík',
    description: 'Tvorba firemních webů, které pomáhají vysvětlit nabídku, vybudovat důvěru a získávat poptávky.',
  },
  {
    path: '/cenik',
    title: 'Ceník webových stránek | Petr Slavík',
    description: 'Orientační ceny tvorby firemních webů podle problému, který mají vyřešit: jasná nabídka, více poptávek nebo rozsáhlejší obchodní web.',
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
    title: 'Modelové scénáře webů | Petr Slavík',
    description: 'Ukázky typických problémů, které může řešit firemní web: nejasná nabídka, málo poptávek, zastaralý web nebo složitá správa obsahu.',
  },
];

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function staticRouteHtmlPlugin(): Plugin {
  return {
    name: 'static-route-html',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(indexPath)) {
        return;
      }

      const baseHtml = fs.readFileSync(indexPath, 'utf8');
      const withRouteHead = (route: (typeof seoRoutes)[number]) => {
        const url = `${siteUrl}${route.path === '/' ? '' : route.path}`;
        const title = escapeHtml(route.title);
        const description = escapeHtml(route.description);
        const type = route.type ?? 'website';

        let html = baseHtml
          .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
          .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`)
          .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
          .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`)
          .replace(/<meta property="og:type" content=".*?" \/>/, `<meta property="og:type" content="${type}" />`)
          .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`);

        html = html.replace(/<link rel="canonical" href=".*?" \/>\n\s*/g, '');
        html = html.replace('</title>', `</title>\n    <link rel="canonical" href="${url}" />`);
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
