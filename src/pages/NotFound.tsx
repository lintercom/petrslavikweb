import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';
import { PageHero } from '@/components/layout/PageHero';
import { Button } from '@/components/ui/Button';

export function NotFound() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Stránka nenalezena | Petr Slavík"
        description="Požadovaná stránka neexistuje nebo byla přesunuta."
        path="/404"
        noIndex
      />
      <PageHero title="Stránka nenalezena.">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-grey-light hover:text-brand-white transition-colors mb-10 font-semibold uppercase tracking-widest text-sm">
          <ArrowLeft className="w-4 h-4" /> Zpět na úvod
        </Link>
      </PageHero>
      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-3xl">
          <p className="text-lg text-brand-grey-dark leading-relaxed mb-8">
            Tato adresa nevede na žádnou existující stránku. Pokračujte na úvod nebo si vyberte některou z hlavních sekcí webu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/" variant="primary" size="xl">
              Úvodní stránka
            </Button>
            <Button href="/sluzby" variant="outline" size="xl">
              Zobrazit služby
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
