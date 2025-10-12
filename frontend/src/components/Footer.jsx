import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Autoteile <span className="text-blue-400">Flott</span>
            </h3>
            <p className="text-slate-400">
              Ihr Partner für Autoteile in Feldkirchen und Umgebung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Schnelllinks</h4>
            <ul className="space-y-2">
              {t.footer.links.map((link, index) => (
                <li key={index}>
                  <button className="text-slate-400 hover:text-white transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-slate-400">
              <p>Telefon: +49 174 4185651</p>
              <p>Feldkirchen, Bayern</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
