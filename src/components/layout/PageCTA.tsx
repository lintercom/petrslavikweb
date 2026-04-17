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
    <section className="py-24 px-4 bg-brand-white border-t-2 border-brand-black">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-6 text-brand-black">{title}</h2>
        {description && (
          <p className="text-lg text-brand-grey-dark mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button href={primaryButtonHref} variant="primary" className="py-4 px-10 text-base uppercase tracking-widest font-extrabold">
            {primaryButtonText}
          </Button>
          {secondaryButtonText && (
            <Button href={secondaryButtonHref} variant="outline" className="py-4 px-10 text-base uppercase tracking-widest font-extrabold">
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
