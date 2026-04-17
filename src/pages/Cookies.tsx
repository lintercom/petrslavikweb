import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/ui/SEO';

export function Cookies() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Cookies | Petr Slavík"
        description="Informace o používání cookies na tomto webu."
        path="/cookies"
      />
      <PageHero title="Cookies." />

      <section className="py-32 px-4 bg-brand-white">
        <div className="container mx-auto max-w-3xl prose prose-2xl text-brand-grey-medium">
          <p>Tento web používá soubory cookies k zajištění funkčnosti a analýze návštěvnosti.</p>
          
          <h2 className="text-brand-black">Co jsou cookies?</h2>
          <p>Cookies jsou malé textové soubory, které se ukládají ve vašem prohlížeči při návštěvě webových stránek.</p>

          <h2 className="text-brand-black">Jaké cookies používáme</h2>
          <ul>
            <li><strong>Nezbytné:</strong> Pro správné fungování webu a uložení vašich preferencí.</li>
            <li><strong>Analytické:</strong> Pro anonymní měření návštěvnosti a chování uživatelů (Google Analytics).</li>
          </ul>

          <h2 className="text-brand-black">Správa souhlasu</h2>
          <p>Svůj souhlas s používáním cookies můžete kdykoliv změnit v nastavení svého prohlížeče.</p>
        </div>
      </section>
    </div>
  );
}
