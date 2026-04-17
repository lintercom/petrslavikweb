import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';

export function Blog() {
  const posts = [
    { slug: 'kolik-stoji-web-v-roce-2026', title: 'Kolik stojí web v roce 2026', category: 'Byznys' },
    { slug: 'shoptet-vs-upgates-vs-woocommerce', title: 'Shoptet vs Upgates vs WooCommerce vs Shopify', category: 'E-commerce' },
    { slug: 'napojeni-eshopu-na-pohoda', title: 'Napojení e‑shopu na POHODA: scénáře', category: 'Integrace' },
    { slug: 'core-web-vitals-lcp-inp-cls', title: 'Core Web Vitals: LCP, INP, CLS', category: 'Technologie' },
    { slug: 'jak-pripravit-podklady-pro-web', title: 'Jak připravit podklady pro web', category: 'Proces' },
    { slug: 'jak-merit-leady-ga4', title: 'Jak měřit leady: GA4 a funnel', category: 'Analytika' },
  ];

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Blog | Petr Slavík"
        description="Články o tvorbě webů, e-commerce a technologiích."
        path="/blog"
      />
      <PageHero 
        title="Blog."
        description="Články o vývoji webů, e-commerce platformách a automatizaci procesů. Sdílím své know-how a zkušenosti z praxe."
      />

      {/* Blog Grid */}
      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.div 
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                  <div className="aspect-[16/10] bg-brand-white border-2 border-brand-black mb-6 overflow-hidden relative shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow] duration-300">
                    <div className="absolute inset-0 bg-brand-black opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-4">{post.category}</div>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-500 leading-tight text-brand-black flex-grow">
                    {post.title}
                  </h3>
                  <div className="text-sm font-extrabold uppercase tracking-widest text-brand-black flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Číst článek <span className="text-xl">→</span>
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
