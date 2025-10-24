import React, { useState } from 'react';
import { MessageCircle, ChevronRight } from 'lucide-react';
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
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const visibleCategories = isMobile ? t.categories.items.slice(0, visibleCount) : t.categories.items;
  const hasMoreToShow = isMobile && visibleCount < t.categories.items.length;

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

          <div className="max-w-7xl mx-auto">
            {/* Mobile View: Accordion */}
            {isMobile ? (
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
                      <div className="flex flex-col gap-4">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <p className="text-slate-700 leading-relaxed">
                          {category.description}
                        </p>
                        <button
                          onClick={() => handleReadMore(category.id)}
                          className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all"
                        >
                          {t.categories.readMore}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              /* Desktop View: Grid 3x4 */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.categories.items.map((category) => (
                  <div
                    key={category.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:scale-105 cursor-pointer group"
                    onClick={() => handleReadMore(category.id)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {category.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

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
