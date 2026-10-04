# Nahrání na Hostinger přes FTP / správce souborů

Web je připraven pro PHP 8.3 na běžném Hostinger webhostingu. Node.js není potřeba.

## Co nahrát

1. **Obsah `public_upload`** nahrajte do `public_html`. Zahrňte skrytý `.htaccess`
   a oba poštovní soubory `contact.php`, `contact-mail.php`.
2. **Celou složku `consultant-private`** nahrajte vedle `public_html`, do stejné
   nadřazené složky. Nikdy ji nenahrávejte dovnitř `public_html`.

```text
složka domény/
├── public_html/          ← obsah public_upload
│   ├── index.html
│   ├── assets/
│   ├── kontakt/
│   ├── consultant.php
│   ├── contact.php
│   ├── contact-mail.php
│   └── .htaccess
└── consultant-private/  ← neveřejná serverová složka
    ├── config.php        ← obsahuje váš klíč, není v Gitu
    ├── runtime.php
    ├── config.example.php
    ├── instructions.md
    ├── business.md
    └── protocol.md
```

PHP musí mít rozšíření cURL, mbstring a sessions a právo zapisovat do
`consultant-private`. Runtime si zde vytvoří `state` a `sessions`.
Typicky použijte oprávnění adresářů 700/750 a konfigurace 600/640 podle vlastníka
PHP procesu; neřešte zápis nastavením 777. `.htaccess` neveřejné složky přístup
navíc zakazuje, ale nenahrazuje správné umístění mimo `public_html`.

## Zapnutí veřejné AI

V `consultant-private/config.php` je připravený již uložený API klíč a model
`gemini-3.5-flash-lite`. Google pro veřejný provoz v EHP vyžaduje aktivní fakturaci
projektu. Fakturace projektu Default Gemini Project je ověřena, nový klíč
`petrslavikweb-konzultant` je uložen v soukromé konfiguraci a
`CONSULTANT_PUBLIC_ENABLED` je nastavené na `true`. Žádné soubory nebyly
agentem veřejně nasazeny; je potřeba nahrát aktualizovanou soukromou konfiguraci.
[Podmínky Google](https://ai.google.dev/gemini-api/terms).

Dokud není veřejná AI povolena, chat se nevolá a návštěvník může přejít na
„Chci jen poslat zprávu“. Tento přímý formulář může používat skutečnou poštu
nezávisle na veřejném zapnutí Gemini. Pošta je v připravené konfiguraci zapnutá
(`CONSULTANT_MAIL_MODE=live`) a používá stejnou funkci PHP `mail()` i příjemce
`petrslavikweb@gmail.com` jako původní formulář.

Pro ukázkový režim nastavte `CONSULTANT_MODE=mock`; v něm se e-maily nikdy
neodesílají. Konfigurace mimo veřejnou složku se načítá při každém požadavku,
takže po úpravě nemusíte restartovat server ani znovu kompilovat frontend.

## Ověření po nahrání

- Otevřete `/kontakt/` a vyzkoušejte přímou zprávu.
- Po povolení AI zkontrolujte JSON na `/consultant.php?action=config` a krátký rozhovor.
- Ověřte skutečné doručení e-mailu. Potvrzení `mail()` znamená předání poštovnímu
  systému, nikoliv potvrzené doručení do schránky.
- Pokud se ukáže chyba konfigurace, ověřte umístění `consultant-private`.
  Sestavení pro hosting volá PHP přímo, takže API není závislé na přesměrování
  `/api/consultant/*`. `.htaccess` přesto nahrajte kvůli ostatním URL webu.

## Opakované sestavení

```bash
npm run build:hostinger
```

Příkaz sestaví web, aktualizuje `public_upload` a serverové soubory ve složce
`consultant-private`. Existující `config.php` zachová. Předchozí obsah
`public_upload` zálohuje do dočasné složky systému.
V `public_upload` není API klíč ani `.env.local`. Složka `consultant-private`
obsahuje tajné údaje; nesdílejte ji a neukládejte do Gitu.

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
