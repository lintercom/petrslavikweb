import { motion } from 'motion/react';
import { Database, Layout, Webhook, Fingerprint } from 'lucide-react';
import { NeuralNetworkFragment } from './NeuralNetworkFragment';

export function Services() {
  return (
    <section id="sluzby" className="py-24 lg:py-32 w-full relative z-10 bg-[#F2F2F2]">
      {/* Neural Network Fragments */}
      <NeuralNetworkFragment 
        particleCount={12}
        connectionDistance={140}
        particleSpeed={0.12}
        opacity={0.3}
        className="top-0 right-0 w-[400px] h-[400px] z-0"
      />
      <NeuralNetworkFragment 
        particleCount={8}
        connectionDistance={100}
        particleSpeed={0.1}
        opacity={0.25}
        className="bottom-10 left-10 w-[300px] h-[300px] z-0"
      />
      
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          {/* Left Column: Sticky Title & Description */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1] text-[#0D0D0D] mb-6 uppercase">
                Moje <br/> <span className="text-[#737068]">Specializace.</span>
              </h2>
              <p className="text-lg text-[#0D0D0D]/80 font-medium leading-relaxed mb-10 max-w-md">
                Jako nezávislý vývojář dokážu pokrýt celý životní cyklus aplikace. Od prvních návrhů architektury až po produkční nasazení.
              </p>
              
              <div className="hidden lg:block w-full h-[1px] bg-gradient-to-r from-[#D9D4C5] to-transparent" />
            </motion.div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="lg:col-span-7 relative">
            
            {/* Structural Background Element spanning right side */}
            <div className="absolute top-0 right-0 w-[90%] h-full bg-[#D9D4C5]/40 rounded-[2.5rem] -z-10 hidden md:block" />

            <div className="grid sm:grid-cols-2 gap-6 relative z-10 lg:py-8 lg:px-8">
              
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#F2F2F2] p-8 rounded-[1.5rem] border border-[#D9D4C5] shadow-sm hover:shadow-xl hover:shadow-[#0D0D0D]/5 transition-shadow duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] flex items-center justify-center mb-6 text-[#F2F2F2]">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight text-[#0D0D0D]">Frontend Vývoj</h3>
                <p className="text-[#0D0D0D]/70 font-medium leading-relaxed text-sm">
                  Píšu moderní a čitelný kód v Reactu a Next.js. Mým cílem jsou plynulé animace, čisté komponenty a špičkový výkon.
                </p>
              </motion.div>

              {/* Card 2: Shifted Down Slightly */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="bg-[#0D0D0D] p-8 rounded-[1.5rem] border border-[#737068]/30 shadow-lg sm:mt-12 text-[#F2F2F2] hover:shadow-2xl hover:shadow-[#0D0D0D]/40 transition-shadow duration-500 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#737068]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#F2F2F2]/10 backdrop-blur-md border border-[#F2F2F2]/20 flex items-center justify-center mb-6">
                    <Database className="w-5 h-5 text-[#D9D4C5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">Fullstack Přesah</h3>
                  <p className="text-[#A6A297] font-medium leading-relaxed text-sm">
                    Dokážu postavit celou aplikaci včetně databáze a logiky. Využívám moderní nástroje jako Supabase nebo Firebase.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="bg-[#F2F2F2] p-8 rounded-[1.5rem] border border-[#D9D4C5] shadow-sm hover:shadow-xl hover:shadow-[#0D0D0D]/5 transition-shadow duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D9D4C5]/40 flex items-center justify-center mb-6 text-[#0D0D0D]">
                  <Webhook className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight text-[#0D0D0D]">API Napojení</h3>
                <p className="text-[#0D0D0D]/70 font-medium leading-relaxed text-sm">
                  Mám bohaté zkušenosti s integrací platebních bran, headless CMS a externích služeb pro maximalizaci hodnoty vašeho projektu.
                </p>
              </motion.div>

              {/* Card 4: Shifted Down Slightly */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="bg-[#737068] p-8 rounded-[1.5rem] border border-[#A6A297]/30 shadow-md sm:mt-12 text-[#F2F2F2] hover:shadow-2xl hover:shadow-[#0D0D0D]/20 transition-shadow duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F2F2F2]/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <Fingerprint className="w-5 h-5 text-[#F2F2F2]" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">Konzultace</h3>
                <p className="text-[#F2F2F2]/90 font-medium leading-relaxed text-sm">
                  Pomáhám startupům a firmám zvolit správný technologický stack a navrhnout architekturu před startem vývoje.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}