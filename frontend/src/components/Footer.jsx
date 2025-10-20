import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { companyInfo } from '../mock';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info with Logo */}
          <div>
            <img
              src={companyInfo.logo}
              alt="Autoteile Flott Logo"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
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
            <div className="space-y-3 text-slate-400">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:+491744185651" className="hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors break-all">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p>{companyInfo.address.street}</p>
                  <p>{companyInfo.address.zipCity}</p>
                </div>
              </div>
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
