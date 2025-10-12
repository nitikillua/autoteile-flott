import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-slate-700 mb-12">
            {t.contact.subtitle}
          </p>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-200">
            <div className="flex flex-col items-center space-y-8">
              {/* Phone Section */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm text-slate-600 mb-2">Rufen Sie uns an</p>
                <a
                  href="tel:+491744185651"
                  className="text-3xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {t.contact.phone}
                </a>
              </div>

              {/* CTA Button */}
              <a
                href="tel:+491744185651"
                className="inline-flex items-center justify-center px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-3" />
                {t.contact.cta}
              </a>

              {/* Location */}
              <div className="flex items-center text-slate-600 pt-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{t.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 italic">
              "Professionelle Beratung • Geprüfte Qualität • Garantiert passend"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
