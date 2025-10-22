import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { companyInfo } from '../mock';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const languages = [
    { code: 'de', name: 'Deutsch' },
    { code: 'en', name: 'English' },
    { code: 'hu', name: 'Magyar' },
    { code: 'pl', name: 'Polski' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src={companyInfo.logo}
                alt="Autoteile Flott Logo"
                className="h-12 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t.nav.start}
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t.nav.categories}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Right Section: Language & Call Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[130px] border-slate-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <a
              href="tel:+491744185651"
              className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.hero.cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-gray-100 transition-colors font-medium"
            >
              {t.nav.start}
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="block w-full text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-gray-100 transition-colors font-medium"
            >
              {t.nav.categories}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-gray-100 transition-colors font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-gray-100 transition-colors font-medium"
            >
              {t.nav.contact}
            </button>

            <div className="pt-3 border-t border-gray-200">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-full mb-3 border-slate-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <a
                href="tel:+491744185651"
                className="flex items-center justify-center w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t.hero.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
