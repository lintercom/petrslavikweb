import { motion } from 'motion/react';
import { TrendingUp, ArrowRight } from 'lucide-react';

export function Investment() {
  return (
    <section className="py-32 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-semibold mb-8 tracking-wide shadow-sm">
              Model spolupráce
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] mb-8 text-slate-900 leading-[1.1]">
              Investice do systému, <br className="hidden sm:block" />
              který se vám zaplatí.
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-10 lg:p-16 bg-white flex flex-col justify-between group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 text-slate-600 mb-16 shadow-sm group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                <TrendingUp size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Rozsah projektu
                </p>
                <p className="text-xl md:text-2xl text-slate-900 leading-relaxed font-medium">
                  Typická investice do komplexního řešení se pohybuje mezi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold">80 000 – 120 000 Kč</span> podle technologické náročnosti.
                </p>
              </div>
            </div>

            <div className="p-10 lg:p-16 bg-white flex flex-col justify-between">
              <div className="space-y-8">
                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  Každý web navrhuji jako škálovatelný systém, který lze rozšiřovat bez závislosti na šablonách nebo pluginové džungli. Dlouhodobá hodnota místo krátkodobé náplasti.
                </p>
                <p className="text-lg text-slate-900 leading-relaxed font-bold">
                  Neprodávám hotovou šablonu. Navrhuji architekturu podle vašeho konkrétního obchodního cíle.
                </p>
              </div>
              <div className="mt-16">
                <button className="inline-flex items-center gap-2 text-slate-900 font-bold pb-1 border-b-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-colors group/btn">
                  Probrat detaily vašeho projektu
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}