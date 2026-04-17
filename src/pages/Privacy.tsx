import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/ui/SEO';

export function Privacy() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Ochrana osobních údajů | Petr Slavík"
        description="Informace o zpracování osobních údajů."
        path="/ochrana-osobnich-udaju"
      />
      <PageHero title="Soukromí." />

      <section className="py-32 px-4 bg-brand-white">
        <div className="container mx-auto max-w-3xl prose prose-2xl text-brand-grey-medium">
          <p>Tato stránka obsahuje informace o tom, jak zpracováváme vaše osobní údaje v souladu s nařízením GDPR.</p>
          
          <h2 className="text-brand-black">1. Kdo údaje zpracovává</h2>
          <p>Správcem vašich osobních údajů je Petr Slavík (IČO: 12345678), se sídlem Příkladová 123, Praha.</p>

          <h2 className="text-brand-black">2. Jaké údaje zpracováváme</h2>
          <p>Zpracováváme údaje, které nám poskytnete přes kontaktní formulář (jméno, e-mail, telefon) za účelem vyřízení vaší poptávky a následné komunikace.</p>

          <h2 className="text-brand-black">3. Vaše práva</h2>
          <p>Máte právo na přístup k údajům, jejich opravu, výmaz nebo omezení zpracování. Pro uplatnění svých práv mě kontaktujte na pecaslavik@gmail.com.</p>
        </div>
      </section>
    </div>
  );
}
