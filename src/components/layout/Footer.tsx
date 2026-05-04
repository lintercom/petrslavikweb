import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-brand-white border-t-2 border-brand-black pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="mb-6 block">
              <Logo />
            </Link>
            <p className="text-brand-grey-dark text-sm mb-6 leading-relaxed">
              Weby pro firmy, které potřebují jasně vysvětlit nabídku, budovat důvěru a získávat relevantní poptávky.
            </p>
            <div className="text-sm text-brand-black font-medium space-y-2">
              <a href="mailto:petrslavikweb@gmail.com" className="block hover:text-brand-grey-dark transition-colors">petrslavikweb@gmail.com</a>
              <Link to="/kontakt" className="block hover:text-brand-grey-dark transition-colors">Probrat web</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-brand-black mb-6">Weby</h3>
            <ul className="space-y-4 text-sm text-brand-grey-dark">
              <li><Link to="/sluzby/webove-stranky" className="hover:text-brand-black transition-colors">Tvorba webu</Link></li>
              <li><Link to="/sluzby" className="hover:text-brand-black transition-colors">Problémy, které řeším</Link></li>
              <li><Link to="/cenik" className="hover:text-brand-black transition-colors">Ceník webů</Link></li>
              <li><Link to="/reference" className="hover:text-brand-black transition-colors">Scénáře webů</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-brand-black mb-6">Informace</h3>
            <ul className="space-y-4 text-sm text-brand-grey-dark">
              <li><Link to="/proces" className="hover:text-brand-black transition-colors">Proces</Link></li>
              <li><Link to="/blog" className="hover:text-brand-black transition-colors">Blog</Link></li>
              <li><Link to="/o-mne" className="hover:text-brand-black transition-colors">O mně</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-brand-black mb-6">Kontakt</h3>
            <ul className="space-y-4 text-sm text-brand-grey-dark">
              <li><a href="mailto:petrslavikweb@gmail.com" className="hover:text-brand-black transition-colors">petrslavikweb@gmail.com</a></li>
              <li><Link to="/kontakt" className="hover:text-brand-black transition-colors">Probrat problém webu</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-brand-black mb-6">Dokumenty</h3>
            <ul className="space-y-4 text-sm text-brand-grey-dark">
              <li><Link to="/ochrana-osobnich-udaju" className="hover:text-brand-black transition-colors">Ochrana osobních údajů</Link></li>
              <li><Link to="/cookies" className="hover:text-brand-black transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-grey-light/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-grey-dark">
          <p>© {new Date().getFullYear()} Petr Slavík. Všechna práva vyhrazena.</p>
          <div className="flex gap-6">
            <Link to="/ochrana-osobnich-udaju" className="hover:text-brand-black transition-colors">Ochrana osobních údajů</Link>
            <Link to="/cookies" className="hover:text-brand-black transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
