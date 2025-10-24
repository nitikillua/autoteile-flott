import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { heroImage } from '../mock';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToCategories = () => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Auto parts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 mb-10 animate-fade-in-delay">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              {t.hero.cta}
            </button>
            <button
              onClick={scrollToCategories}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-800 text-lg font-semibold rounded-lg border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-105 shadow-md"
            >
              {t.nav.categories}
              <ArrowDown className="w-5 h-5 ml-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-600" />
      </div>
    </section>
  );
};

export default Hero;
