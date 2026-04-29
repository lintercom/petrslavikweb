import { Button } from '@/components/ui/Button';

interface PageCTAProps {
  title: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function PageCTA({ 
  title, 
  description, 
  primaryButtonText = "Domluvit konzultaci", 
  primaryButtonHref = "/kontakt",
  secondaryButtonText = "Zobrazit ceník",
  secondaryButtonHref = "/cenik"
}: PageCTAProps) {
  return (
    <section className="py-16 md:py-20 px-4 bg-brand-white border-t-2 border-brand-black">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-6 text-brand-black">{title}</h2>
        {description && (
          <p className="text-base md:text-lg text-brand-grey-dark mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button href={primaryButtonHref} variant="primary" size="xl">
            {primaryButtonText}
          </Button>
          {secondaryButtonText && (
            <Button href={secondaryButtonHref} variant="outline" size="xl">
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
