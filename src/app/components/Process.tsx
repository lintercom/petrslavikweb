import { motion } from 'motion/react';
import { NeuralNetworkFragment } from './NeuralNetworkFragment';

const processes = [
  { num: "01", title: "Pochopení Zadání", detail: "Společně probereme vaše cíle a vymyslíme nejlepší technologické řešení." },
  { num: "02", title: "Návrh Řešení", detail: "Vytvořím strukturu, vyberu stack a připravím technický plán." },
  { num: "03", title: "Kódování", detail: "Transparentní a agilní vývoj. Jsem s vámi v neustálém kontaktu." },
  { num: "04", title: "Spuštění", detail: "Testování, optimalizace výkonu a nasazení na ostrou doménu." }
];

export function Process() {
  return (
    <section id="proces" className="py-24 lg:py-32 w-full relative bg-[#F2F2F2] overflow-hidden">
      {/* Neural Network Fragments */}
      <NeuralNetworkFragment 
        particleCount={10}
        connectionDistance={130}
        particleSpeed={0.08}
        opacity={0.28}
        className="top-20 left-0 w-[350px] h-[350px] z-0"
      />
      <NeuralNetworkFragment 
        particleCount={6}
        connectionDistance={90}
        particleSpeed={0.15}
        opacity={0.22}
        className="bottom-0 right-20 w-[250px] h-[250px] z-0"
      />
      
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-[1] text-[#0D0D0D] uppercase mb-6">
              Můj <br/> <span className="text-[#737068]">Postup.</span>
            </h2>
            <p className="text-lg text-[#0D0D0D]/80 font-medium">
              Žádná složitá byrokracie. Nabízím přímou komunikaci a efektivní postup vývoje od prvního hovoru po úspěšný launch.
            </p>
          </motion.div>
        </div>

        {/* Minimalist Grid Execution */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#D9D4C5]">
          {processes.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative py-10 lg:py-12 pr-6 ${idx !== processes.length -1 ? 'border-b md:border-b-0 md:border-r border-[#D9D4C5]' : 'border-b md:border-b-0 border-[#D9D4C5]'} lg:pl-6 ${idx === 0 ? 'lg:pl-0' : ''} group`}
            >
              {/* Scaled down offset number */}
              <div className="text-5xl lg:text-6xl font-black text-[#A6A297] leading-none mb-8 -ml-1 tracking-tighter group-hover:text-[#737068] group-hover:-translate-y-2 transition-all duration-500 ease-out">
                {step.num}
              </div>
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-3 tracking-tight group-hover:text-[#0D0D0D]/70 transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-[#0D0D0D]/70 font-medium leading-relaxed text-sm">
                  {step.detail}
                </p>
              </div>

              {/* Decorative node connecting to the line */}
              <div className="absolute top-[-4px] left-0 w-2 h-2 rounded-full bg-[#0D0D0D] ring-2 ring-[#F2F2F2] group-hover:scale-150 group-hover:bg-[#737068] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}