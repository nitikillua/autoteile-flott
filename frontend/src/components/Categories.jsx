import React, { useState } from 'react';
import { Phone, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import CategoryDetailModal from './CategoryDetailModal';

const Categories = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleReadMore = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsModalOpen(true);
  };

  const handleShowMore = () => {
    if (visibleCount === 3) {
      setVisibleCount(6);
    } else if (visibleCount === 6) {
      setVisibleCount(12);
    }
  };

  const visibleCategories = t.categories.items.slice(0, visibleCount);
  const hasMoreToShow = visibleCount < t.categories.items.length;

  return (
    <>
      <section id="categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t.categories.title}
            </h2>
            <p className="text-lg text-slate-600">
              {t.categories.subtitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {visibleCategories.map((category) => (
                <AccordionItem
                  key={category.id}
                  value={category.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group [&>svg]:hidden">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-lg overflow-hidden mr-5 flex-shrink-0">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-left">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-slate-700 leading-relaxed mb-6">
                          {category.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={() => handleReadMore(category.id)}
                            className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-slate-800 font-medium rounded-lg border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-105"
                          >
                            {t.categories.readMore}
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </button>
                          <a
                            href="tel:+491744185651"
                            className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            {t.categories.callNow}
                          </a>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {hasMoreToShow && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleShowMore}
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-md"
                >
                  {visibleCount === 3 ? (t.categories.showMore || 'Mehr anzeigen') : (t.categories.showAll || 'Alle anzeigen')}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <CategoryDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categoryId={selectedCategory}
      />
    </>
  );
};

export default Categories;
