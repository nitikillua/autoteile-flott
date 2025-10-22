import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const cookieTexts = {
  de: {
    title: 'Cookie-Hinweis',
    message: 'Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. Durch die weitere Nutzung dieser Website stimmen Sie der Verwendung von Cookies zu.',
    accept: 'Alle akzeptieren',
    decline: 'Ablehnen',
    settings: 'Einstellungen',
    learnMore: 'Mehr erfahren'
  },
  en: {
    title: 'Cookie Notice',
    message: 'We use cookies to provide you with the best experience on our website. By continuing to use this website, you consent to the use of cookies.',
    accept: 'Accept All',
    decline: 'Decline',
    settings: 'Settings',
    learnMore: 'Learn More'
  },
  hu: {
    title: 'Cookie értesítés',
    message: 'Sütiket használunk, hogy a legjobb élményt nyújtsuk weboldalunkon. A weboldal további használatával Ön beleegyezik a sütik használatába.',
    accept: 'Összes elfogadása',
    decline: 'Elutasítás',
    settings: 'Beállítások',
    learnMore: 'További információ'
  },
  pl: {
    title: 'Informacja o cookies',
    message: 'Używamy plików cookie, aby zapewnić Ci najlepsze wrażenia na naszej stronie internetowej. Kontynuując korzystanie z tej witryny, wyrażasz zgodę na używanie plików cookie.',
    accept: 'Zaakceptuj wszystkie',
    decline: 'Odrzuć',
    settings: 'Ustawienia',
    learnMore: 'Dowiedz się więcej'
  }
};

const CookieBanner = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const t = cookieTexts[language] || cookieTexts.de;

  useEffect(() => {
    // Check if user has already accepted/declined cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a small delay
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-slate-900 border-t-2 border-blue-600 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Icon & Message */}
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-shrink-0 mt-1">
                <Cookie className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">{t.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {t.message}{' '}
                  <a 
                    href="/datenschutz" 
                    className="text-blue-400 hover:text-blue-300 underline transition-colors"
                  >
                    {t.learnMore}
                  </a>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-slate-300 hover:text-white transition-colors font-medium text-sm"
              >
                {t.decline}
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 font-semibold text-sm shadow-lg"
              >
                {t.accept}
              </button>
              <button
                onClick={handleDecline}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
