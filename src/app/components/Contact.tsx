import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Contact() {
  return (
    <section id="kontakt" className="w-full relative py-20 lg:py-28 z-20 bg-[#FBFAD6]/60">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden border border-[#9D9C99]/15 bg-white shadow-[0_24px_80px_rgba(92,88,80,0.08)]">
          <div className="relative min-h-[280px] lg:min-h-[560px] hidden lg:block">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
              alt="Spolupráce"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5C5850]/85 via-[#5C5850]/35 to-transparent" />
            <div className="absolute bottom-12 left-10 right-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70 mb-3">
                Pojďme do toho
              </p>
              <p className="text-3xl font-black text-white tracking-tight leading-tight">
                Krátký hovor vám ušetří týdny tápání.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9D9C99] mb-3">
              Kontakt
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#5C5850] leading-[1.05] mb-4">
              Napište mi
            </h2>
            <p className="text-[#7E7B76] text-sm sm:text-base font-medium mb-10 max-w-md leading-relaxed">
              Nový web, audit stacku nebo posílení týmu — ozvěte se stručně, ozvu se
              s termínem hovoru.
            </p>

            <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#9D9C99] mb-2">
                  Jméno
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-[#9D9C99]/25 bg-[#F8F7F5] px-4 py-3.5 text-[#5C5850] font-medium placeholder:text-[#9D9C99] focus:outline-none focus:ring-2 focus:ring-[#9C9F5B]/40 focus:border-transparent transition-shadow"
                  placeholder="Jan Novák"
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#9D9C99] mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-[#9D9C99]/25 bg-[#F8F7F5] px-4 py-3.5 text-[#5C5850] font-medium placeholder:text-[#9D9C99] focus:outline-none focus:ring-2 focus:ring-[#9C9F5B]/40 focus:border-transparent transition-shadow"
                  placeholder="jan@firma.cz"
                />
              </div>
              <div className="relative">
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#9D9C99] mb-2">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full rounded-xl border border-[#9D9C99]/25 bg-[#F8F7F5] px-4 py-3.5 text-[#5C5850] font-medium placeholder:text-[#9D9C99] focus:outline-none focus:ring-2 focus:ring-[#9C9F5B]/40 focus:border-transparent resize-none transition-shadow"
                  placeholder="Stručně popište projekt nebo termín..."
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#DEEA55] text-[#5C5850] text-[11px] font-bold uppercase tracking-[0.2em] shadow-md hover:brightness-105 transition-all"
                >
                  Odeslat
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
