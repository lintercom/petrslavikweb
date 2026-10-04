import { trackEvent } from '@/lib/analytics';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { SEO } from '@/components/ui/SEO';
import { Consultant } from '@/components/consultant/Consultant';

export function Contact() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Kontakt | Petr Slavík"
        description="Napište mi, co má váš firemní web vyřešit: jasnější nabídku, více poptávek, redesign nebo snazší správu obsahu."
        path="/kontakt"
      />
      <PageHero
        title="Kontakt."
        description="Pojďme probrat, co dnes na vašem webu nefunguje a jaký výsledek od nového webu očekáváte."
      />

      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-6">Email</h3>
                <div className="space-y-6 text-xl font-extrabold text-brand-black">
                  <p>
                    <span className="block text-xs text-brand-grey-dark mb-1 uppercase tracking-widest">Email</span>
                    <a
                      href="mailto:petrslavikweb@gmail.com"
                      className="hover:underline"
                      data-gtm-event="email_click"
                      data-gtm-target="petrslavikweb@gmail.com"
                      onClick={() => trackEvent('email_click', { email: 'petrslavikweb@gmail.com' })}
                    >
                      petrslavikweb@gmail.com
                    </a>
                  </p>
                  <p className="text-base font-medium text-brand-grey-dark leading-relaxed">
                    Nejrychlejší cesta je poslat stručný popis toho, co má web změnit. Nemusíte mít hotové zadání, stačí popsat současný problém.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Consultant />
            </div>
          </div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
