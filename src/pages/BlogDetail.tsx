import { SEO } from '@/components/ui/SEO';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { ArrowLeft } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';

export function BlogDetail() {
  const { slug } = useParams();

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title={slug ? `${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Petr Slavík` : 'Článek | Petr Slavík'}
        description="Zajímavé čtení o webovém vývoji a technologiích."
        path={`/blog/${slug ?? ''}`}
      />
      <PageHero title={slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + "."}>
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-grey-light hover:text-brand-white transition-colors mb-12 font-semibold uppercase tracking-widest text-sm">
          <ArrowLeft className="w-4 h-4" /> Zpět na blog
        </Link>
      </PageHero>

      {/* Content Section */}
      <section className="py-32 px-4 bg-brand-white">
        <div className="container mx-auto max-w-3xl">
          <div className="aspect-video bg-brand-grey-light/10 rounded-[3rem] mb-24 overflow-hidden border border-brand-grey-light/20">
            {/* Blog Image Placeholder */}
          </div>

          <div className="prose prose-2xl max-w-none text-brand-grey-medium leading-relaxed">
            <p className="text-3xl text-brand-black font-medium mb-12">
              Ukázkový obsah článku — praktické rady a zkušenosti z reálných projektů.
            </p>
            <p>
              Výběr platformy, napojení na účetnictví, rychlost webu. Hezký vzhled dnes nestačí — web musí být funkční a zapadat do vašich procesů.
            </p>
            <p>
              V článku projdeme to, na co si dát pozor při plánování dalšího digitálního projektu.
            </p>
          </div>

          <div className="mt-32 p-16 bg-gradient-to-b from-brand-white to-brand-grey-light/10 rounded-[3rem] border border-brand-grey-light/10 text-center">
            <h3 className="text-4xl font-semibold tracking-tighter text-brand-black mb-8">Řešíte totéž?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/kontakt" className="bg-brand-black text-brand-white px-12 py-6 rounded-full font-semibold uppercase tracking-widest hover:bg-brand-grey-dark transition-colors">
                Domluvit konzultaci
              </Link>
              <Link to="/cenik" className="border-2 border-brand-black text-brand-black px-12 py-6 rounded-full font-semibold uppercase tracking-widest hover:bg-brand-black hover:text-brand-white transition-colors">
                Zobrazit ceník
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
