/**
 * screenshots.mjs
 * Generuje screenshoty lokálního webu (localhost:3000) v desktop i mobilní
 * variantě + zachytává animační a hover stavy.
 *
 * Spuštění: node screenshots.mjs
 * Výstup:   screenshots/desktop/ · screenshots/mobile/ · screenshots/anim/
 */

import { chromium, devices } from 'playwright';
import { mkdirSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';

const BASE = process.env.SHOT_BASE || 'http://localhost:3000';

// ─── Stránky ─────────────────────────────────────────────────────────────────
const pages = [
  { slug: '',                           name: '01-home' },
  { slug: 'sluzby',                     name: '02-sluzby' },
  { slug: 'sluzby/webove-stranky',      name: '03-sluzby-weby' },
  { slug: 'sluzby/e-shop',              name: '04-sluzby-eshop' },
  { slug: 'sluzby/webove-aplikace',     name: '05-sluzby-cms' },
  { slug: 'sluzby/integrace',           name: '06-sluzby-integrace' },
  { slug: 'cenik',                      name: '07-cenik' },
  { slug: 'reference',                  name: '08-reference' },
  { slug: 'reference/firemni-web-s-vlastni-spravou-obsahu', name: '09-reference-detail' },
  { slug: 'proces',                     name: '10-proces' },
  { slug: 'blog',                       name: '11-blog' },
  { slug: 'blog/kolik-stoji-web-na-miru-v-roce-2026', name: '12-blog-detail' },
  { slug: 'integrace/pohoda',           name: '13-integrace-pohoda' },
  { slug: 'o-mne',                      name: '14-o-mne' },
  { slug: 'kontakt',                    name: '15-kontakt' },
  { slug: 'ochrana-osobnich-udaju',     name: '16-gdpr' },
  { slug: 'cookies',                    name: '17-cookies' },
];

// ─── Animační / interakční zachycení ─────────────────────────────────────────
// Každý záznam: { name, url, setup: async (page) => void, clip? }
const animations = [
  // Hero – viewport shot (nad fold)
  {
    name: 'hero-01-default',
    slug: '',
    label: 'Hero — výchozí stav (nad záhybem)',
    group: 'hero',
    setup: async (page) => {
      await page.waitForTimeout(900);
    },
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  },
  // Hero – spotlight simulace (myš přes text)
  {
    name: 'hero-02-spotlight',
    slug: '',
    label: 'Hero — spotlight cursor efekt (myš nad textem)',
    group: 'hero',
    setup: async (page) => {
      await page.mouse.move(720, 400);
      await page.waitForTimeout(700);
    },
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  },

  // Marquee – tři snímky s odstupem (pohyb textu)
  {
    name: 'marquee-01',
    slug: '',
    label: 'Marquee — snímek 1 (t=0)',
    group: 'marquee',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, 920));
      await page.waitForTimeout(300);
    },
  },
  {
    name: 'marquee-02',
    slug: '',
    label: 'Marquee — snímek 2 (t+800ms)',
    group: 'marquee',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, 920));
      await page.waitForTimeout(1100);
    },
  },
  {
    name: 'marquee-03',
    slug: '',
    label: 'Marquee — snímek 3 (t+1600ms)',
    group: 'marquee',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, 920));
      await page.waitForTimeout(1900);
    },
  },

  // Navigace – hover stav na položce
  {
    name: 'nav-01-default',
    slug: 'sluzby',
    label: 'Navigace — výchozí stav',
    group: 'navigace',
    setup: async (page) => { await page.waitForTimeout(400); },
    clip: { x: 0, y: 0, width: 1440, height: 80 },
  },
  {
    name: 'nav-02-hover',
    slug: 'sluzby',
    label: 'Navigace — hover na položce Ceník',
    group: 'navigace',
    setup: async (page) => {
      const link = page.locator('nav a', { hasText: 'Ceník' }).first();
      await link.hover();
      await page.waitForTimeout(350);
    },
    clip: { x: 0, y: 0, width: 1440, height: 80 },
  },

  // CTA tlačítko – default + hover
  {
    name: 'cta-btn-01-default',
    slug: 'sluzby/webove-stranky',
    label: 'CTA tlačítko — výchozí stav',
    group: 'tlacitko-cta',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 1000));
      await page.waitForTimeout(500);
    },
  },
  {
    name: 'cta-btn-02-hover',
    slug: 'sluzby/webove-stranky',
    label: 'CTA tlačítko — hover stav (stín + posun)',
    group: 'tlacitko-cta',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 1000));
      await page.waitForTimeout(400);
      const btn = page.locator('a[href="/kontakt"]').first();
      await btn.hover();
      await page.waitForTimeout(400);
    },
  },

  // Karta služby – default + hover
  {
    name: 'karta-01-default',
    slug: 'sluzby/webove-stranky',
    label: 'Karta služby — výchozí stav',
    group: 'karty-sluzby',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, 600));
      await page.waitForTimeout(600);
    },
  },
  {
    name: 'karta-02-hover',
    slug: 'sluzby/webove-stranky',
    label: 'Karta služby — hover stav (posun + stín)',
    group: 'karty-sluzby',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, 600));
      await page.waitForTimeout(500);
      const card = page.locator('.border-brand-black').first();
      await card.hover();
      await page.waitForTimeout(450);
    },
  },

  // FAQ – zavřený vs. otevřený accordion
  {
    name: 'faq-01-closed',
    slug: '',
    label: 'FAQ — všechny položky zavřené',
    group: 'faq-accordion',
    setup: async (page) => {
      await page.evaluate(() => {
        const faqSection = document.querySelector('h2');
        const sections = [...document.querySelectorAll('h2')];
        const faq = sections.find(el => el.textContent?.includes('dotazy'));
        if (faq) faq.scrollIntoView({ behavior: 'instant' });
      });
      await page.waitForTimeout(500);
    },
  },
  {
    name: 'faq-02-open',
    slug: '',
    label: 'FAQ — první položka otevřená',
    group: 'faq-accordion',
    setup: async (page) => {
      await page.evaluate(() => {
        const sections = [...document.querySelectorAll('h2')];
        const faq = sections.find(el => el.textContent?.includes('dotazy'));
        if (faq) faq.scrollIntoView({ behavior: 'instant' });
      });
      await page.waitForTimeout(400);
      const firstQuestion = page.locator('button').filter({ hasText: 'Kolik to stojí' }).first();
      if (await firstQuestion.count() > 0) {
        await firstQuestion.click();
        await page.waitForTimeout(500);
      }
    },
  },

  // BigFooterCTA – spotlight na hlavní CTA
  {
    name: 'footer-cta-01-default',
    slug: '',
    label: 'Footer CTA "Mám zájem" — výchozí',
    group: 'footer-cta',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(600);
    },
  },
  {
    name: 'footer-cta-02-spotlight',
    slug: '',
    label: 'Footer CTA "Mám zájem" — spotlight efekt',
    group: 'footer-cta',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(400);
      await page.mouse.move(720, page.viewportSize().height / 2);
      await page.waitForTimeout(600);
    },
  },

  // Ceník – přehled karet
  {
    name: 'cenik-karty-01-default',
    slug: 'cenik',
    label: 'Ceník — karty výchozí stav',
    group: 'cenik-karty',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.waitForTimeout(600);
    },
  },
  {
    name: 'cenik-karty-02-hover',
    slug: 'cenik',
    label: 'Ceník — hover na kartě (posun + stín)',
    group: 'cenik-karty',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.waitForTimeout(500);
      const card = page.locator('.border-brand-black').first();
      await card.hover();
      await page.waitForTimeout(450);
    },
  },

  // Reference – karta hover
  {
    name: 'reference-karta-01-default',
    slug: 'reference',
    label: 'Reference — karta výchozí stav',
    group: 'reference-karty',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, 400));
      await page.waitForTimeout(600);
    },
  },
  {
    name: 'reference-karta-02-hover',
    slug: 'reference',
    label: 'Reference — hover (posun + stín)',
    group: 'reference-karty',
    setup: async (page) => {
      await page.evaluate(() => window.scrollTo(0, 400));
      await page.waitForTimeout(500);
      const card = page.locator('.group').first();
      await card.hover();
      await page.waitForTimeout(450);
    },
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const outDir = 'screenshots';

const scrollLoad = async (page) => {
  await page.evaluate(async () => {
    await new Promise((r) => {
      let y = 0;
      const t = setInterval(() => {
        window.scrollTo(0, y);
        y += 400;
        if (y >= document.body.scrollHeight) { clearInterval(t); r(); }
      }, 80);
    });
  });
  await page.waitForTimeout(400);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
};

const takeFullPage = async (page, url, path) => {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
  await scrollLoad(page);
  await page.screenshot({ path, fullPage: true });
};

const takeAnim = async (browser, anim) => {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    colorScheme: 'light',
  });
  const page = await ctx.newPage();
  const url = `${BASE}/${anim.slug}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
  await scrollLoad(page);
  await anim.setup(page);
  const path = join(outDir, 'anim', `${anim.name}.png`);
  const opts = { path, fullPage: !anim.clip };
  if (anim.clip) opts.clip = anim.clip;
  await page.screenshot(opts);
  await ctx.close();
  return path;
};

// ─── Spuštění ─────────────────────────────────────────────────────────────────
(async () => {
  // Vymazat staré screenshoty
  console.log('Mažu staré screenshoty…');
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(join(outDir, 'desktop'), { recursive: true });
  mkdirSync(join(outDir, 'mobile'),  { recursive: true });
  mkdirSync(join(outDir, 'anim'),    { recursive: true });

  const browser = await chromium.launch();

  // ── Desktop 1440×900
  console.log('\n── Desktop (1440×900) ──');
  const dCtx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    colorScheme: 'light',
  });
  const dPage = await dCtx.newPage();
  for (const p of pages) {
    const url  = `${BASE}/${p.slug}`;
    const path = join(outDir, 'desktop', `${p.name}.png`);
    process.stdout.write(`  ${p.name} … `);
    try { await takeFullPage(dPage, url, path); process.stdout.write('ok\n'); }
    catch (e) { process.stdout.write(`CHYBA: ${e.message}\n`); }
  }
  await dCtx.close();

  // ── Mobile iPhone 13
  console.log('\n── Mobile (iPhone 13) ──');
  const mCtx = await browser.newContext({ ...devices['iPhone 13'] });
  const mPage = await mCtx.newPage();
  for (const p of pages) {
    const url  = `${BASE}/${p.slug}`;
    const path = join(outDir, 'mobile', `${p.name}.png`);
    process.stdout.write(`  ${p.name} … `);
    try { await takeFullPage(mPage, url, path); process.stdout.write('ok\n'); }
    catch (e) { process.stdout.write(`CHYBA: ${e.message}\n`); }
  }
  await mCtx.close();

  // ── Animační / hover stavy
  console.log('\n── Animace & hover stavy ──');
  for (const anim of animations) {
    process.stdout.write(`  ${anim.name} … `);
    try { await takeAnim(browser, anim); process.stdout.write('ok\n'); }
    catch (e) { process.stdout.write(`CHYBA: ${e.message}\n`); }
  }

  await browser.close();

  // ── Vygenerovat SCREENSHOTS.md
  generateMd();

  console.log('\nDone.');
})();

// ─── Generování SCREENSHOTS.md ────────────────────────────────────────────────
function generateMd() {
  // Skupiny animací
  const groups = {};
  for (const a of animations) {
    if (!groups[a.group]) groups[a.group] = [];
    groups[a.group].push(a);
  }

  const groupLabels = {
    'hero':           'Hero sekce — vstupní animace a spotlight',
    'marquee':        'Marquee — pohyblivý pásek služeb',
    'navigace':       'Navigace — hover na položkách menu',
    'tlacitko-cta':   'CTA tlačítko — výchozí vs. hover',
    'karty-sluzby':   'Karty služeb — výchozí vs. hover',
    'faq-accordion':  'FAQ Accordion — zavřený vs. otevřený',
    'footer-cta':     'Footer CTA „Mám zájem" — spotlight efekt',
    'cenik-karty':    'Ceník — karty výchozí vs. hover',
    'reference-karty':'Reference — karty výchozí vs. hover',
  };

  let md = `# Screenshoty webu petrslavikweb.cz

> Vygenerováno automaticky ze skriptu \`screenshots.mjs\`
> Zdroj: \`${BASE}\`
> Datum: ${new Date().toLocaleDateString('cs-CZ')}

---

## Struktura složek

\`\`\`
screenshots/
├── desktop/   full-page screenshoty v rozlišení 1440 × 900 px
├── mobile/    full-page screenshoty na iPhone 13 (390 × 844 px)
└── anim/      animační a hover stavy — snímky patřící k sobě jsou seskupeny níže
\`\`\`

---

## Full-page screenshoty — Desktop & Mobile

| Soubor | Stránka |
|--------|---------|
`;

  for (const p of pages) {
    md += `| \`desktop/${p.name}.png\` + \`mobile/${p.name}.png\` | \`/${p.slug || ''}\` |\n`;
  }

  md += `
---

## Animační a hover stavy (\`anim/\`)

> Snímky v každé skupině zachycují **jednu animaci nebo interakci** ve více fázích.
> Zobraz je vedle sebe nebo postupně za sebou, aby byl patrný vizuální efekt.

`;

  for (const [groupKey, items] of Object.entries(groups)) {
    const label = groupLabels[groupKey] || groupKey;
    md += `### ${label}\n\n`;
    md += `| Soubor | Popis |\n|--------|-------|\n`;
    for (const a of items) {
      md += `| \`anim/${a.name}.png\` | ${a.label} |\n`;
    }
    md += `\n`;
  }

  md += `---

## Popis animací

| Animace | Kde na webu | Spouštěč | Technologie |
|---------|------------|----------|-------------|
| **Spotlight cursor** | Tmavé sekce (hero, footer CTA, Pro koho tvořím) | Pohyb myši | \`useMotionValue\` + rAF |
| **Marquee pásek** | Homepage pod hero | Automaticky, loop | CSS \`@keyframes\` translateX |
| **Fade-in při scrollu** | Všechny sekce a karty | \`whileInView\` | Framer Motion |
| **Card hover** | Karty služeb, ceník, reference | Hover myší | CSS transition + shadow |
| **Nav hover** | Hlavní navigace | Hover myší | CSS transition color |
| **Button hover** | CTA tlačítka | Hover myší | CSS transition + shadow |
| **FAQ accordion** | Sekce FAQ na homepage | Klik | State toggle + CSS transition |
| **Hero text fade** | Hero sekce | Načtení stránky | Framer Motion \`initial → animate\` |
`;

  const mdPath = join(outDir, 'SCREENSHOTS.md');
  writeFileSync(mdPath, md, 'utf8');
  console.log(`\nVygenerován ${mdPath}`);
}
