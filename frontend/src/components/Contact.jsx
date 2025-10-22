import React from 'react';
import { MessageCircle, MapPin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  const whatsappLink = `https://wa.me/491744185651?text=${encodeURIComponent(t.contact.whatsappMessage || 'Hallo, ich interessiere mich für Autoteile.')}`;

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Email Section */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-slate-600 mb-2">E-Mail</p>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors block break-all"
                >
                  {t.contact.email}
                </a>
              </div>

              {/* Location Section */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-slate-600 mb-2">Standort</p>
                <p className="text-lg font-bold text-slate-900">
                  {t.contact.location}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              {t.contact.cta}
            </a>
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
