import { SEO } from '@/components/ui/SEO';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { ArrowLeft, TrendingUp, Quote } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';

export function ReferenceDetail() {
  const { slug } = useParams();

  useEffect(() => {
    trackEvent('case_study_open', { slug });
  }, [slug]);

  // Demo data
  const data = {
    title: slug === 'kava-premium' ? 'Káva Premium' : 'Projekt ' + slug,
    category: slug === 'kava-premium' ? 'E-shop & Integrace' : 'Webová aplikace',
    problem: 'Zastaralý systém, ruční přepis faktur a chyby v expedici.',
    solution: 'Migrace na Shoptet, API můstek do POHODY a redesign nákupního procesu.',
    tech: 'Shoptet, Node.js, POHODA mServer',
    results: 'Úspora 20 hodin týdně. Obrat o 30 % výš díky lepšímu UX.',
    testimonial: '"Konečně neřešíme papíry a můžeme prodávat." — Jan Novák, CEO'
  };

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title={slug ? `${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Petr Slavík` : 'Detail reference | Petr Slavík'}
        description="Případová studie úspěšného projektu."
        path={`/reference/${slug ?? ''}`}
      />
      <PageHero title={data.title + "."}>
        <Link to="/reference" className="inline-flex items-center gap-2 text-brand-grey-light hover:text-brand-white transition-colors mb-12 font-semibold uppercase tracking-widest text-sm">
          <ArrowLeft className="w-4 h-4" /> Zpět na projekty
        </Link>
        <div className="text-sm font-semibold uppercase tracking-widest text-brand-grey-light mb-6">{data.category}</div>
      </PageHero>

      {/* Content Section */}
      <section className="py-32 px-4 bg-brand-white">
        <div className="container mx-auto max-w-4xl">
          <div className="aspect-video bg-brand-grey-light/10 rounded-[3rem] mb-24 overflow-hidden border border-brand-grey-light/20">
            {/* Project Image Placeholder */}
          </div>

          <div className="grid grid-cols-1 gap-24">
            <div>
              <h2 className="text-4xl font-semibold tracking-tighter mb-8 text-brand-black">Výzva.</h2>
              <p className="text-2xl text-brand-grey-medium leading-relaxed">{data.problem}</p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold tracking-tighter mb-8 text-brand-black">Řešení.</h2>
              <p className="text-2xl text-brand-grey-medium leading-relaxed">{data.solution}</p>
            </div>

            <div className="bg-gradient-to-b from-brand-white to-brand-grey-light/10 p-16 rounded-[3rem] border border-brand-grey-light/10">
              <h2 className="text-4xl font-semibold tracking-tighter mb-8 text-brand-black">Výsledky.</h2>
              <div className="text-3xl font-semibold text-brand-black flex items-center gap-4">
                {data.results} <TrendingUp className="w-8 h-8" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-semibold tracking-tighter mb-8 text-brand-black">Technologie.</h2>
              <div className="flex flex-wrap gap-4">
                {data.tech.split(', ').map((t, i) => (
                  <span key={i} className="px-8 py-4 bg-brand-grey-light/10 rounded-full font-semibold uppercase tracking-widest text-sm text-brand-grey-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <blockquote className="relative p-16 bg-brand-black text-brand-white rounded-[3rem] overflow-hidden">
              <Quote className="absolute top-8 left-8 w-24 h-24 text-brand-grey-dark -z-0 opacity-50" />
              <p className="text-3xl font-medium leading-relaxed relative z-10 mb-8">
                {data.testimonial}
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
