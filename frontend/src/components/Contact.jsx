import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from './ContactForm';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {t.contact.title}
            </h2>
            <p className="text-xl text-slate-700">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                {/* Email Section */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-600 mb-1">E-Mail</p>
                    <a
                      href={`mailto:${t.contact.email}`}
                      className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors break-all"
                    >
                      {t.contact.email}
                    </a>
                  </div>
                </div>

                {/* Location Section */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-600 mb-1">Standort</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {t.contact.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
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
