import React from 'react';
import { CheckCircle2, Clock, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { aboutTranslations } from '../translations/about';

const About = () => {
  const { language, t } = useLanguage();
  const aboutText = aboutTranslations[language] || aboutTranslations.de;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center">
            {aboutText.title}
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              {aboutText.text1}
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-10">
              {aboutText.text2}
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {aboutText.feature1Title}
              </h3>
              <p className="text-slate-600">
                {aboutText.feature1Text}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {aboutText.feature2Title}
              </h3>
              <p className="text-slate-600">
                {aboutText.feature2Text}
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {aboutText.feature3Title}
              </h3>
              <p className="text-slate-600">
                {aboutText.feature3Text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
