import { motion } from 'motion/react';

export function LogoGrid() {
  const logos = [
    { name: 'Client 1', url: 'https://picsum.photos/seed/logo1/200/100?grayscale' },
    { name: 'Client 2', url: 'https://picsum.photos/seed/logo2/200/100?grayscale' },
    { name: 'Client 3', url: 'https://picsum.photos/seed/logo3/200/100?grayscale' },
    { name: 'Client 4', url: 'https://picsum.photos/seed/logo4/200/100?grayscale' },
    { name: 'Client 5', url: 'https://picsum.photos/seed/logo5/200/100?grayscale' },
    { name: 'Client 6', url: 'https://picsum.photos/seed/logo6/200/100?grayscale' },
    { name: 'Client 7', url: 'https://picsum.photos/seed/logo7/200/100?grayscale' },
    { name: 'Client 8', url: 'https://picsum.photos/seed/logo8/200/100?grayscale' },
  ];

  return (
    <section className="py-24 bg-brand-white">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-500"
        >
          {logos.map((logo, i) => (
            <div key={i} className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={logo.url} 
                alt={logo.name} 
                width={128}
                height={64}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
