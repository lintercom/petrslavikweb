import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'SaaS pro FinTech',
    category: 'Webová aplikace',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    year: '2024',
    tint: 'bg-[#FBFAD6]/80',
  },
  {
    title: 'B2B obchodní portál',
    category: 'E-commerce',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    year: '2023',
    tint: 'bg-white',
  },
  {
    title: 'Interní CRM',
    category: 'Dashboard',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    year: '2023',
    tint: 'bg-[#F8F7F5]',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-white py-20 lg:py-28 border-y border-[#9D9C99]/10">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.35em] text-[#9D9C99] mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#5C5850] leading-[1.05]">
            Vybrané projekty, kde technologie slouží lidem i číslům.
          </h2>
          <p className="mt-5 text-[#7E7B76] font-medium leading-relaxed max-w-xl">
            Od návrhu komponent po produkční nasazení — důraz na rychlost, jasné
            rozhraní a udržitelný kód.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`group grid lg:grid-cols-12 gap-0 rounded-[2rem] overflow-hidden border border-[#9D9C99]/15 ${project.tint} shadow-[0_16px_50px_rgba(92,88,80,0.06)] hover:border-[#9C9F5B]/30 transition-colors`}
            >
              <div className="lg:col-span-5 p-8 md:p-10 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1.5 rounded-full border border-[#9D9C99]/30 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7E7B76] bg-white/60">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#9D9C99]">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black tracking-tight text-[#5C5850] leading-tight group-hover:text-[#7F7560] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-[#7E7B76] font-medium leading-relaxed">
                    Vývoj na míru s důrazem na UX, čistý kód a škálovatelnost.
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-8 w-12 h-12 rounded-full border border-[#9D9C99]/35 flex items-center justify-center text-[#5C5850] hover:bg-[#DEEA55] hover:border-[#DEEA55] transition-all"
                  aria-label={`Detail: ${project.title}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              <div className="lg:col-span-7 relative order-1 lg:order-2 h-[260px] md:h-[340px] lg:h-auto min-h-[260px]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#F8F7F5]/90 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
