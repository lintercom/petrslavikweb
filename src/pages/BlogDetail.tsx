import { SEO } from '@/components/ui/SEO';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { ArrowLeft } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Button } from '@/components/ui/Button';
import { getBlogPost } from '@/data/blog';
import { articleSchema, breadcrumbSchema } from '@/lib/seo';

export function BlogDetail() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="flex flex-col bg-brand-white">
        <SEO title="Článek nenalezen | Petr Slavík" description="Požadovaný článek nebyl nalezen." path={`/blog/${slug ?? ''}`} />
        <PageHero title="Článek nenalezen.">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-grey-light hover:text-brand-white transition-colors mb-10 font-semibold uppercase tracking-widest text-sm">
            <ArrowLeft className="w-4 h-4" /> Zpět na blog
          </Link>
        </PageHero>
        <section className="py-16 md:py-24 px-4 bg-brand-white">
          <div className="container mx-auto max-w-3xl">
            <p className="text-lg text-brand-grey-dark leading-relaxed mb-8">Tento článek neexistuje nebo byl přesunut.</p>
            <Button href="/blog" variant="primary">Zpět na blog</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title={`${post.title} | Petr Slavík`}
        description={post.seoDescription}
        path={`/blog/${post.slug}`}
        type="article"
        structuredData={[
          articleSchema({
            title: post.title,
            description: post.seoDescription,
            path: `/blog/${post.slug}`,
            datePublished: post.datePublished,
          }),
          breadcrumbSchema([
            { name: 'Úvod', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <PageHero title={`${post.title}.`}>
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-grey-light hover:text-brand-white transition-colors mb-10 font-semibold uppercase tracking-widest text-sm">
          <ArrowLeft className="w-4 h-4" /> Zpět na blog
        </Link>
      </PageHero>

      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-10 flex flex-wrap gap-3 text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark">
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime} čtení</span>
          </div>

          <div className="aspect-video bg-brand-white border-2 border-brand-black mb-12 overflow-hidden shadow-[6px_6px_0px_0px_rgba(18,18,18,1)] relative">
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-3">
                <div className="h-20 border-2 border-brand-black"></div>
                <div className="h-20 border-2 border-brand-black bg-brand-black"></div>
                <div className="h-20 border-2 border-brand-black"></div>
              </div>
              <div className="space-y-3">
                <div className="h-3 w-5/6 bg-brand-black"></div>
                <div className="h-3 w-2/3 bg-brand-grey-light"></div>
              </div>
            </div>
          </div>

          <article className="max-w-none text-brand-grey-dark leading-relaxed">
            <p className="text-xl md:text-2xl text-brand-black font-medium mb-12 leading-relaxed">
              {post.excerpt}
            </p>
            {post.sections.map((section) => (
              <section key={section.heading} className="mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-brand-black mb-6">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed mb-5">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3 mt-6">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-base md:text-lg font-medium text-brand-black">
                        <span className="mt-2 h-2 w-2 shrink-0 bg-brand-black rounded-full"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

          <div className="mt-16 border-t-2 border-brand-black pt-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-black hover:text-brand-grey-dark transition-colors font-extrabold uppercase tracking-widest text-sm">
              <ArrowLeft className="w-4 h-4" /> Zpět na blog
            </Link>
          </div>

          <div className="mt-16 p-8 md:p-12 bg-brand-white border-2 border-brand-black shadow-[6px_6px_0px_0px_rgba(18,18,18,1)] text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-brand-black mb-6">Řešíte podobný web?</h3>
            <p className="text-base md:text-lg text-brand-grey-dark leading-relaxed max-w-xl mx-auto mb-8">
              Napište mi, co dnes na webu nefunguje. Navrhnu další postup a realistický rozsah.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/kontakt" variant="primary" size="xl">
                Domluvit konzultaci
              </Button>
              <Button href="/cenik" variant="outline" size="xl">
                Zobrazit ceník
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
