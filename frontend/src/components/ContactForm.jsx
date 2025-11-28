import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Upload, X, Car, MapPin, Clock } from 'lucide-react';

const ContactForm = ({ language = 'de' }) => {
  const [showHsnHelp, setShowHsnHelp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const translations = {
    de: {
      title: 'Jetzt Anfrage stellen',
      subtitle: 'Nennen Sie uns Ihre Fahrzeugdaten und erhalten Sie umgehend ein Angebot.',
      name: 'Ihr Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefon / WhatsApp (optional)',
      hsn: 'HSN (Herstellerschlüsselnummer)',
      tsn: 'TSN (Typschlüsselnummer)',
      hsnHelp: 'Die HSN und TSN finden Sie in Ihrem Fahrzeugschein (Zulassungsbescheinigung Teil I) in den Feldern 2.1 und 2.2',
      message: 'Ihre Nachricht (optional)',
      messagePlaceholder: 'Beschreiben Sie, welche Teile Sie benötigen...',
      attachment: 'Dateien hochladen (Fotos/PDF)',
      attachmentHelp: 'Optional: Fotos oder Dokumente hochladen',
      submit: 'Anfrage absenden',
      submitting: 'Wird gesendet...',
      successTitle: 'Anfrage erfolgreich versendet!',
      successMessage: 'Wir melden uns in Kürze.',
      errorTitle: 'Fehler beim Senden',
      errorMessage: 'Bitte versuchen Sie es erneut.',
    },
    en: {
      title: 'Request Now',
      subtitle: 'Provide your vehicle data and receive an offer immediately.',
      name: 'Your Name',
      email: 'Email Address',
      phone: 'Phone / WhatsApp (optional)',
      hsn: 'HSN (Manufacturer Key Number)',
      tsn: 'TSN (Type Key Number)',
      hsnHelp: 'You can find the HSN and TSN in your vehicle registration document (Part I) in fields 2.1 and 2.2',
      message: 'Your Message (optional)',
      messagePlaceholder: 'Describe which parts you need...',
      attachment: 'Upload Files (Photos/PDF)',
      attachmentHelp: 'Optional: Upload photos or documents',
      submit: 'Send Request',
      submitting: 'Sending...',
      successTitle: 'Request sent successfully!',
      successMessage: 'We will contact you shortly.',
      errorTitle: 'Error sending',
      errorMessage: 'Please try again.',
    },
    hu: {
      title: 'Kérdezzen most',
      subtitle: 'Adja meg járműve adatait és azonnal ajánlatot kap.',
      name: 'Az Ön neve',
      email: 'E-mail cím',
      phone: 'Telefon / WhatsApp (opcionális)',
      hsn: 'HSN (Gyártói kulcsszám)',
      tsn: 'TSN (Típus kulcsszám)',
      hsnHelp: 'A HSN-t és TSN-t a járműnyilvántartási okmányban (I. rész) találja a 2.1 és 2.2 mezőkben',
      message: 'Az Ön üzenete (opcionális)',
      messagePlaceholder: 'Írja le, milyen alkatrészekre van szüksége...',
      attachment: 'Fájlok feltöltése (Fotók/PDF)',
      attachmentHelp: 'Opcionális: Fotók vagy dokumentumok feltöltése',
      submit: 'Kérés elküldése',
      submitting: 'Küldés...',
      successTitle: 'Kérés sikeresen elküldve!',
      successMessage: 'Hamarosan felvesszük Önnel a kapcsolatot.',
      errorTitle: 'Hiba a küldés során',
      errorMessage: 'Kérjük, próbálja újra.',
    },
    pl: {
      title: 'Zapytaj teraz',
      subtitle: 'Podaj dane swojego pojazdu i natychmiast otrzymaj ofertę.',
      name: 'Twoje imię',
      email: 'Adres e-mail',
      phone: 'Telefon / WhatsApp (opcjonalnie)',
      hsn: 'HSN (Numer klucza producenta)',
      tsn: 'TSN (Numer klucza typu)',
      hsnHelp: 'HSN i TSN znajdziesz w dowodzie rejestracyjnym pojazdu (część I) w polach 2.1 i 2.2',
      message: 'Twoja wiadomość (opcjonalnie)',
      messagePlaceholder: 'Opisz, jakie części potrzebujesz...',
      attachment: 'Prześlij pliki (Zdjęcia/PDF)',
      attachmentHelp: 'Opcjonalnie: Prześlij zdjęcia lub dokumenty',
      submit: 'Wyślij zapytanie',
      submitting: 'Wysyłanie...',
      successTitle: 'Zapytanie wysłane pomyślnie!',
      successMessage: 'Skontaktujemy się wkrótce.',
      errorTitle: 'Błąd podczas wysyłania',
      errorMessage: 'Spróbuj ponownie.',
    }
  };

  const t = translations[language] || translations.de;

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Let the form submit naturally to Formspree
    // Don't prevent default - Formspree needs the native form submission
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <form 
            action="https://formspree.io/f/xldpqybz" 
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.name} *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.email} *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.phone}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* HSN */}
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.hsn} *
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowHsnHelp(!showHsnHelp);
                    }}
                    className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors text-xs font-bold"
                    data-testid="hsn-info-button"
                  >
                    i
                  </button>
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="hsn"
                    required
                    maxLength="4"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
                  />
                </div>
                {showHsnHelp && (
                  <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-900 mb-3">{t.hsnHelp}</p>
                    <img 
                      src="https://customer-assets.emergentagent.com/job_autoteile-form/artifacts/zcwi9x29_kontaktfeld_hilfe_bildhsn_tsn_adac.webp"
                      alt="HSN und TSN im Fahrzeugschein"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>

              {/* TSN */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.tsn} *
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="tsn"
                    required
                    maxLength="3"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t.message}
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <textarea
                  name="message"
                  rows="4"
                  placeholder={t.messagePlaceholder}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t.attachment}
              </label>
              <p className="text-xs text-slate-500 mb-2">{t.attachmentHelp}</p>
              <div className="relative">
                <input
                  type="file"
                  name="file"
                  accept="image/*,.pdf"
                  multiple
                  className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-900">{t.successTitle}</h4>
                <p className="text-green-700">{t.successMessage}</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-900">{t.errorTitle}</h4>
                <p className="text-red-700">{t.errorMessage}</p>
              </div>
            )}
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
