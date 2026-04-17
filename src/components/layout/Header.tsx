import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Služby', href: '/sluzby' },
    { label: 'Reference', href: '/reference' },
    { label: 'Ceník', href: '/cenik' },
    { label: 'Proces', href: '/proces' },
    { label: 'Blog', href: '/blog' },
    { label: 'O mně', href: '/o-mne' },
  ];

  const handleNavLinkClick = (href: string) => {
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      data-dark={isScrolled ? "true" : "false"}
      className={cn(
      "fixed top-0 z-[100] w-full transition-all duration-300",
      isScrolled ? "bg-brand-black/90 backdrop-blur-xl border-b border-brand-grey-dark py-3" : "bg-transparent py-6 mix-blend-difference"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between transition-all duration-300">
        <Link 
          to="/" 
          onClick={() => handleNavLinkClick('/')}
          className="transition-colors text-brand-grey-light hover:text-brand-white"
        >
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => handleNavLinkClick(item.href)}
              className={cn(
                "text-sm font-semibold uppercase tracking-widest transition-colors",
                location.pathname.startsWith(item.href) 
                  ? "text-brand-white" 
                  : "text-brand-grey-light hover:text-brand-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button 
            href="/kontakt" 
            variant="outline" 
            size="md" 
            className="transition-all duration-300 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black hover:shadow-[4px_4px_0px_0px_rgba(243,242,238,1)]"
          >
            Domluvit konzultaci
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 transition-colors text-brand-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-black border-b border-brand-grey-dark py-4 px-4 flex flex-col gap-4 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-base font-semibold uppercase tracking-widest text-brand-grey-light py-3 px-4 rounded-xl hover:bg-brand-grey-dark"
              onClick={() => handleNavLinkClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-brand-grey-dark px-4 pb-4">
            <Button 
              href="/kontakt" 
              variant="outline" 
              className="w-full border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black hover:shadow-[4px_4px_0px_0px_rgba(243,242,238,1)]" 
              onClick={() => handleNavLinkClick('/kontakt')}
            >
              Domluvit konzultaci
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
