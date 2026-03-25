import { Shield, Zap, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    icon: Shield,
    name: 'Care',
    price: '2 100 Kč',
    period: '/ měsíc',
    description: 'Technická správa, drobné úpravy, dohled nad výkonem a garance dostupnosti.',
  },
  {
    icon: Zap,
    name: 'Growth',
    price: '3 900 Kč',
    period: '/ měsíc',
    description: 'Care + pravidelné rozšiřování obsahu, A/B testování a konverzní optimalizace.',
    highlight: true,
  },
  {
    icon: Rocket,
    name: 'Pro',
    price: '5 900 Kč',
    period: '/ měsíc',
    description: 'Strategický rozvoj webu, optimalizace architektury, kvartální roadmapa a dedikovaný čas.',
  },
];

export function Pricing() {
  return (
    <section className="py-32 w-full relative z-10 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div
          className="mb-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] text-slate-900 mb-6">
            Dlouhodobý rozvoj
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Software není nikdy hotový. Zajišťuji plynulý chod a průběžnou evoluci vašich systémů.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                className="relative group h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
              >
                {/* Highlight wrapper for the middle card to create a 1px gradient border */}
                <div className={`h-full rounded-[2.5rem] p-[1px] transition-all duration-500 ${plan.highlight ? 'bg-gradient-to-b from-blue-400 to-indigo-500 shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)]' : 'bg-slate-200 shadow-sm group-hover:shadow-md'}`}>
                  <div className="h-full bg-white rounded-[calc(2.5rem-1px)] p-10 flex flex-col relative overflow-hidden">
                    
                    {plan.highlight && (
                      <motion.div 
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 inset-x-0 h-[200px] bg-gradient-to-b from-blue-50/80 to-transparent pointer-events-none" 
                      />
                    )}

                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-8 relative z-10 transition-colors duration-300 ${plan.highlight ? 'bg-blue-600 text-white border-transparent shadow-md shadow-blue-500/20' : 'bg-slate-50 border-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200'}`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
                      {plan.name}
                    </h3>
                    
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-2xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-sm font-medium text-slate-500">{plan.period}</span>
                    </div>
                    
                    <p className="text-slate-500 leading-relaxed text-sm font-medium">
                      {plan.description}
                    </p>

                    <div className="mt-auto pt-8">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all shadow-sm ${plan.highlight ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 group-hover:border-blue-200 group-hover:text-blue-700'}`}
                      >
                        Zvolit {plan.name}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}