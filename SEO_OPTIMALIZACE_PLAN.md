# SEO optimalizace webu petrslavikweb.cz

Cíl dokumentu: vytvořit přehledný plán úprav, aby web lépe přiváděl nové klienty z Googlu, zvyšoval důvěru a vedl návštěvníky ke kontaktu.

Web není potřeba celý předělat. Základ je dobrý. Teď je potřeba z něj udělat akviziční systém: lepší struktura, ostřejší cílení na hledané dotazy, silnější důvěryhodnost, měření a pravidelný obsah.

---

## 1. Technické SEO

### Cíl
Aby Google web bez problémů našel, prošel, zaindexoval a správně pochopil všechny důležité stránky.

### Co zkontrolovat a upravit

- [ ] Ověřit v Google Search Console, že Google vidí skutečný obsah stránek, ne jen prázdnou React aplikaci.
- [ ] Zkontrolovat indexaci hlavních URL:
  - `/`
  - `/sluzby`
  - `/sluzby/tvorba-webu`
  - `/sluzby/redesign-webu`
  - `/cenik`
  - `/reference`
  - `/blog`
  - `/kontakt`
- [ ] Vytvořit nebo zkontrolovat `sitemap.xml`.
- [ ] Odeslat sitemapu do Google Search Console.
- [ ] Vytvořit nebo zkontrolovat `robots.txt`.
- [ ] Ověřit přesměrování `http` na `https`.
- [ ] Sjednotit verzi domény `www` vs. bez `www`.
- [ ] Ověřit canonical URL na každé stránce.
- [ ] Zkontrolovat chybové stránky 404.
- [ ] Zvážit prerender / statické generování hlavních stránek, protože web je React SPA.

### Priorita
Vysoká.

### Poznámka
React SPA může fungovat, ale pro SEO je bezpečnější, když hlavní stránky existují jako předgenerované HTML. Není to nutné řešit okamžitě, ale u webu, který má růst přes organické vyhledávání, je to důležitý další krok.

---

## 2. SEO title a meta description

### Cíl
Každá důležitá stránka má mít vlastní jasný titulek a popis, který odpovídá tomu, co lidé hledají.

### Aktuální problém
Některé titulky jsou moc obecné. Například:

```text
Služby | Petr Slavík
Blog | Petr Slavík
```

To je srozumitelné pro návštěvníka, který už web zná, ale slabé pro Google a pro člověka ve výsledcích hledání.

### Doporučené úpravy

#### Homepage

```text
Title: Tvorba webových stránek na míru | Petr Slavík
Description: Tvořím firemní weby, redesigny a webové aplikace na míru. Pomáhám klientům jasně vysvětlit nabídku, získávat poptávky a měřit výsledky webu.
```

#### Služby

```text
Title: Tvorba webových stránek, redesign a správa | Petr Slavík
Description: Tvorba webových stránek na míru, redesign nefunkčních webů, rozšíření funkcí a dlouhodobá správa. Weby stavím tak, aby přiváděly poptávky.
```

#### Tvorba webu

```text
Title: Tvorba webových stránek na míru | Petr Slavík
Description: Tvorba firemního webu na míru od struktury a textů po design, vývoj, SEO základ, měření a spuštění. Web, který jasně vede ke kontaktu.
```

#### Redesign webu

```text
Title: Redesign webu, který přivádí poptávky | Petr Slavík
Description: Přestavím zastaralý nebo nefunkční web tak, aby lépe vysvětlil nabídku, zvýšil důvěru a vedl návštěvníky ke kontaktu.
```

#### Ceník

```text
Title: Ceník tvorby webových stránek | Petr Slavík
Description: Orientační ceny tvorby webu: základní web od 35 000 Kč, pokročilý web od 60 000 Kč, redesign a měsíční správa podle rozsahu.
```

#### Blog

```text
Title: Blog o tvorbě webů, SEO a poptávkách | Petr Slavík
Description: Praktické články o tvorbě firemních webů, SEO, ceně webu, redesignu, měření poptávek a tom, jak z webu udělat obchodní nástroj.
```

### Priorita
Vysoká.

---

## 3. Struktura webu a landing pages

### Cíl
Vytvořit samostatné stránky pro hlavní obchodní dotazy, které lidé hledají na Googlu.

### Důležité pravidlo
Landing page není fiktivní stránka jen pro Google. Je to normální veřejná stránka pro člověka, který hledá konkrétní věc.

### Doporučené nové stránky

```text
/tvorba-webovych-stranek
/redesign-webu
/cena-webovych-stranek
/sprava-webu
/webove-aplikace-na-miru
/tvorba-webovych-stranek-zlin
/tvorba-webovych-stranek-vsetin
/tvorba-webovych-stranek-kromeriz
```

### Prioritní landing pages pro začátek

1. `/tvorba-webovych-stranek`
2. `/cena-webovych-stranek`
3. `/redesign-webu`
4. `/tvorba-webovych-stranek-zlin`
5. `/sprava-webu`

### Struktura stránky `/tvorba-webovych-stranek`

- H1: Tvorba webových stránek na míru
- Pro koho je služba vhodná
- Jaký problém řeší
- Co klient dostane
- Jak probíhá spolupráce
- Cena od 35 000 Kč
- Časté dotazy
- Reference nebo ukázky práce
- CTA: Poptat web

### Struktura stránky `/cena-webovych-stranek`

- H1: Kolik stojí webové stránky
- Základní web od 35 000 Kč
- Pokročilý web od 60 000 Kč
- Co cenu ovlivňuje
- Kdy stačí základní web
- Kdy je potřeba pokročilý web
- Návratnost webu
- Co není v ceně
- CTA: Nechat si nacenit web

### Struktura lokální stránky `/tvorba-webovych-stranek-zlin`

- H1: Tvorba webových stránek Zlín a okolí
- Pro firmy a podnikatele ze Zlínského kraje
- Jaké problémy řeším
- Možnost osobní nebo online spolupráce
- Cena od
- Postup spolupráce
- Reference
- Kontakt

### Priorita
Vysoká.

---

## 4. Navigace a interní prolinkování

### Cíl
Aby se uživatel i Google dokázali dostat na všechny důležité stránky, ale horní menu zůstalo jednoduché.

### Hlavní navigace
Do horní lišty nedávat všechny landing pages.

Doporučené horní menu:

```text
Služby | Ceník | Reference | Proces | Blog | O mně
```

CTA tlačítko:

```text
Domluvit konzultaci
```

### Footer
Footer použít jako přirozený rozcestník pro více odkazů.

Doporučené sekce ve footeru:

```text
Služby
- Tvorba webových stránek
- Redesign webu
- Správa webu
- Webové aplikace
- Úpravy webu

Lokálně
- Tvorba webových stránek Zlín
- Tvorba webových stránek Vsetín
- Tvorba webových stránek Kroměříž

Užitečné
- Cena webových stránek
- Jak probíhá spolupráce
- Blog
- Kontakt
```

### Interní odkazy v obsahu

- Z homepage odkazovat na hlavní službu, ceník, reference a kontakt.
- Ze stránky služeb odkazovat na konkrétní služby a landing pages.
- Z článků odkazovat na relevantní služby.
- Z ceníku odkazovat na tvorbu webu, redesign a kontakt.

### Příklady interních odkazů

Článek `Kolik stojí firemní web`:

```text
/cenik
/cena-webovych-stranek
/tvorba-webovych-stranek
/kontakt
```

Článek `Web pro lokální podnikání`:

```text
/tvorba-webovych-stranek-zlin
/tvorba-webovych-stranek-vsetin
```

### Priorita
Vysoká.

---

## 5. Obsah homepage

### Cíl
Homepage musí během pár vteřin vysvětlit, co děláš, pro koho, proč to má hodnotu a co má návštěvník udělat dál.

### Co je dobré
Web už dobře komunikuje, že nejde jen o hezký design, ale o jasnou nabídku, důvěru a poptávky.

### Co doplnit

- [ ] Silnější větu typu: `Web není jen vizitka. Je to prodejní a procesní systém.`
- [ ] Jasnější rozdělení služeb hned na homepage.
- [ ] CTA: `Poptat web` a `Zjistit orientační cenu`.
- [ ] Krátký blok o návratnosti webu.
- [ ] Krátký blok o tom, proč nejsi jen grafik, ale technický partner.
- [ ] Viditelnější důvěryhodnost: IČO, osobní přístup, proces, technologie, reference.

### Doporučená pozice

```text
Tvořím weby, e-shopy a webové aplikace na míru, které nejsou jen vizitka, ale prodejní a procesní systém.
```

### Priorita
Střední až vysoká.

---

## 6. Služby

### Cíl
Každá služba musí mít jasný obchodní účel a vlastní SEO cíl.

### Doporučené pojmenování služeb

| Současně | Doporučené SEO pojmenování |
|---|---|
| Tvorba webu | Tvorba webových stránek na míru |
| Redesign webu | Redesign webu, který přivádí poptávky |
| Rozšíření a úpravy webu | Úpravy webu a vývoj nových funkcí |
| Měsíční správa | Správa webu a dlouhodobý rozvoj |

### Co doplnit na detail služby

- [ ] Cena od.
- [ ] Pro koho služba je.
- [ ] Pro koho služba není.
- [ ] Co klient dostane.
- [ ] Co klient musí dodat.
- [ ] Jak probíhá spolupráce.
- [ ] Jaké jsou výstupy.
- [ ] Časté otázky.
- [ ] CTA po každé větší části stránky.

### Priorita
Vysoká.

---

## 7. Ceník a návratnost

### Cíl
Ceník má filtrovat správné klienty, zvyšovat důvěru a vysvětlit hodnotu webu.

### Co je dobré
Ceník už obsahuje:

- Základní web od 35 000 Kč
- Pokročilý web od 60 000 Kč
- Redesign individuálně
- Rozšíření a úpravy individuálně

### Co doplnit

- [ ] Samostatnou sekci `Jak se web vrací`.
- [ ] Vysvětlení rozdílu mezi základním a pokročilým webem.
- [ ] Co není v ceně.
- [ ] Kdy stačí základní web.
- [ ] Kdy je potřeba pokročilý web.
- [ ] Měsíční správa od konkrétní částky, pokud ji chceš komunikovat.
- [ ] Informace, že web děláš ideálně s navazující správou.

### Návrh textu

```text
Web za 60 000 Kč nemusí vydělávat stovky tisíc měsíčně. Pokud přivede několik relevantních poptávek ročně, může se zaplatit velmi rychle. Proto při tvorbě webu neřeším jen vzhled, ale hlavně to, jestli návštěvník pochopí nabídku, uvěří vám a udělá další krok.
```

### Priorita
Vysoká.

---

## 8. Blog a obsahová strategie

### Cíl
Přivádět lidi z Googlu ještě před tím, než se rozhodnou poptat web.

### Aktuální témata blogu

- Proč web nepřivádí poptávky
- Jak vysvětlit nabídku na webu
- Kdy dává smysl redesign webu
- Kolik stojí firemní web
- Tvorba webu pro služby
- SEO základ firemního webu
- Web pro lokální podnikání
- Jak vybrat tvůrce webu

### Co zlepšit

- [ ] Rozšířit články do větší hloubky.
- [ ] Každý článek cílit na konkrétní dotaz.
- [ ] Přidat interní odkazy na služby, ceník a kontakt.
- [ ] Přidat FAQ bloky do článků.
- [ ] Přidat CTA na konci každého článku.

### Prioritní články

1. Kolik stojí tvorba webových stránek v roce 2026
2. Jak poznat, že váš web potřebuje redesign
3. Tvorba webu na míru vs. šablona
4. Co musí obsahovat firemní web, aby přiváděl poptávky
5. Proč web nepřivádí poptávky a jak to opravit
6. Jak vybrat dodavatele webu
7. Co je správa webu a proč ji řešit každý měsíc
8. Jak měřit poptávky z webu
9. Tvorba webových stránek pro malé firmy
10. Web jako prodejní systém, ne jen vizitka

### Priorita
Střední až vysoká.

---

## 9. Lokální SEO

### Cíl
Získat klienty ze Zlína, Vsetína, Kroměříže, Vizovic a okolí.

### Co vytvořit

- [ ] Google Business Profile.
- [ ] Lokální landing page pro Zlín.
- [ ] Lokální landing page pro Vsetín.
- [ ] Lokální landing page pro Kroměříž.
- [ ] Doplnit oblast působení na web.
- [ ] Získat první recenze.
- [ ] Přidat odkazy z lokálních katalogů a profilů.

### Doporučené lokální stránky

```text
/tvorba-webovych-stranek-zlin
/tvorba-webovych-stranek-vsetin
/tvorba-webovych-stranek-kromeriz
/tvorba-webovych-stranek-vizovice
/tvorba-webovych-stranek-uherske-hradiste
```

### Pozor
Lokální stránky nesmí být kopie s vyměněným městem. Každá musí mít vlastní obsah a reálný důvod existence.

### Priorita
Vysoká.

---

## 10. Strukturovaná data

### Cíl
Pomoci Googlu pochopit, kdo jsi, co nabízíš a jaké stránky na webu existují.

### Co už dává smysl používat

- Person
- ProfessionalService
- WebSite
- Service
- BreadcrumbList
- Article
- FAQPage

### Co zkontrolovat

- [ ] Odstranit duplicitní JSON-LD, pokud se `Person` vkládá jednou v `index.html` a podruhé přes SEO komponentu.
- [ ] Doplnit `sameAs` odkazy:
  - GitHub
  - LinkedIn
  - Google Business Profile
  - případně další veřejné profily
- [ ] Doplnit konkrétnější `areaServed`.
- [ ] Doplnit `telephone`, pokud bude veřejný.
- [ ] Doplnit `address`, pokud chceš uvádět sídlo.
- [ ] Rozšířit `OfferCatalog` o všechny hlavní služby.

### Priorita
Střední.

---

## 11. Rychlost a Core Web Vitals

### Cíl
Aby web byl rychlý, příjemný na mobilu a neztrácel konverze.

### Co zkontrolovat

- [ ] Lighthouse pro homepage.
- [ ] Lighthouse pro službu tvorba webu.
- [ ] Lighthouse pro ceník.
- [ ] Largest Contentful Paint.
- [ ] Interaction to Next Paint.
- [ ] Cumulative Layout Shift.
- [ ] Velikost JavaScript bundlu.
- [ ] Lazy loading obrázků.
- [ ] Optimalizace animací.
- [ ] Optimalizace fontů.

### Poznámka
Web používá animace a interaktivní prvky. Ty mohou vypadat dobře, ale nesmí brzdit pohyb, scroll a první načtení stránky.

### Priorita
Střední.

---

## 12. Konverze a poptávky

### Cíl
Návštěvník nemá jen přijít. Má pochopit hodnotu a udělat další krok.

### Co doplnit

- [ ] Silnější CTA v hero:
  - `Poptat web`
  - `Zjistit orientační cenu`
- [ ] Lead magnet:
  - `Rychlá kontrola webu zdarma`
- [ ] Lepší kontaktní formulář.
- [ ] CTA na konci každé služby.
- [ ] CTA na konci každého článku.
- [ ] Viditelnější reference.
- [ ] Případové studie.
- [ ] Sekce `Co se stane po odeslání formuláře`.

### Doporučený lead magnet

```text
Rychlá kontrola webu zdarma
Pošlete mi adresu webu a já vám pošlu 5 konkrétních věcí, které mohou brzdit poptávky.
```

### Doporučený formulář

- Jméno
- E-mail
- Telefon volitelně
- Máte současný web?
- Jaký typ spolupráce řešíte?
- Jaký je orientační rozpočet?
- Kdy chcete začít?
- Co má web hlavně přinést?

### Priorita
Vysoká.

---

## 13. Důvěryhodnost

### Cíl
Začínající firma musí rychle ukázat, že je spolehlivá a schopná dodat výsledek.

### Co doplnit

- [ ] Profesionální fotka.
- [ ] Jasný krátký profil o tobě.
- [ ] IČO a kontaktní údaje viditelně.
- [ ] Technologie a přístup.
- [ ] Ukázky projektů.
- [ ] Případové studie.
- [ ] Recenze klientů.
- [ ] Popis procesu spolupráce.
- [ ] Garance nebo jistoty pro klienta.

### Doporučené sdělení

```text
Nejsem jen grafik ani jen kodér. Pomáhám postavit web tak, aby dával obchodní smysl: od struktury a textů přes technické zpracování až po měření a dlouhodobý rozvoj.
```

### Priorita
Vysoká.

---

## 14. Měření a analytika

### Cíl
Vědět, jestli SEO a web přivádí poptávky.

### Co nastavit

- [ ] Google Search Console.
- [ ] GA4.
- [ ] Google Tag Manager.
- [ ] Měření odeslání formuláře.
- [ ] Měření kliknutí na e-mail.
- [ ] Měření kliknutí na telefon.
- [ ] Měření kliknutí na CTA.
- [ ] Měření návštěvy ceníku.
- [ ] Měření návštěvy kontaktu.
- [ ] Měření scrollu u hlavních landing pages.

### Hlavní konverze

- Odeslání formuláře.
- Kliknutí na e-mail.
- Kliknutí na telefon.
- Kliknutí na `Domluvit konzultaci`.

### Pomocné konverze

- Návštěva ceníku.
- Návštěva kontaktu.
- Kliknutí na reference.
- Stažení nebo odeslání auditu zdarma.

### Priorita
Vysoká.

---

## 15. Linkbuilding a autorita

### Cíl
Získat odkazy a důvěryhodnost mimo vlastní web.

### Co udělat

- [ ] Google Business Profile.
- [ ] Firmy.cz.
- [ ] Najisto.cz nebo jiné rozumné české katalogy.
- [ ] LinkedIn profil.
- [ ] GitHub profil propojený s webem.
- [ ] Odkazy z webů klientů v patičce nebo v referenci, pokud s tím klient souhlasí.
- [ ] Články nebo případové studie u partnerů.
- [ ] Lokální podnikatelské skupiny.

### Pozor
Nekupovat hromady nekvalitních odkazů. Lepší je méně odkazů z reálných a důvěryhodných míst.

### Priorita
Střední.

---

## 16. Doporučený plán na 30 dní

### Týden 1: Technika a základní metadata

- [ ] Google Search Console.
- [ ] Sitemap.
- [ ] Robots.txt.
- [ ] Kontrola indexace.
- [ ] Úprava title a description hlavních stránek.
- [ ] Kontrola canonical URL.

### Týden 2: Obchodní stránky

- [ ] Vytvořit `/tvorba-webovych-stranek`.
- [ ] Vytvořit `/cena-webovych-stranek`.
- [ ] Vytvořit nebo upravit `/redesign-webu`.
- [ ] Doplnit interní odkazy.
- [ ] Upravit footer.

### Týden 3: Lokální SEO a důvěra

- [ ] Vytvořit `/tvorba-webovych-stranek-zlin`.
- [ ] Založit nebo upravit Google Business Profile.
- [ ] Přidat osobní profil a fotku.
- [ ] Doplnit reference / případové studie.

### Týden 4: Obsah a konverze

- [ ] Rozšířit článek `Kolik stojí firemní web`.
- [ ] Přidat CTA do článků.
- [ ] Přidat lead magnet `Rychlá kontrola webu zdarma`.
- [ ] Nastavit měření konverzí.
- [ ] Vyhodnotit první data v Search Console.

---

## 17. Priority podle důležitosti

### Priorita 1: Udělat hned

- Metadata hlavních stránek.
- Sitemap a Search Console.
- Landing page `tvorba webových stránek`.
- Landing page `cena webových stránek`.
- Lepší footer odkazy.
- Měření formuláře a CTA.

### Priorita 2: Udělat brzy

- Lokální landing page Zlín.
- Google Business Profile.
- Rozšíření článků.
- Reference a případové studie.
- Lead magnet zdarma.

### Priorita 3: Dlouhodobě

- Další lokální stránky.
- Linkbuilding.
- Pravidelný blog.
- Prerender / statické generování.
- Optimalizace výkonu a animací.

---

## 18. Hlavní strategická pozice webu

Doporučené hlavní sdělení:

```text
Tvořím weby, e-shopy a webové aplikace na míru, které nejsou jen vizitka, ale prodejní a procesní systém.
```

Podpůrné sdělení:

```text
Pomáhám klientům jasně vysvětlit nabídku, zvýšit důvěru, získávat poptávky a měřit, co na webu skutečně funguje.
```

Tvoje výhoda:

```text
Freelancer s technickým přesahem, který kombinuje obchodní strukturu webu, texty, design, vývoj, měření a dlouhodobý rozvoj.
```

---

## 19. Finální verdikt

Web má dobrý základ. Není potřeba ho zahodit ani kompletně překopat.

Největší problém není technická kvalita webu, ale to, že zatím potřebuje ostřejší SEO cílení, více obchodních vstupních stránek, silnější důvěryhodnost a lepší měření poptávek.

Cíl dalších úprav:

```text
Z dobrého prezentačního webu udělat obchodní akviziční systém.
```
