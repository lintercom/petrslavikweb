import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE = 'https://www.petrslavikweb.cz';

const pages = [
  { slug: '',                               file: '01-home' },
  { slug: '/sluzby',                        file: '02-sluzby' },
  { slug: '/sluzby/webove-stranky',         file: '03-webove-stranky' },
  { slug: '/sluzby/e-shop',                 file: '04-e-shop' },
  { slug: '/sluzby/webove-aplikace',        file: '05-webove-aplikace' },
  { slug: '/cenik',                         file: '06-cenik' },
  { slug: '/reference',                     file: '07-reference' },
  { slug: '/proces',                        file: '08-proces' },
  { slug: '/blog',                          file: '09-blog' },
  { slug: '/kontakt',                       file: '10-kontakt' },
  { slug: '/o-mne',                         file: '11-o-mne' },
  { slug: '/integrace/pohoda',              file: '12-integrace-pohoda' },
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile',  width: 390,  height: 844 },
];

const outDir = path.resolve('screenshots');
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
    userAgent: vp.name === 'mobile'
      ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
      : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
  });
  const page = await context.newPage();

  for (const p of pages) {
    const url = `${BASE}${p.slug}`;
    process.stdout.write(`[${vp.name}] ${url} ... `);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });

      // Projdi celou stránku po krocích, aby se triggernuly všechny
      // whileInView animace v Framer Motion.
      await page.evaluate(async () => {
        const step = Math.round(window.innerHeight * 0.6);
        for (let y = 0; y <= document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise(r => setTimeout(r, 180));
        }
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise(r => setTimeout(r, 500));
        window.scrollTo(0, 0);
        await new Promise(r => setTimeout(r, 400));
      });

      const outFile = path.join(outDir, `${p.file}-${vp.name}.png`);
      await page.screenshot({ path: outFile, fullPage: true });
      console.log('OK');
    } catch (err) {
      console.log('FAIL:', err.message);
    }
  }

  await context.close();
}

await browser.close();
console.log(`\nHotovo. Soubory v: ${outDir}`);
