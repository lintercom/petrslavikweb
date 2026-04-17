import { motion } from 'motion/react';
import { SpotlightHeading } from '@/components/ui/SpotlightHeading';
import { SectionSpotlight } from '@/components/ui/SectionSpotlight';
import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  description?: string;
  children?: ReactNode;
  size?: 'lg' | 'xl';
}

export function PageHero({ title, description, children, size = 'lg' }: PageHeroProps) {
  return (
    <section data-hero="true" style={{ isolation: 'isolate' }} className="relative pt-32 pb-20 px-4 bg-brand-black text-brand-white overflow-hidden">
      <SectionSpotlight />
      <div className="container mx-auto max-w-6xl relative z-10 mix-blend-difference">
        {children}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <SpotlightHeading text={title} size={size} />
        </motion.div>
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-grey-light max-w-3xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
