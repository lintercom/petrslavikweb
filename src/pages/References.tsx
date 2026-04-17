import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { TrendingUp } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';

export function References() {
  const cases = [
    {
      slug: 'pravni-kancelar-novak',
      title: 'Právní kancelář Novák',
      category: 'Web pro službu',
      desc: 'Kompletní redesign webu s důrazem na generování poptávek a SEO.',
      metric: '+150 % nárůst poptávek'
    },
    {
      slug: 'kava-premium',
      title: 'Káva Premium',
      category: 'E-shop & Integrace',
      desc: 'Migrace na Shoptet a plná automatizace účetnictví s POHODA.',
      metric: 'Ušetřeno 20 hodin týdně'
    },
    {
      slug: 'interni-crm',
      title: 'Interní CRM systém',
      category: 'Webová aplikace',
      desc: 'Vývoj aplikace na míru pro správu klientů a projektů stavební firmy.',
      metric: 'Digitalizace 100 % procesů'
    }
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Reference | Petr Slavík"
        description="Ukázky mých prací a úspěšných projektů."
        path="/reference"
      />
      <PageHero 
        title="Projekty."
        description="Projekty, které přinášejí reálné výsledky. Podívejte se, jak pomáhám klientům růst skrze technologie a design."
      />

      {/* References Grid */}
      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {cases.map((c, i) => (
              <motion.div 
                key={c.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <Link to={`/reference/${c.slug}`} className="flex flex-col h-full">
                  <div className="aspect-[4/5] bg-brand-white border-2 border-brand-black mb-6 overflow-hidden relative shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow] duration-300">
                    <div className="absolute inset-0 bg-brand-black opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-4">{c.category}</div>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tighter mb-4 group-hover:translate-x-2 transition-transform duration-500 text-brand-black">{c.title}</h3>
                  <p className="text-base text-brand-grey-dark mb-6 leading-relaxed flex-grow">{c.desc}</p>
                  <div className="text-lg font-extrabold uppercase text-brand-black flex items-center gap-2">
                    {c.metric} <TrendingUp className="w-5 h-5" />
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
