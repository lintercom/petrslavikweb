import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { featuredReferences } from '@/data/projects';

export function LogoGrid() {
  if (!featuredReferences.length) {
    return null;
  }

  return (
    <section className="py-20 md:py-24 bg-brand-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-grey-dark mb-4">
            Vybrané reference
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-brand-black">
            Weby, které už fungují v praxi.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {featuredReferences.map((reference, index) => (
            <motion.div
              key={reference.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Link
                to={`/reference/${reference.slug}`}
                aria-label={`Zobrazit referenci ${reference.title}`}
                className="group flex h-28 md:h-32 items-center justify-center border-2 border-brand-black bg-brand-white px-6 py-5 shadow-[3px_3px_0px_0px_rgba(18,18,18,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(18,18,18,1)] transition-[transform,box-shadow]"
              >
                {reference.logo ? (
                  <img
                    src={reference.logo}
                    alt={reference.logoAlt ?? reference.title}
                    loading="lazy"
                    decoding="async"
                    className="max-h-20 w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <span className="text-sm font-extrabold uppercase tracking-[0.25em] text-brand-black">
                    {reference.title}
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
