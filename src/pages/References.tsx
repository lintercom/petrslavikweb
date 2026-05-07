import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { projectTypes } from '@/data/projects';

export function References() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Reference webů | Petr Slavík"
        description="Ukázky webů, které jsem navrhl a vytvořil pro klienty včetně rezervačních systémů a dlouhodobé správy."
        path="/reference"
      />
      <PageHero
        title="Reference webů."
        description="Vybrané projekty, kde web nefunguje jen jako prezentace, ale řeší konkrétní provozní nebo obchodní problém."
      />

      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group flex h-full flex-col"
              >
                <Link to={`/reference/${project.slug}`} className="flex h-full flex-col">
                  <div className="aspect-[16/8] bg-brand-white border-2 border-brand-black mb-6 overflow-hidden relative shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow] duration-300 flex items-center justify-center px-8 py-6">
                    <img
                      src={project.logo}
                      alt={project.logoAlt}
                      loading="lazy"
                      decoding="async"
                      className="max-h-36 md:max-h-44 w-full object-contain"
                    />
                  </div>

                  <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 text-brand-black">
                    {project.title}
                  </h3>
                  <p className="text-base text-brand-grey-dark mb-6 leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-extrabold uppercase tracking-widest text-brand-black flex items-center gap-2">
                      Zobrazit detail <TrendingUp className="w-5 h-5" />
                    </div>
                    {project.websiteUrl && (
                      <span className="text-sm font-extrabold uppercase tracking-widest text-brand-grey-dark flex items-center gap-2">
                        Živý web <ArrowUpRight className="w-4 h-4" />
                      </span>
                    )}
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
