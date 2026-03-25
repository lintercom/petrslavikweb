# Design Guidelines & Rules

## Projekt "Petr Slavík - Freelance Web Developer"

### Barevná paleta (Zemité a tmavé tóny)
- **Tmavé pozadí/Text (Primární tmavá):** `#0D0D0D`
- **Světlé pozadí/Text (Primární světlá):** `#F2F2F2`
- **Střední šedá/Zemitá:** `#737068`
- **Světlejší šedá/Zemitá:** `#A6A297`
- **Jemný akcent/Písková:** `#D9D4C5`

### Typografie a Jazyk
- **Jazyk:** Veškerý obsah je v češtině, komunikace probíhá v první osobě.
- **Styl:** Profesionální, přímý, prémiový.
- **Fonty:** Moderní bezpatkové písmo (Tailwind `font-sans`), plné vyhlazení (antialiased).
- **Nadpisy:** Casto psané verzálkami (uppercase), vysoká tloušťka (`font-black`), snížené rozestupy znaků (`tracking-tighter`), velmi kompaktní řádkování (`leading-[1]`).
- **Odstavce:** Střední tloušťka (`font-medium`), velmi dobrý kontrast.

### Design a Architektura
- **Minimalismus:** Čistý, "architektonický" přístup. Žádné přeplácané efekty, důraz na čisté linie a precizní zarovnání.
- **Mřížka (Grid):** Striktní dodržování spacingu a paddingů. Zásahy do struktury layoutu jsou zakázány, pokud nejsou výslovně vyžádány.
- **Komponenty a Tvary:** 
  - Využívání velkých zaoblených rohů (např. `rounded-[2rem]` nebo `rounded-[2.5rem]`) pro soft-ui dojem, avšak s ostrými hranami uvnitř layoutu.
  - Jemné rámečky (borders) v barvě `#737068` nebo `#D9D4C5` pro ohraničení kontejnerů.
- **Animace a Interakce:** 
  - Tvořeno pomocí `motion/react`. 
  - Animace musí být velmi plynulé a decentní (např. mírné zvětšení, objevení se zespodu `y: 50`), **nesmí narušit stávající rozložení**.

### Zvláštní pravidla a Historie
- **Podkresový akcent:** Barva `#D9D4C5` s opacitou `/40` je napříč webem sjednocena (hover efekty, stíny, dekorační bloky), aby tvořila jednotný zemitý podkres bez rušivých prvků (nahradilo předchozích 10 % a 50 %).
- **Portfolio ("Poslední Projekty"):** Nadpis sekce je minimalistický bez štítku "Reference". Samotné karty projektů mají prémiový tmavý vzhled, sticky efekt (každá další karta se přikládá zespodu s malým odskokem), vylepšenou hierarchii textů a jemné světelné efekty pro hloubku.
