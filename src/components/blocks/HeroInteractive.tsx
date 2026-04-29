import { useRef } from 'react';
import { motion } from 'motion/react';
import { SectionSpotlight } from '../ui/SectionSpotlight';
import { Button } from '../ui/Button';

export function HeroInteractive() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef} 
      data-hero="true"
      style={{ isolation: 'isolate' }}
      className="relative w-full min-h-[720px] md:min-h-screen bg-brand-black flex items-center overflow-hidden"
    >
      <SectionSpotlight />
      {/* Content Layer */}
      <div className="container mx-auto max-w-6xl relative flex flex-col items-start justify-center px-4 pt-28 pb-20 md:pt-36 md:pb-28 text-left z-10 mix-blend-difference">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs md:text-sm font-extrabold uppercase tracking-[0.24em] text-brand-grey-light mb-5"
        >
          Tvorba webů, e-shopů a systémů na míru
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-brand-white leading-[1.02] max-w-5xl mb-6 uppercase"
        >
          Weby a e-shopy na míru, které fungují jako systém.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl font-medium text-brand-grey-light max-w-3xl leading-relaxed mb-8"
        >
          Navrhuji a vyvíjím weby, e-shopy a vlastní CMS řešení s databází, měřením a napojením na další služby — od platebních bran přes rezervace až po účetnictví nebo ERP.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button href="/kontakt" variant="onDark" size="xl" className="w-full sm:w-auto">
            Domluvit konzultaci
          </Button>
          <Button href="/sluzby" variant="outline" size="xl" className="w-full sm:w-auto border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black focus-visible:ring-brand-white ring-offset-brand-black">
            Zobrazit služby
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
