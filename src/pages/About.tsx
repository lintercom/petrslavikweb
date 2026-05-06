import { SEO } from '@/components/ui/SEO';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { BigFooterCTA } from '@/components/blocks/BigFooterCTA';
import { PageHero } from '@/components/layout/PageHero';

export function About() {
  return (
    <div className="flex flex-col bg-brand-white">
      <SEO
        title="O mně | Petr Slavík"
        description="Pomáhám klientům vytvářet weby, které mají jasný cíl, přivádí poptávky a dávají smysl i z pohledu návratnosti."
        path="/o-mne"
      />
      <PageHero
        title="O mně."
        description="Pomáhám klientům vytvářet weby, které mají jasný cíl a dávají smysl i z pohledu návratnosti."
      />

      <section className="py-24 px-4 bg-brand-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-6 text-brand-black">Web jako investice.</h2>
              <p className="text-lg text-brand-grey-dark leading-relaxed mb-6">
                Web pro mě není jen vizitka. Je to investice, která se musí vrátit. Má přivádět zákazníky, proměňovat je v poptávky a zapadat do fungování firmy. Proto neřeším jen design nebo technologie, ale celý proces od prvního kliknutí až po odeslanou poptávku.
              </p>
              <p className="text-lg text-brand-grey-dark leading-relaxed mb-6">
                Mám zkušenosti s vývojem i firemními systémy, takže při návrhu webu přemýšlím nad tím, jak bude vydělávat nebo šetřit čas. Řeším strukturu, obsah i funkce tak, aby dávaly smysl z pohledu byznysu, ne jen vzhledu.
              </p>
              <p className="text-lg text-brand-grey-dark leading-relaxed mb-6">
                Na začátku vždy řešíme, co má web konkrétně přinést. Kolik poptávek má generovat, jaký typ zákazníků má oslovit a jak má celý proces fungovat. Díky tomu nevznikají weby pro pocit, ale nástroje, které mají jasný účel a měřitelný výsledek.
              </p>
              <p className="text-lg text-brand-grey-dark leading-relaxed mb-6">
                Pracuji přímo s klienty, bez zbytečných mezikroků. Domlouváme se na jasném rozsahu, ceně i termínu. Říkám věci narovinu. Pokud něco nedává smysl z pohledu návratnosti nebo funkčnosti, vše vysvětlím a navrhnu alternativní postup.
              </p>
              <p className="text-lg text-brand-grey-dark leading-relaxed mb-6">
                Působím ve Zlínském kraji a spolupracuji s klienty po celé České republice.
              </p>
              <p className="text-lg text-brand-grey-dark leading-relaxed mb-10">
                Pokud chcete web, který nebude jen náklad, ale investice, která se vrací, ozvěte se mi.
              </p>
              <Button href="/kontakt" variant="primary" className="py-4 px-10 text-base uppercase tracking-widest font-extrabold">Domluvit konzultaci</Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="aspect-[4/5] bg-brand-black border-2 border-brand-black overflow-hidden relative">
              <div className="w-full h-full flex items-center justify-center text-brand-white">
                <span className="text-sm font-extrabold uppercase tracking-widest">Fotografie Petr Slavík</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-brand-white border-t-2 border-brand-black">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-16 text-brand-black">
            Proč pracovat se mnou.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Řeším návratnost", desc: "Web nemá být jen náklad. Už na začátku řešíme, co má přinést, jaké zákazníky má oslovit a jak má pomoci byznysu." },
              { title: "Myslím na celý proces", desc: "Neřeším jen jednotlivé obrazovky. Dívám se na cestu návštěvníka od prvního kliknutí až po odeslanou poptávku." },
              { title: "Spojuju web a systémy", desc: "Díky zkušenostem s vývojem a firemními systémy přemýšlím i nad tím, kde může web vydělávat nebo šetřit čas." },
              { title: "Mluvím narovinu", desc: "Domlouváme se na jasném rozsahu, ceně i termínu. Když něco nedává smysl, vysvětlím proč a navrhnu lepší postup." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-brand-white p-12 border-2 border-brand-black hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow] duration-300">
                <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-6 text-brand-black">{item.title}</h3>
                <p className="text-lg text-brand-grey-dark leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BigFooterCTA />
    </div>
  );
}
