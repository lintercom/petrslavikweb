import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { TrendingUp } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { projectTypes } from '@/data/projects';

export function References() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Modelové scénáře webů | Petr Slavík"
        description="Ukázky typických problémů, které může řešit firemní web: nejasná nabídka, málo poptávek, zastaralý web nebo složitá správa obsahu."
        path="/reference"
      />
      <PageHero
        title="Scénáře webů."
        description="Nejsou to falešné reference. Jsou to typické situace, podle kterých poznáte, jestli podobný problém řeší i váš web."
      />

      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <Link to={`/reference/${c.slug}`} className="flex flex-col h-full">
                  <div className="aspect-[4/3] bg-brand-white border-2 border-brand-black mb-6 overflow-hidden relative shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow] duration-300">
                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      <div className="h-8 w-24 bg-brand-black"></div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 border-2 border-brand-black"></div>
                        <div className="h-12 border-2 border-brand-black bg-brand-black"></div>
                        <div className="h-12 border-2 border-brand-black"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-brand-black opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-4">{c.category}</div>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 text-brand-black">{c.title}</h3>
                  <p className="text-base text-brand-grey-dark mb-6 leading-relaxed flex-grow">{c.desc}</p>
                  <div className="text-sm font-extrabold uppercase tracking-widest text-brand-black flex items-center gap-2">
                    Zobrazit detail <TrendingUp className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
