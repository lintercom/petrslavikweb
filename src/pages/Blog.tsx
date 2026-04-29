import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';
import { blogPosts } from '@/data/blog';

export function Blog() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="Blog | Petr Slavík"
        description="Články o tvorbě webů na míru, e-shopech, vlastním CMS, SEO, integracích, platebních branách, automatizaci a online systémech."
        path="/blog"
      />
      <PageHero 
        title="Blog."
        description="Praktické články o webech, e-shopech, SEO, vlastním CMS, integracích, automatizaci a technologiích pro firmy."
      />

      {/* Blog Grid */}
      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
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
                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      <div className="flex justify-between text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark">
                        <span>{post.category}</span>
                        <span>{post.readingTime}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-2/3 bg-brand-black"></div>
                        <div className="h-2 w-1/2 bg-brand-black"></div>
                        <div className="h-2 w-5/6 bg-brand-grey-light"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-brand-black opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-3">{post.category} · {post.date}</div>
                  <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500 leading-tight text-brand-black">
                    {post.title}
                  </h3>
                  <p className="text-base text-brand-grey-dark leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
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
