import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NeuralNetworkBackground } from './NeuralNetworkBackground';
import { NeuralNetworkFragment } from './NeuralNetworkFragment';

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#F2F2F2]">
      
      {/* Neural Network Background */}
      <NeuralNetworkBackground />
      
      {/* Additional small fragment for visual continuity */}
      <NeuralNetworkFragment 
        particleCount={5}
        connectionDistance={80}
        particleSpeed={0.07}
        opacity={0.2}
        className="bottom-32 right-1/4 w-[200px] h-[200px] z-0"
      />
      
      {/* Subtle organic light bleed */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1], 
          opacity: [0.3, 0.4, 0.3],
          rotate: [0, 5, 0]
        }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#D9D4C5]/40 rounded-full blur-[100px] pointer-events-none -z-10" 
      />

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-12 pt-32 pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Typographic Spine */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-20">

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[6.5rem] font-black tracking-tighter leading-[0.9] text-[#0D0D0D] flex flex-col items-start space-y-2 lg:space-y-4"
            >
              <div className="relative inline-block ml-6 md:ml-8">
                <span className="absolute inset-0 bg-[#D9D4C5]/40 -z-10 -left-6 -right-6 -top-2 -bottom-2 md:-left-8 md:-right-8 md:-top-3 md:-bottom-3"></span>
                <span className="relative z-10">Weby a e-shopy,</span>
              </div>
              <div className="relative inline-block ml-6 md:ml-8">
                <span className="absolute inset-0 bg-[#D9D4C5]/40 -z-10 -left-6 -right-6 -top-2 -bottom-2 md:-left-8 md:-right-8 md:-top-3 md:-bottom-3"></span>
                <span className="relative z-10">které dávají</span>
              </div>
              <div className="relative inline-block ml-6 md:ml-8 mb-4">
                <span className="absolute inset-0 bg-[#D9D4C5]/40 -z-10 -left-6 -right-6 -top-2 -bottom-2 md:-left-8 md:-right-8 md:-top-3 md:-bottom-3"></span>
                <span className="relative z-10">smysl<span className="text-[#737068]">.</span></span>
              </div>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-12 max-w-lg lg:ml-8"
            >
              <p className="text-lg text-[#0D0D0D]/80 font-medium leading-relaxed mb-10">
                Jsem Petr Slavík. Frontend architekt a nezávislý vývojář. Spojuji technickou hloubku s citem pro prémiový design a tvořím platformy pro ambiciózní projekty.
              </p>
              
              <div className="flex items-center gap-6">
                <motion.a 
                  href="#kontakt" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[#0D0D0D] transition-colors"
                >
                  <span className="w-12 h-12 rounded-full border border-[#D9D4C5] flex items-center justify-center group-hover:border-[#0D0D0D] group-hover:bg-[#0D0D0D] group-hover:text-[#F2F2F2] group-hover:shadow-[0_0_20px_rgba(13,13,13,0.15)] transition-all duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="group-hover:text-[#0D0D0D]/70 transition-colors duration-300">Spolupracovat</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Asymmetrical Visual Composition */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            
            {/* Main structural image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full max-w-sm rounded-3xl overflow-hidden bg-[#D9D4C5]/40 border border-[#D9D4C5] shadow-xl shadow-[#0D0D0D]/5"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=800" 
                alt="Petr Slavík"
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0D0D0D]/80" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[#F2F2F2] text-base font-medium leading-snug">
                  Nezávislý <br/> <span className="text-[#D9D4C5] font-bold">Frontend Vývojář.</span>
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}