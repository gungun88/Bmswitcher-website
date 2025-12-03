import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { useLanguage } from '../contexts/LanguageContext';
import { useRouter } from '../contexts/RouterContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const { navigate } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${t('nav.home')} - Bmswitcher`;
  }, [t]);

  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <Features />
      
      {/* Call to Action Strip */}
      <section className="py-20 bg-gradient-to-r from-arco-primary to-blue-500 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">{t('cta.desc')}</p>
          <button 
            onClick={() => navigate('#/install')}
            className="px-8 py-3.5 bg-white text-arco-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            {t('cta.btn')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;