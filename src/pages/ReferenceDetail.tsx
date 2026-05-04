import { SEO } from '@/components/ui/SEO';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Button } from '@/components/ui/Button';
import { getProjectType } from '@/data/projects';

export function ReferenceDetail() {
  const { slug } = useParams();
  const project = getProjectType(slug);

  useEffect(() => {
    trackEvent('case_study_open', { slug });
  }, [slug]);

  if (!project) {
    return (
      <div className="flex flex-col bg-brand-white">
        <SEO title="Scénář nenalezen | Petr Slavík" description="Požadovaný scénář nebyl nalezen." path={`/reference/${slug ?? ''}`} />
        <PageHero title="Detail nenalezen.">
          <Link to="/reference" className="inline-flex items-center gap-2 text-brand-grey-light hover:text-brand-white transition-colors mb-10 font-semibold uppercase tracking-widest text-sm">
            <ArrowLeft className="w-4 h-4" /> Zpět na scénáře
          </Link>
        </PageHero>
        <section className="py-16 md:py-24 px-4 bg-brand-white">
          <div className="container mx-auto max-w-3xl">
            <p className="text-lg text-brand-grey-dark leading-relaxed mb-8">Tento detail neexistuje nebo byl přesunut.</p>
            <Button href="/reference" variant="primary">Zpět na scénáře</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title={`${project.title} | Petr Slavík`}
        description={project.desc}
        path={`/reference/${project.slug}`}
      />
      <PageHero title={`${project.title}.`} description={project.desc}>
        <Link to="/reference" className="inline-flex items-center gap-2 text-brand-grey-light hover:text-brand-white transition-colors mb-10 font-semibold uppercase tracking-widest text-sm">
          <ArrowLeft className="w-4 h-4" /> Zpět na scénáře
        </Link>
      </PageHero>

      <section className="py-16 md:py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 mb-16">
            <div className="border-2 border-brand-black bg-brand-white p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(18,18,18,1)]">
              <div className="text-xs font-extrabold uppercase tracking-widest text-brand-grey-dark mb-4">{project.category}</div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-brand-black mb-6">
                Modelový scénář
              </h2>
              <p className="text-base md:text-lg text-brand-grey-dark leading-relaxed">
                Nejde o vymyšlenou případovou studii. Detail ukazuje typický problém firemního webu a způsob, jak bych nad ním přemýšlel při návrhu.
              </p>
            </div>

            <div className="space-y-8">
              {[
                ['Výchozí situace', project.sections.situation],
                ['Cíl řešení', project.sections.goal],
                ['Navržené řešení', project.sections.solution],
              ].map(([title, text]) => (
                <div key={title}>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight text-brand-black mb-3">{title}</h3>
                  <p className="text-lg text-brand-grey-dark leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['Co web řeší', project.sections.capabilities],
              ['Možná rozšíření', project.sections.extensions],
              ['Technický základ', project.sections.technologies],
            ].map(([title, items]) => (
              <div key={title as string} className="border-2 border-brand-black bg-brand-white p-6">
                <h3 className="text-xl font-extrabold uppercase tracking-tight text-brand-black mb-6">{title as string}</h3>
                <ul className="space-y-3">
                  {(items as string[]).map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-medium text-brand-grey-dark">
                      <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-brand-black" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="primary" size="xl">
              Probrat můj web
            </Button>
            <Button href="/reference" variant="outline" size="xl">
              Zpět na scénáře
            </Button>
          </div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
