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
          <p>Správcem osobních údajů je Petr Slavík, IČO: 05695961, se sídlem Nová 114, 768 21 Kvasice.</p>

          <h2 className="text-brand-black">Jaké údaje zpracovávám</h2>
          <p>Zpracovávám pouze údaje, které mi sami poskytnete prostřednictvím kontaktního formuláře, zejména jméno, e-mail a obsah zprávy.</p>

          <h2 className="text-brand-black">Účel zpracování</h2>
          <p>Údaje slouží výhradně pro vyřízení vašeho dotazu nebo poptávky.</p>

          <h2 className="text-brand-black">Doba uchování</h2>
          <p>Údaje uchovávám po dobu nezbytně nutnou pro vyřízení komunikace, nejdéle po dobu 1 roku.</p>

          <h2 className="text-brand-black">Předání údajů</h2>
          <p>Osobní údaje nejsou předávány třetím stranám, s výjimkou technického zajištění provozu webu.</p>

          <h2 className="text-brand-black">Analytika</h2>
          <p>Na webu používám nástroj Google Analytics pro anonymní analýzu návštěvnosti.</p>

          <h2 className="text-brand-black">Vaše práva</h2>
          <p>Máte právo požadovat přístup ke svým údajům, jejich opravu nebo výmaz. V případě dotazů mě můžete kontaktovat na e-mailu petrslavikweb@gmail.com.</p>
        </div>
      </section>
    </div>
  );
}
