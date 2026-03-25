import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const faces = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&h=80&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80',
];

export function Hero() {
  return (
    <section className="relative w-full px-4 md:px-8 pt-28 pb-12 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-[90rem] mx-auto min-h-[min(78vh,820px)] rounded-[2rem] md:rounded-[2.25rem] overflow-hidden border border-[#9D9C99]/20 shadow-[0_24px_80px_rgba(92,88,80,0.12)]"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=1600"
          alt="Profesionální práce u notebooku"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5C5850]/92 via-[#5C5850]/75 to-[#7F7560]/55" />
        <div className="absolute inset-0 bg-[#5C5850]/20 mix-blend-multiply" />

        <div className="relative z-10 flex flex-col justify-end md:justify-center min-h-[min(78vh,820px)] px-8 py-14 md:px-16 md:py-20 lg:max-w-[58%]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70 mb-4"
          >
            Frontend &amp; webové systémy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-black tracking-tight leading-[1.05] text-white"
          >
            Odborný přehled.
            <br />
            Řešení na míru.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="mt-6 text-base md:text-lg text-white/85 font-medium leading-relaxed max-w-xl"
          >
            Stavím rychlé, čitelné weby a aplikace v Reactu — s důrazem na výkon,
            přístupnost a prémiový dojem značky.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#DEEA55] text-[#5C5850] text-[11px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-black/10 hover:brightness-105 transition-all"
            >
              Domluvit hovor
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/80 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
            >
              Reference
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex -space-x-3">
              {faces.map((src, i) => (
                <div
                  key={i}
                  className="relative w-11 h-11 rounded-full border-2 border-white/90 overflow-hidden bg-[#9D9C99]"
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-11 h-11 rounded-full border-2 border-white/90 bg-[#5C5850] flex items-center justify-center text-[10px] font-bold text-white z-10">
                10+
              </div>
            </div>
            <p className="text-sm text-white/80 font-medium max-w-[220px] leading-snug">
              Desítky projektů od landingů po interní nástroje.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
