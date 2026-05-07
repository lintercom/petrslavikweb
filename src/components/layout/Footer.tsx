import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-brand-white border-t-2 border-brand-black pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="mb-6 block">
              <Logo />
            </Link>
            <p className="text-brand-grey-dark text-sm mb-6 leading-relaxed max-w-xl">
              Weby pro firmy, které potřebují jasně vysvětlit nabídku, budovat důvěru a získávat relevantní poptávky.
            </p>
            <div className="space-y-3 text-sm text-brand-black leading-relaxed">
              <p className="font-semibold">Petr Slavík</p>
              <p>IČO: 05695961</p>
              <a
                href="mailto:petrslavikweb@gmail.com"
                className="block hover:text-brand-grey-dark transition-colors"
                data-gtm-event="email_click"
                data-gtm-target="petrslavikweb@gmail.com"
              >
                petrslavikweb@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-brand-black mb-6">Weby</h3>
            <ul className="space-y-4 text-sm text-brand-grey-dark">
              <li><Link to="/sluzby/tvorba-webu" className="hover:text-brand-black transition-colors">Tvorba webu</Link></li>
              <li><Link to="/sluzby" className="hover:text-brand-black transition-colors">Problémy, které řeším</Link></li>
              <li><Link to="/cenik" className="hover:text-brand-black transition-colors">Ceník webů</Link></li>
              <li><Link to="/reference" className="hover:text-brand-black transition-colors">Reference</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-brand-black mb-6">Informace</h3>
            <ul className="space-y-4 text-sm text-brand-grey-dark">
              <li><Link to="/proces" className="hover:text-brand-black transition-colors">Proces</Link></li>
              <li><Link to="/blog" className="hover:text-brand-black transition-colors">Blog</Link></li>
              <li><Link to="/o-mne" className="hover:text-brand-black transition-colors">O mně</Link></li>
              <li>
                <Link
                  to="/kontakt"
                  className="hover:text-brand-black transition-colors"
                  data-gtm-event="cta_contact_click"
                  data-gtm-target="/kontakt"
                >
                  Domluvit konzultaci
                </Link>
              </li>
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
          <p>© 2026 Petr Slavík</p>
          <div className="flex gap-6">
            <Link to="/ochrana-osobnich-udaju" className="hover:text-brand-black transition-colors">Ochrana osobních údajů</Link>
            <Link to="/cookies" className="hover:text-brand-black transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
