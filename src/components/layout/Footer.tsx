import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-brand-white border-t-2 border-brand-black pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="mb-6 block">
              <Logo />
            </Link>
            <p className="text-brand-grey-dark text-sm mb-8 leading-relaxed">
              Osobní přístup freelancera. Systémový proces agentury. Weby, e-shopy a aplikace, které skutečně pracují pro váš byznys.
            </p>
            <div className="text-sm text-brand-black font-medium space-y-2">
              <a href="mailto:petr@petrslavik.cz" className="block hover:text-brand-grey-dark transition-colors">petr@petrslavik.cz</a>
              <a href="tel:+420123456789" className="block hover:text-brand-grey-dark transition-colors">+420 123 456 789</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-brand-black mb-6">Služby</h3>
            <ul className="space-y-4 text-sm text-brand-grey-dark">
              <li><Link to="/sluzby/webove-stranky" className="hover:text-brand-black transition-colors">Webové stránky</Link></li>
              <li><Link to="/sluzby/e-shop" className="hover:text-brand-black transition-colors">E-shopy na míru</Link></li>
              <li><Link to="/sluzby/webove-aplikace" className="hover:text-brand-black transition-colors">Webové aplikace</Link></li>
              <li><Link to="/cenik" className="hover:text-brand-black transition-colors">Ceník služeb</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-brand-black mb-6">Platformy & Integrace</h3>
            <ul className="space-y-4 text-sm text-brand-grey-dark">
              <li><Link to="/platformy/shoptet" className="hover:text-brand-black transition-colors">Shoptet</Link></li>
              <li><Link to="/platformy/upgates" className="hover:text-brand-black transition-colors">Upgates</Link></li>
              <li><Link to="/platformy/woocommerce" className="hover:text-brand-black transition-colors">WooCommerce</Link></li>
              <li><Link to="/integrace/pohoda" className="hover:text-brand-black transition-colors">Napojení na POHODA</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-brand-black mb-6">O mně</h3>
            <ul className="space-y-4 text-sm text-brand-grey-dark">
              <li><Link to="/o-mne" className="hover:text-brand-black transition-colors">Kdo jsem</Link></li>
              <li><Link to="/proces" className="hover:text-brand-black transition-colors">Jak pracuji</Link></li>
              <li><Link to="/reference" className="hover:text-brand-black transition-colors">Reference</Link></li>
              <li><Link to="/blog" className="hover:text-brand-black transition-colors">Blog</Link></li>
              <li><Link to="/kontakt" className="hover:text-brand-black transition-colors">Kontakt</Link></li>
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
