import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Služby', id: 'sluzby' },
    { label: 'Reference', id: 'portfolio' },
    { label: 'Proces', id: 'proces' },
    { label: 'O mně', id: 'o-nas' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 md:pt-6 pointer-events-none">
      <nav
        className={`max-w-[90rem] mx-auto pointer-events-auto rounded-[1.75rem] border transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-[#9D9C99]/25 shadow-[0_12px_40px_rgba(92,88,80,0.08)]'
            : 'bg-white/90 backdrop-blur-sm border-[#9D9C99]/15 shadow-[0_8px_30px_rgba(92,88,80,0.06)]'
        }`}
      >
        <div className="flex justify-between items-center h-[4.25rem] px-5 md:px-8">
          <Logo scrolled={scrolled} />

          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7E7B76] hover:text-[#5C5850] transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ml-2 px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] bg-[#DEEA55] text-[#5C5850] shadow-sm hover:shadow-md transition-shadow"
            >
              Kontakt
            </motion.a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-[#DEEA55] text-[#5C5850] shadow-sm"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          >
            {isMenuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 mx-auto max-w-[90rem] pointer-events-auto rounded-2xl border border-[#9D9C99]/20 bg-white/98 backdrop-blur-lg p-5 shadow-xl"
          >
            {menuItems.map((item, i) => (
              <motion.button
                key={item.label}
                type="button"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3.5 text-[#7E7B76] font-semibold uppercase tracking-[0.18em] text-xs hover:text-[#5C5850] hover:bg-[#F8F7F5] rounded-xl transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href="#kontakt"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center mt-3 px-4 py-4 rounded-xl bg-[#DEEA55] text-[#5C5850] font-bold uppercase tracking-[0.18em] text-xs"
            >
              Kontakt
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
