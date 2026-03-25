import { motion } from 'motion/react';

const processes = [
  {
    num: '01',
    title: 'Pochopení zadání',
    detail: 'Probereme cíle, uživatele a omezení — společně nastavíme měřítko úspěchu.',
  },
  {
    num: '02',
    title: 'Návrh řešení',
    detail: 'Struktura obrazovek, stack a milníky. Písemný plán, ne překvapení.',
  },
  {
    num: '03',
    title: 'Iterativní vývoj',
    detail: 'Pravidelné ukázky, krátké cykly, prostor pro zpětnou vazbu.',
  },
  {
    num: '04',
    title: 'Spuštění',
    detail: 'Testy, výkon, nasazení a předání — včetně dokumentace.',
  },
];

export function Process() {
  return (
    <section id="proces" className="py-20 lg:py-28 w-full relative bg-[#F8F7F5] overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        <div className="rounded-[2rem] border border-[#9D9C99]/15 bg-[#FBFAD6]/50 p-8 md:p-12 lg:p-14 mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.35em] text-[#9C9F5B] mb-3">
              Proces
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#5C5850] leading-[1.08]">
              Přehledně od první zprávy po ostrý provoz.
            </h2>
            <p className="mt-5 text-[#7E7B76] font-medium leading-relaxed">
              Žádná zbytečná byrokracie — přímá komunikace a jasné milníky.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {processes.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="relative rounded-2xl border border-[#9D9C99]/15 bg-white p-8 shadow-sm hover:border-[#9C9F5B]/35 transition-colors"
            >
              <span className="text-4xl font-black text-[#DEEA55]/90 leading-none block mb-6">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-[#5C5850] mb-3">{step.title}</h3>
              <p className="text-sm text-[#7E7B76] font-medium leading-relaxed">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
