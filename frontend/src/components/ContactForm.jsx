import React, { useState } from 'react';
import { Send, HelpCircle, Upload, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hsn: '',
    tsn: '',
    message: '',
    files: []
  });
  const [showHsnHelp, setShowHsnHelp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [uploadError, setUploadError] = useState('');

  const texts = {
    de: {
      title: 'Anfrage senden',
      name: 'Name',
      email: 'E-Mail',
      emailRequired: 'E-Mail (Pflichtfeld)',
      phone: 'Telefon / WhatsApp',
      hsn: 'HSN (4-stellig)',
      tsn: 'TSN (3-stellig)',
      hsnLabel: 'HSN / TSN (Schlüsselnr.)',
      message: 'Ihre Anfrage',
      messagePlaceholder: 'Beschreiben Sie, welche Autoteile Sie benötigen...',
      attachment: 'Dateien hochladen (Fotos/PDF)',
      attachmentHelp: 'Max. 5 Dateien, je bis 10 MB',
      fileSizeError: 'Datei zu groß! Maximale Größe: 10 MB',
      tooManyFiles: 'Maximal 5 Dateien erlaubt',
      submit: 'Anfrage absenden',
      submitting: 'Wird gesendet...',
      success: 'Ihre Anfrage wurde erfolgreich versendet! Wir melden uns in Kürze.',
      error: 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
      hsnHelp: 'Die HSN/TSN-Nummer finden Sie in Ihrem Fahrzeugschein (Zulassungsbescheinigung Teil I).',
      required: 'Pflichtfeld'
    },
    en: {
      title: 'Send Inquiry',
      name: 'Name',
      email: 'Email',
      emailRequired: 'Email (Required)',
      phone: 'Phone / WhatsApp',
      hsn: 'HSN (4 digits)',
      tsn: 'TSN (3 digits)',
      hsnLabel: 'HSN / TSN (Key Number)',
      message: 'Your Inquiry',
      messagePlaceholder: 'Describe which auto parts you need...',
      attachment: 'Upload Files (Photos/PDF)',
      attachmentHelp: 'Max. 5 files, up to 10 MB each',
      fileSizeError: 'File too large! Maximum size: 10 MB',
      tooManyFiles: 'Maximum 5 files allowed',
      submit: 'Send Inquiry',
      submitting: 'Sending...',
      success: 'Your inquiry has been sent successfully! We will get back to you shortly.',
      error: 'Error sending. Please try again.',
      hsnHelp: 'You can find the HSN/TSN number in your vehicle registration document.',
      required: 'Required'
    },
    hu: {
      title: 'Érdeklődés küldése',
      name: 'Név',
      email: 'E-mail',
      emailRequired: 'E-mail (Kötelező)',
      phone: 'Telefon / WhatsApp',
      hsn: 'HSN (4 számjegy)',
      tsn: 'TSN (3 számjegy)',
      hsnLabel: 'HSN / TSN (Kulcsszám)',
      message: 'Érdeklődése',
      messagePlaceholder: 'Írja le, milyen autóalkatrészekre van szüksége...',
      attachment: 'Fájlok feltöltése (Fotók/PDF)',
      attachmentHelp: 'Max. 5 fájl, egyenként max. 10 MB',
      fileSizeError: 'A fájl túl nagy! Maximális méret: 10 MB',
      tooManyFiles: 'Maximálisan 5 fájl engedélyezett',
      submit: 'Érdeklődés küldése',
      submitting: 'Küldés...',
      success: 'Érdeklődését sikeresen elküldtük! Hamarosan válaszolunk.',
      error: 'Küldési hiba. Kérjük, próbálja újra.',
      hsnHelp: 'A HSN/TSN számot a jármű forgalmi engedélyében találja.',
      required: 'Kötelező'
    },
    pl: {
      title: 'Wyślij zapytanie',
      name: 'Imię',
      email: 'Email',
      emailRequired: 'Email (Wymagane)',
      phone: 'Telefon / WhatsApp',
      hsn: 'HSN (4 cyfry)',
      tsn: 'TSN (3 cyfry)',
      hsnLabel: 'HSN / TSN (Numer klucza)',
      message: 'Twoje zapytanie',
      messagePlaceholder: 'Opisz, jakich części samochodowych potrzebujesz...',
      attachment: 'Prześlij pliki (Zdjęcia/PDF)',
      attachmentHelp: 'Maks. 5 plików, do 10 MB każdy',
      fileSizeError: 'Plik zbyt duży! Maksymalny rozmiar: 10 MB',
      tooManyFiles: 'Maksymalnie 5 plików dozwolone',
      submit: 'Wyślij zapytanie',
      submitting: 'Wysyłanie...',
      success: 'Twoje zapytanie zostało wysłane pomyślnie! Wkrótce się odezwiemy.',
      error: 'Błąd wysyłania. Spróbuj ponownie.',
      hsnHelp: 'Numer HSN/TSN znajduje się w dowodzie rejestracyjnym pojazdu.',
      required: 'Wymagane'
    }
  };

  const t = texts[language] || texts.de;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // HSN: only numbers, max 4 digits
    if (name === 'hsn') {
      const filtered = value.replace(/\D/g, '').slice(0, 4);
      setFormData({ ...formData, [name]: filtered });
      return;
    }
    
    // TSN: alphanumeric, max 3 characters
    if (name === 'tsn') {
      const filtered = value.toUpperCase().slice(0, 3);
      setFormData({ ...formData, [name]: filtered });
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setUploadError('');
    
    // Check number of files
    if (formData.files.length + selectedFiles.length > 5) {
      setUploadError(t.tooManyFiles);
      return;
    }
    
    // Check file sizes (max 10MB per file)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    const validFiles = [];
    
    for (const file of selectedFiles) {
      if (file.size > maxSize) {
        setUploadError(`${file.name}: ${t.fileSizeError}`);
        return;
      }
      validFiles.push(file);
    }
    
    setFormData({ ...formData, files: [...formData.files, ...validFiles] });
  };

  const removeFile = (index) => {
    const newFiles = formData.files.filter((_, i) => i !== index);
    setFormData({ ...formData, files: newFiles });
    setUploadError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setUploadError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('hsn', formData.hsn);
      formDataToSend.append('tsn', formData.tsn);
      formDataToSend.append('message', formData.message);
      
      // Append all files
      formData.files.forEach((file, index) => {
        formDataToSend.append('files', file);
      });

      // Backend API endpoint
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          hsn: '',
          tsn: '',
          message: '',
          files: []
        });
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        setSubmitStatus('error');
        if (errorData.error) {
          setUploadError(errorData.error);
        }
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.title}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {t.name}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {t.emailRequired} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {t.phone}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* HSN / TSN with Help */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {t.hsnLabel} <span className="text-red-500">*</span>
            <button
              type="button"
              onClick={() => setShowHsnHelp(!showHsnHelp)}
              className="inline-flex items-center ml-2 text-blue-600 hover:text-blue-700"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </label>
          
          {showHsnHelp && (
            <div className="mb-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-slate-700 mb-3">{t.hsnHelp}</p>
              <img 
                src="https://customer-assets.emergentagent.com/job_autoberatung/artifacts/00f21zlu_kontaktfeld_hilfe_bildhsn_tsn_adac.webp"
                alt="HSN/TSN Beispiel"
                className="w-full max-w-md rounded-lg"
              />
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="hsn"
                value={formData.hsn}
                onChange={handleChange}
                placeholder="0000"
                maxLength="4"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-center font-mono text-lg"
              />
              <p className="text-xs text-slate-500 mt-1 text-center">{t.hsn}</p>
            </div>
            <div>
              <input
                type="text"
                name="tsn"
                value={formData.tsn}
                onChange={handleChange}
                placeholder="000"
                maxLength="3"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-center font-mono text-lg"
              />
              <p className="text-xs text-slate-500 mt-1 text-center">{t.tsn}</p>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {t.message}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder={t.messagePlaceholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            {t.attachment}
          </label>
          <p className="text-xs text-slate-500 mb-2">{t.attachmentHelp}</p>
          
          {/* Upload Button */}
          <div className="relative mb-3">
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              accept="image/*,.pdf"
              multiple
              className="hidden"
              disabled={formData.files.length >= 5}
            />
            <label
              htmlFor="file-upload"
              className={`flex items-center justify-center w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                formData.files.length >= 5
                  ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                  : 'border-gray-300 hover:border-blue-500'
              }`}
            >
              <Upload className="w-5 h-5 mr-2 text-slate-500" />
              <span className="text-slate-600">
                {formData.files.length >= 5 
                  ? t.tooManyFiles
                  : language === 'de' 
                    ? 'Dateien auswählen' 
                    : language === 'en'
                    ? 'Select files'
                    : language === 'hu'
                    ? 'Fájlok kiválasztása'
                    : 'Wybierz pliki'
                }
              </span>
            </label>
          </div>

          {/* Upload Error */}
          {uploadError && (
            <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
              {uploadError}
            </div>
          )}

          {/* File List */}
          {formData.files.length > 0 && (
            <div className="space-y-2">
              {formData.files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <Upload className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-700 truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="ml-3 text-red-500 hover:text-red-700 flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5 mr-3" />
          {isSubmitting ? t.submitting : t.submit}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-center">{t.success}</p>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-center">{t.error}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
