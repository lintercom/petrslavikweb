import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Služby', href: '#sluzby' },
    { label: 'Reference', href: '#portfolio' },
    { label: 'Proces', href: '#proces' },
    { label: 'O mně', href: '#o-nas' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#F2F2F2]/80 backdrop-blur-xl border-b border-[#D9D4C5]/50 shadow-sm' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <nav className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Logo scrolled={scrolled} />

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-bold uppercase tracking-widest text-[#0D0D0D]/70 hover:text-[#0D0D0D] transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0D0D0D] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left rounded-full"></span>
              </a>
            ))}
            <motion.a 
              href="#kontakt" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ml-4 px-6 py-2.5 rounded-full font-bold uppercase tracking-widest text-xs bg-[#0D0D0D] text-[#F2F2F2] shadow-lg shadow-[#0D0D0D]/10 hover:shadow-[0_0_20px_rgba(13,13,13,0.2)] hover:bg-[#0D0D0D]/80 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Poptat projekt</span>
              {/* Subtle button glow */}
              <div className="absolute inset-0 bg-[#D9D4C5]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#0D0D0D]/70 hover:text-[#0D0D0D] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#F2F2F2]/95 backdrop-blur-lg border-b border-[#D9D4C5]/50 p-6 space-y-4 shadow-xl absolute w-full"
          >
            {menuItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="block w-full text-left px-4 py-3 text-[#0D0D0D]/70 font-bold uppercase tracking-widest text-sm hover:text-[#0D0D0D] hover:bg-[#D9D4C5]/40 rounded-xl transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => scrollToSection('kontakt')}
              className="block w-full text-center px-4 py-4 bg-[#0D0D0D] text-[#F2F2F2] font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-[#0D0D0D]/80 transition-colors mt-6 shadow-md"
            >
              Poptat projekt
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}