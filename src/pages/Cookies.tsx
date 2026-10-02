import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/ui/SEO';
import { Button } from '@/components/ui/Button';
import { openCookieSettings } from '@/lib/analytics';

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
            <li><strong>Analytické:</strong> Pro měření návštěvnosti a chování uživatelů (Google Analytics), pokud analytiku povolíte.</li>
          </ul>

          <h2 className="text-brand-black">Správa souhlasu</h2>
          <p>Svůj souhlas s analytickými cookies můžete kdykoliv změnit tlačítkem níže.</p>
          <Button type="button" onClick={openCookieSettings} variant="outline" className="mt-6">
            Změnit nastavení cookies
          </Button>
        </div>
      </section>
    </div>
  );
}
