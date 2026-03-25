import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: "SaaS pro FinTech",
    category: "Webová Aplikace",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    year: "2024"
  },
  {
    title: "B2B Obchodní Portál",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    year: "2023"
  },
  {
    title: "Interní CRM Systém",
    category: "Dashboard",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    year: "2023"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-[#0D0D0D] text-[#F2F2F2] py-24 lg:py-32">
      
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        
        {/* Typographic Intro */}
        <div className="mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1] uppercase mb-6">
              Poslední <br /> <span className="text-[#A6A297]">Projekty.</span>
            </h2>
          </motion.div>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative z-10 flex flex-col gap-12 lg:gap-0 lg:block">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              // Each card sticks at a balanced offset
              className="lg:sticky w-full rounded-[2.5rem] overflow-hidden bg-[#121212] border border-[#737068]/30 shadow-[0_0_40px_rgba(0,0,0,0.4)] lg:mb-32 group hover:border-[#D9D4C5]/40 transition-colors duration-500"
              style={{ top: `calc(15vh + ${idx * 30}px)` }}
            >
              <div className="grid lg:grid-cols-12 min-h-[400px] lg:min-h-[550px]">
                
                {/* Content Side */}
                <div className="lg:col-span-5 p-10 lg:p-14 flex flex-col justify-between order-2 lg:order-1 bg-[#121212] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D9D4C5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-10">
                      <span className="px-4 py-2 rounded-full border border-[#737068]/50 bg-[#0D0D0D] text-[10px] font-bold uppercase tracking-widest text-[#D9D4C5] shadow-inner">
                        {project.category}
                      </span>
                      <span className="text-[#A6A297] text-sm font-mono font-bold tracking-wider">{project.year}</span>
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-black tracking-tight mb-6 text-[#F2F2F2] leading-[1.1] group-hover:text-[#D9D4C5] transition-colors duration-500">{project.title}</h3>
                    <p className="text-[#A6A297] font-medium text-lg leading-relaxed">
                      Vývoj na míru s primárním zaměřením na uživatelskou přívětivost, čistý kód a snadnou škálovatelnost.
                    </p>
                  </div>
                  
                  <div className="mt-12 lg:mt-0 relative z-10">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-full border border-[#737068]/50 flex items-center justify-center bg-[#0D0D0D] text-[#F2F2F2] group-hover:border-[#D9D4C5] group-hover:bg-[#D9D4C5]/40 group-hover:text-[#0D0D0D] group-hover:shadow-[0_0_20px_rgba(217,212,197,0.15)] transition-all duration-300"
                    >
                      <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </div>

                {/* Image Side */}
                <div className="lg:col-span-7 relative order-1 lg:order-2 h-[350px] lg:h-auto overflow-hidden">
                  <ImageWithFallback 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out grayscale-[0.4] group-hover:grayscale-0"
                  />
                  {/* Subtle overlay to blend with dark mode */}
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121212] via-[#121212]/40 to-transparent opacity-100 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}