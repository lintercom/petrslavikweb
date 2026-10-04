# AI konzultant na /kontakt/

Lokální vývoj má serverové API přímo ve Vite. Pro Hostinger přes FTP je
připravena ekvivalentní PHP 8.3 implementace v `server/consultant-php`.
[Nahrání na Hostinger](UPLOAD_HOSTING.md) je doporučený postup pro tento hosting. Bez klíče nebo s
`CONSULTANT_MODE=mock` běží označená simulace a **nikdy neodesílá e-maily**.
Konfiguraci z `.env.example` můžete zkopírovat do ignorovaného `.env.local`.
Po změně konfigurace restartujte `npm run dev`. Otevřete
[http://localhost:3000/kontakt/](http://localhost:3000/kontakt/).

- Podklady: `server/consultant/business.md`; instrukce: `instructions.md` vedle něj.
- Rozhraní: `src/components/consultant/`; stav rozhovoru: serverová paměť.
- Gemini: serverový REST adaptér v `gemini.mjs`, žádný klíč v klientovi.
- E-mail: adaptér v `mail.mjs` používá stávající `public/contact.php` a jeho
  příjemce `petrslavikweb@gmail.com`. Vygenerovaný text je posílán jako prostý
  text do stávajících polí, nikoliv jako HTML. Kontaktní formulář neposílá údaje modelu.

### Skutečné Gemini a vývoj zdarma

V `.env.local` nastavte `CONSULTANT_MODE=gemini`, `GEMINI_API_KEY` a
`GEMINI_MODEL=gemini-3.5-flash-lite`. Klíč nemá prefix `VITE_`, nepatří do
repozitáře ani logů. Mail ponechte v režimu `test`. Bez klíče se automaticky
použije mock. Vývoj testujte pouze s vymyšlenými, nedůvěrnými údaji.

Ověřeno 4. 10. 2026 v oficiální dokumentaci: standardní textový model
`gemini-3.5-flash-lite` má dostupný bezplatný tarif pro vstup i výstup.
Aktuální RPM, TPM a RPD závisí na konkrétním projektu a tarifu; Google je uvádí
v AI Studio a negarantuje kapacitu. Původní 2.5 Flash-Lite odmítl API při
živém ověření pro nový účet (404); přepnuto na doporučený 3.5 Flash-Lite. Proto zde nejsou vydávány pevné kvóty za
univerzální limity. Před skutečným testem zkontrolujte limity svého projektu.

Zdroje: [ceník](https://ai.google.dev/gemini-api/docs/pricing#gemini-3.5-flash-lite),
[limity](https://ai.google.dev/gemini-api/docs/rate-limits),
[strukturované výstupy](https://ai.google.dev/gemini-api/docs/structured-output),
[podmínky](https://ai.google.dev/gemini-api/terms).
Podmínky Google vyžadují pro aplikaci zpřístupněnou uživatelům v EHP, Švýcarsku
nebo Británii Paid Services, tedy projekt s aktivní fakturací. Bezplatný
neveřejný vývoj neznamená bezplatný veřejný provoz. Fakturace nebyla aktivována.
Vyhledávání ani externí nástroje se nepoužívají. Spotřeba Gemini je oddělená
od limitu používání Codexu.

### Odesílání a případné budoucí nasazení

Pro skutečné e-maily nastavte `CONSULTANT_MAIL_MODE=live` a
`CONTACT_MAIL_ENDPOINT` na adresu vlastního běžícího `contact.php` (HTTPS,
pro lokální PHP je povolen localhost). PHP hostitel musí podporovat a mít
nakonfigurované `mail()`. Server přijímá úspěch pouze po JSON `success: true`.
V mock režimu zůstává skutečná pošta vypnutá i při nastavení `live`.
Testovací potvrzení i režim jsou viditelné v rozhraní. Žádné skutečné odeslání
nebylo během implementace zkoušeno. Potvrzení PHP znamená převzetí zprávy
poštovním systémem, nikoliv ověření doručení do schránky.

Pro běžné FTP nasazení použijte `npm run build:hostinger`. Balíček obsahuje
veřejný PHP vstup `consultant.php` a API přesměrování v `.htaccess`; runtime,
podklady a klíč patří do oddělené neveřejné složky `consultant-private`.
PHP využívá sdílenou poštovní funkci z `contact-mail.php`, kterou volá také
původní formulář `contact.php`. Není potřeba Node.js ani HTTP volání vlastního
PHP handleru. PHP relace jsou dočasné serverové soubory, nejvýše 30 minut
přístupné; odstraňuje je PHP session garbage collector. Po úspěšném odeslání
se obsah rozhovoru z relace smaže. Počítadla pod zámkem `flock()` sdílejí PHP
procesy tohoto nasazení. Nevypisují klíče, kontakty ani rozhovory do logů.
Dokud `CONSULTANT_PUBLIC_ENABLED=false`, veřejný chat Gemini je blokován, ale
přímé zprávy lze odesílat. Plné zapnutí AI vyžaduje potvrzenou fakturaci Google.

Samostatný Node server `server/api.mjs` zůstává alternativou pro hosting
s Node.js a reverse proxy `/api/consultant/*` na `127.0.0.1:3001`.
Následující provozní poznámky o paměti a `.consultant-usage.json` se týkají
Node varianty; PHP má počítadla v `consultant-private/state`.

První verze je určena pro jednu serverovou instanci. IP limit používá adresu
socketu a ignoruje nedůvěryhodné `X-Forwarded-For`; při proxy je potřeba před
nasazením doplnit důvěryhodné předávání klientské IP. Paměťové limity a relace
nejsou sdílené mezi více procesy. Relace expirují po 30 minutách; po úspěšném
odeslání se text rozhovoru z paměti odstraní. Obsah ani kontakty se nelogují.
Rozhovory nejsou ukládány do databáze nebo místního úložiště prohlížeče.

Server ukládá pouze denní počítadla volání a rezervované tokeny do
`.consultant-usage.json` mimo veřejné soubory. Rozpočet přežije restart jedné
instance; soubor musí zůstat zachován a zapisovatelný. Rezervace je konzervativní
(vstupní UTF-8 bajty, maximální výstup, rezerva protokolu); není výpisem faktury
Google. Chybné i timeoutované požadavky rezervaci nevrací. Bez zápisu do
počítadla se Gemini nevolá. Limity nastavíte proměnnými z `.env.example`.
Limit chatování neblokuje samostatný limit pěti pokusů o kontaktní formulář
za hodinu. Opakované odeslání v jedné relaci se po potvrzení neodesílá znovu;
souběžné požadavky jsou blokované. Při nejasném výsledku po síťovém výpadku
mezi API a PHP nelze bez rozšíření původního PHP garantovat přesně jedno
poštovní doručení. Pro veřejný provoz je vhodné doplnit idempotenci také v PHP.

Zásady zpracování údajů jsou převzaté ze současného webu bez nových právních
formulací nebo předvyplněných souhlasů. Před veřejným zapnutím skutečného
Gemini je potřeba prověřit, že zásady odpovídají zapojení Google.
Analytické události používají stávající souhlas; ve vývoji, mocku a při testovací
poště se neposílají. Neobsahují text ani kontakty. Úspěch se měří až po
potvrzení serverem.

### Cílené kontroly

```bash
npm run lint
npm run build
npm run test:consultant
```

Serverové testy používají mock / náhrady Gemini a pošty: servis obuvi, neznámý
systém a rozpočet, přímý kontakt, pokus změnit instrukce, limity, výpadek AI,
validace, oddělení faktů od návrhu, opakované odeslání a trvalý denní rozpočet.
Obchodní hypotézy se v první verzi automaticky neodvozují; e-mail to výslovně
uvádí. Návrh konzultanta je oddělen od skutečných výroků návštěvníka a
návštěvníkem upraveného shrnutí. Skutečné odpovědi Gemini je ještě potřeba
ověřit po doplnění klíče; mock testy neposkytují důkaz o chování živého modelu.

## Nákladový limit připravený 4. 10. 2026

`CONSULTANT_MONTHLY_BUDGET_USD=1` je nastaveno v lokální i soukromé PHP
konfiguraci. Před voláním Gemini server atomicky uloží rezervaci nákladů za
celý vstup a maximální výstup včetně přemýšlení. Vychází z ceny modelu
`gemini-3.5-flash-lite` (0,30 USD / milion vstupních a 2,50 USD / milion
výstupních tokenů), s 20% rezervou. Jiný model se bez aktualizace cenového
výpočtu nevolá. Jde o konzervativní omezení těchto serverových volání, nikoli
výpis faktury nebo záruku celkového účtu Google; ceny je nutné sledovat.
[Oficiální ceny](https://ai.google.dev/gemini-api/docs/pricing#gemini-3.5-flash-lite).

Měsíc se počítá podle UTC. Denní reset nemaže měsíční rezervaci. Neúspěšná
volání ani timeout rezervaci nevrací. Při vyčerpání se další volání zablokuje;
přímý kontaktní formulář zůstává dostupný. Denní limity zůstávají 30 volání a
200 000 rezervovaných tokenů. Hodnota měsíčního limitu `0` zablokuje AI.

Na hostingu zachovejte `consultant-private/state/usage.json` při každém uploadu;
v Node vývoji `.consultant-usage.json`. Smazání počítadel obnoví rozpočet a
znehodnotí omezení. Při převodu starších denních počítadel se rezervuje alespoň
poslední zaznamenaný den; dřívější již smazané dny nelze zpětně spočítat.
Klíč nesmí být používán další aplikací, jejíž spotřebu toto počítadlo nevidí.

V Google AI Studio je ještě nutné v projektu daného klíče dokončit:
1. Předplacený režim **Prepay**, dobití **5 USD** (nebo měnový ekvivalent).
2. **Auto-reload vypnuté**.
3. V **Spend** nastavit **Monthly spend cap = 20 Kč** (účet je veden v CZK).
4. Ověřit aktivní fakturaci a poté povolit `CONSULTANT_PUBLIC_ENABLED=true`.

Ověřeno 4. 10. 2026: Default Gemini Project (`gen-lang-client-0162954208`)
má Paid Tier 1, Prepay kredit 100 Kč a Auto-reload Off. Měsíční spend cap
byl doplněn a uložen na 20 Kč. Nový klíč `petrslavikweb-konzultant`
patří k tomuto projektu a nahradil dosavadní klíč v `.env.local` i soukromém
PHP `config.php`. `CONSULTANT_PUBLIC_ENABLED=true` je připraveno pro hosting.
Google upozorňuje na zhruba desetiminutové zpoždění svých limitů, při kterém
mohou vzniknout přečerpání. Dobití tedy nelze vydávat za garantovaný konečný
strop ani provoz zdarma. Nevyužité kredity expirují po 12 měsících.
[Fakturace a limity Google](https://ai.google.dev/gemini-api/docs/billing).
