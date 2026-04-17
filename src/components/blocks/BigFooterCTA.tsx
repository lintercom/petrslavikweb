import { Link } from 'react-router-dom';
import { SectionSpotlight } from '../ui/SectionSpotlight';

export function BigFooterCTA() {
  return (
    <footer
      style={{ isolation: 'isolate' }}
      className="relative w-full py-24 bg-brand-black flex flex-col items-center justify-center overflow-hidden"
    >
      <SectionSpotlight />
      <Link
        to="/kontakt"
        aria-label="Přejít na kontakt"
        className="absolute inset-0 z-20 cursor-pointer"
      />
      <div className="relative flex flex-col items-center justify-center px-4 text-center z-10 mix-blend-difference pointer-events-none">
        <h2 
          data-spotlight="true"
          className="text-7xl md:text-9xl lg:text-[12rem] font-extrabold tracking-tighter text-brand-white leading-[0.8] select-none uppercase"
        >
          DO TOHO!
        </h2>
      </div>
    </footer>
  );
}
