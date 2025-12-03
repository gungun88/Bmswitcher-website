import React from 'react';
import { MousePointerClick, ShieldCheck, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 bg-white relative">
       {/* Decorative diagonal divider */}
       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('feat.title')}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('feat.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <FeatureCard 
            title={t('feat.card1.title')}
            description={t('feat.card1.desc')}
            Icon={MousePointerClick}
            colorClass="bg-blue-500"
            illustration={
              <div className="relative w-full h-full flex items-center justify-center bg-blue-50/50">
                 <div className="w-3/4 h-20 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col p-2 space-y-2 absolute top-6 hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                    <div className="w-2/3 h-2 bg-gray-100 rounded-full"></div>
                    <div className="flex justify-between items-center mt-2">
                       <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                       <div className="w-16 h-8 bg-blue-500 rounded-md shadow-sm"></div>
                    </div>
                 </div>
                 {/* Floating badge */}
                 <div className="absolute -right-2 top-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-md shadow-lg transform rotate-12">
                   Fast
                 </div>
              </div>
            }
          />

          <FeatureCard 
            title={t('feat.card2.title')}
            description={t('feat.card2.desc')}
            Icon={Zap}
            colorClass="bg-purple-500"
            illustration={
               <div className="relative w-full h-full flex items-center justify-center bg-purple-50/50">
                <div className="flex items-center justify-center">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-green-500" />
                        </div>
                        <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
                    </div>
                </div>
                 {/* Floating badge */}
                 <div className="absolute -left-2 bottom-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-md shadow-lg transform -rotate-6">
                   Simple
                 </div>
              </div>
            }
          />

          <FeatureCard 
            title={t('feat.card3.title')}
            description={t('feat.card3.desc')}
            Icon={ShieldCheck}
            colorClass="bg-orange-500"
            illustration={
              <div className="relative w-full h-full flex items-center justify-center bg-orange-50/50 pt-6">
                  <div className="w-24 h-full bg-white border-t-4 border-x border-gray-200 rounded-t-xl shadow-sm flex flex-col items-center pt-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                        <ShieldCheck className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="w-16 h-2 bg-gray-100 rounded-full"></div>
                  </div>
                   {/* Floating badge */}
                 <div className="absolute right-8 top-8 bg-orange-500 text-white text-xs px-2 py-1 rounded-md shadow-lg transform rotate-3">
                   Secure
                 </div>
              </div>
            }
          />

        </div>
      </div>
    </section>
  );
};

export default Features;