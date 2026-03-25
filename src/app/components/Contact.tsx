import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NeuralNetworkFragment } from './NeuralNetworkFragment';

export function Contact() {
  return (
    <section id="kontakt" className="w-full relative py-20 lg:py-32 bg-[#F2F2F2] z-20">
      {/* Neural Network Fragments */}
      <NeuralNetworkFragment 
        particleCount={14}
        connectionDistance={150}
        particleSpeed={0.1}
        opacity={0.32}
        className="top-0 left-1/4 w-[450px] h-[450px] z-0"
      />
      <NeuralNetworkFragment 
        particleCount={7}
        connectionDistance={110}
        particleSpeed={0.12}
        opacity={0.26}
        className="bottom-20 right-0 w-[320px] h-[320px] z-0"
      />
      
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        
        <div className="relative rounded-[2rem] bg-[#0D0D0D] text-[#F2F2F2] overflow-hidden shadow-2xl">
          
          {/* Abstract geometric blur inside container */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#737068]/20 to-[#A6A297]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="grid lg:grid-cols-2">
            
            {/* Left Image Column - Asymmetrical Cut */}
            <div className="hidden lg:block relative bg-[#0D0D0D] border-r border-[#737068]/30">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
                alt="Workspace"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
              
              <div className="absolute bottom-16 left-16 right-16">
                <div className="text-4xl lg:text-5xl font-black tracking-tighter leading-none text-[#F2F2F2]/20 uppercase">
                  Pojďme <br/> Do Toho.
                </div>
              </div>
            </div>

            {/* Right Form Column - Balanced Sizing */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-12 lg:p-16 relative z-10 flex flex-col justify-center min-h-[500px]"
            >
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter leading-[1] mb-4 uppercase text-[#F2F2F2]">
                Napište <br/> <span className="text-[#D9D4C5]">Mi.</span>
              </h2>
              <p className="text-[#A6A297] text-sm sm:text-base font-medium mb-10 max-w-sm">
                Máte nápad na nový projekt nebo potřebujete posílit svůj vývojářský tým? Zanechte mi zprávu.
              </p>

              <form className="space-y-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    required 
                    className="w-full bg-transparent border-b border-[#737068] py-3 text-base sm:text-lg font-medium text-[#F2F2F2] focus:outline-none focus:border-[#D9D4C5] transition-colors peer placeholder-transparent"
                    placeholder="Jméno"
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-[#A6A297] font-bold uppercase tracking-widest text-[10px] transition-all peer-focus:-top-2 peer-focus:text-[9px] peer-focus:text-[#F2F2F2] peer-valid:-top-2 peer-valid:text-[9px] peer-valid:text-[#D9D4C5]">
                    Vaše Jméno
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    required 
                    className="w-full bg-transparent border-b border-[#737068] py-3 text-base sm:text-lg font-medium text-[#F2F2F2] focus:outline-none focus:border-[#D9D4C5] transition-colors peer placeholder-transparent"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-[#A6A297] font-bold uppercase tracking-widest text-[10px] transition-all peer-focus:-top-2 peer-focus:text-[9px] peer-focus:text-[#F2F2F2] peer-valid:-top-2 peer-valid:text-[9px] peer-valid:text-[#D9D4C5]">
                    Váš E-mail
                  </label>
                </div>

                <div className="relative group">
                  <textarea 
                    id="message"
                    required 
                    rows={1}
                    className="w-full bg-transparent border-b border-[#737068] py-3 text-base sm:text-lg font-medium text-[#F2F2F2] focus:outline-none focus:border-[#D9D4C5] transition-colors peer placeholder-transparent resize-none overflow-hidden"
                    placeholder="Popis"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-3 text-[#A6A297] font-bold uppercase tracking-widest text-[10px] transition-all peer-focus:-top-2 peer-focus:text-[9px] peer-focus:text-[#F2F2F2] peer-valid:-top-2 peer-valid:text-[9px] peer-valid:text-[#D9D4C5]">
                    O čem se pobavíme?
                  </label>
                </div>

                <div className="pt-6">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F2F2F2] transition-colors"
                  >
                    <span className="w-12 h-12 rounded-full border border-[#737068] flex items-center justify-center group-hover:border-[#D9D4C5] group-hover:bg-[#D9D4C5]/40 group-hover:shadow-[0_0_20px_rgba(217,212,197,0.15)] transition-all duration-300">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="group-hover:text-[#D9D4C5] transition-colors duration-300">Odeslat Zprávu</span>
                  </motion.button>
                </div>
              </form>

            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}