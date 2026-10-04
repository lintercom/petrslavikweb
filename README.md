# petrslavikweb.cz

Portfolio and service website for Petr Slavik.

## Local Development

Prerequisites: Node.js 20 or newer.

```bash
npm install
npm run dev
```

The development server runs on `http://127.0.0.1:3000/`.

## Checks

```bash
npm run lint
npm run build
```

## AI konzultant

`npm run dev` spustí také serverové API. Bez API klíče běží označený mock,
který nevolá Gemini ani neodesílá e-maily. Otevřete
[http://localhost:3000/kontakt/](http://localhost:3000/kontakt/).

Konfiguraci z `.env.example` zkopírujte do `.env.local`. Pro skutečné Gemini
nastavte `CONSULTANT_MODE=gemini`, `GEMINI_API_KEY` a `GEMINI_MODEL`.
Pro skutečnou poštu je navíc potřeba `CONSULTANT_MAIL_MODE=live` a
`CONTACT_MAIL_ENDPOINT` vedoucí na vlastní PHP handler. Po změně restartujte
server. Klíče nemají prefix `VITE_` a nepatří do repozitáře.

```bash
npm run test:consultant
```

Firemní podklady upravujte v `server/consultant/business.md`, instrukce
v sousedním `instructions.md`. [Podrobná konfigurace a provozní omezení](docs/AI_CONSULTANT.md)
obsahují ověřené podmínky Google, limity, mail adaptér a budoucí serverové
nasazení. Veřejný provoz pro uživatele v EHP vyžaduje aktivní fakturaci Gemini;
samotné nahrání statického `dist` nové API nezprovozní. Nic nebylo nasazeno.

## Hostinger přes FTP

```bash
npm run build:hostinger
```

Obsah `public_upload` patří do `public_html`; soukromá složka
`consultant-private` patří vedle něj. AI na Hostingeru běží v PHP 8.3,
pošta používá společnou původní funkci `sendContactMail()` / `mail()`.
[Návod k nahrání a zapnutí AI](docs/UPLOAD_HOSTING.md).
