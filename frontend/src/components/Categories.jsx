import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const Categories = () => {
  const { t } = useLanguage();

  return (
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
            {t.categories.items.map((category, index) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                  <div className="flex items-center w-full">
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
                      <p className="text-slate-700 leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                        {t.contact.cta}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Categories;
