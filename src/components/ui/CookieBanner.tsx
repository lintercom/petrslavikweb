import { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 max-w-3xl">
          <p>
            Tento web používá cookies k zajištění základní funkčnosti a analýze návštěvnosti. 
            Více informací najdete na stránce <Link to="/cookies" className="text-blue-600 hover:underline">Zásady cookies</Link>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0 w-full md:w-auto">
          <Button onClick={acceptNecessary} variant="outline" size="sm" className="flex-1 md:flex-none">
            Jen nezbytné
          </Button>
          <Button onClick={acceptAll} variant="primary" size="sm" className="flex-1 md:flex-none">
            Přijmout vše
          </Button>
        </div>
      </div>
    </div>
  );
}
