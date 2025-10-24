import React from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { useLanguage } from '../contexts/LanguageContext';
import { categoryDetails } from '../mockExtended';
import { getManufacturersByCategory } from '../manufacturerLogos';

const CategoryDetailModal = ({ isOpen, onClose, categoryId }) => {
  const { language, t } = useLanguage();

  if (!categoryId) return null;

  const details = categoryDetails[language]?.[categoryId];
  const manufacturers = getManufacturersByCategory(categoryId);

  if (!details) return null;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      onClose(); // Close modal first
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900 pr-8">
            {details.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          <p className="text-lg text-slate-700 font-medium mb-6">
            {details.intro}
          </p>

          <div 
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: details.content }}
          />

          {/* Keywords Section */}
          {details.keywords && details.keywords.length > 0 && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-semibold text-slate-700 mb-3">
                Wichtige Komponenten:
              </h4>
              <div className="flex flex-wrap gap-2">
                {details.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-slate-700"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Manufacturer Logos Section */}
          {manufacturers && manufacturers.length > 0 && (
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
              <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Unsere Partner-Hersteller
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {manufacturers.map((manufacturer, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                    title={manufacturer.name}
                  >
                    <img
                      src={manufacturer.logo}
                      alt={manufacturer.name}
                      className="max-w-full max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="text-xs text-slate-600 font-medium">${manufacturer.name}</span>`;
                      }}
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 text-center mt-4">
                Wir arbeiten mit führenden Marken zusammen, um Ihnen höchste Qualität zu garantieren.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <p className="text-slate-700 mb-4">
                Haben Sie Fragen zu dieser Kategorie? Kontaktieren Sie uns!
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-md"
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryDetailModal;
