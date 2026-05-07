import { SectionSpotlight } from '../ui/SectionSpotlight';
import { Button } from '../ui/Button';

export function BigFooterCTA() {
  return (
    <section
      style={{ isolation: 'isolate' }}
      className="relative w-full py-16 md:py-20 bg-brand-black flex flex-col items-center justify-center overflow-hidden"
    >
      <SectionSpotlight />
      <div className="relative flex flex-col items-center justify-center px-4 text-center z-10 mix-blend-difference">
        <p className="text-xs md:text-sm font-extrabold uppercase tracking-[0.24em] text-brand-grey-light mb-4">
          Nevíte, proč web nefunguje?
        </p>
        <h2
          data-spotlight="true"
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-white leading-none select-none uppercase mb-6"
        >
          Jdeme na to
        </h2>
        <p className="text-base md:text-xl text-brand-grey-light leading-relaxed max-w-2xl mb-8">
          Napište mi, co má váš web změnit: lépe vysvětlit nabídku, získat poptávky, působit důvěryhodněji nebo se jednodušeji spravovat.
        </p>
        <Button href="/kontakt" variant="onDark" size="xl">
          Domluvit konzultaci
        </Button>
      </div>
    </section>
  );
}
