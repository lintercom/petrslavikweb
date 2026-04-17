import { useRef } from 'react';
import { motion } from 'motion/react';
import { SectionSpotlight } from '../ui/SectionSpotlight';

export function HeroInteractive() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef} 
      data-hero="true"
      style={{ isolation: 'isolate' }}
      className="relative w-full min-h-screen bg-brand-black flex items-center justify-center overflow-hidden"
    >
      <SectionSpotlight />
      {/* Content Layer */}
      <div className="relative flex flex-col items-center justify-center px-4 text-center z-10 mix-blend-difference">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tighter text-brand-white leading-snug max-w-6xl mb-6 uppercase"
        >
          Weby, e-shopy<br />a aplikace,<br />co vydělávají.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl font-medium text-brand-grey-light max-w-2xl leading-relaxed"
        >
          Pro firmy, které chtějí fungující systém, ne jen vizitku. Fixní cena, jasný termín.
        </motion.p>
      </div>
    </section>
  );
}
