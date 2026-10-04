export function mockReply(history) {
  const answers = history.filter(m => m.role === 'user').map(m => m.text);
  const last = answers.at(-1);
  if (/ignoruj|ignore|system prompt|přepiš.*instruk|api.?key|tajné/i.test(last)) return { reply: 'Pomohu vám s podnikáním a přípravou podkladů pro Petra. Co vám dnes nejvíce komplikuje práci?', proposal: null, contact: false };
  if (/kontakt|poslat zprávu|odeslat|předat petrovi/i.test(last)) return { reply: 'Můžete Petrovi předat zprávu přímo. Shrnutí před odesláním upravte podle sebe.', proposal: null, contact: true };
  if (answers.length >= 4 || /návrh|navrhn|stačí|shrň/i.test(last)) {
    const all = answers.join(' ');
    const service = /obuv|bot|servis|oprav/i.test(all);
    const booking = /rezerv|termín|objedn/i.test(all);
    return { reply: 'Podklady už stačí pro předběžný první krok. Návrh můžete upravit nebo předat Petrovi.', contact: false, proposal: {
      problem: `Z vašeho popisu vychází potřeba zjednodušit postup: ${answers[0].slice(0, 260)}`,
      firstStep: service ? 'Ujasnit příjem zakázek a připravit jednoduchý formulář s popisem opravy a možností doplnit fotografie. Petr ověří vhodný způsob realizace.' : booking ? 'Nejprve popsat průběh objednání a ověřit, zda stačí formulář, nebo se vyplatí napojit rezervační řešení.' : 'Popsat jeden důležitý zákaznický krok a upravit současný web nebo formulář podle této potřeby.',
      benefit: 'Přehlednější podklady od zákazníků a méně ručního doplňování informací. Jde o možný přínos, nikoliv záruku výsledku.',
      verify: 'Petr musí ověřit současné řešení, technické možnosti, rozsah, cenu a termín. Rozpočet ani používaný systém nemusíte znát.'
    } };
  }
  const questions = ['Jak dnes zákazník svůj požadavek předává a kde se postup nejčastěji zasekne?', 'Co by vám v tomto postupu nejvíce pomohlo zjednodušit?', 'Jak by měl vypadat první užitečný výsledek pro vás nebo vaše zákazníky?'];
  return { reply: `${/nevím|neznám/i.test(last) ? 'To nevadí, technické řešení může ověřit Petr. ' : 'Děkuji za upřesnění. '}${questions[Math.min(answers.length - 1, 2)]}`, proposal: null, contact: false };
}
