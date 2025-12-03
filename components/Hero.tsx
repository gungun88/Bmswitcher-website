import React from 'react';
import { ChevronRight, Chrome, Send, Star } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 transform -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-arco-primary text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          {t('hero.badge')}
          <ChevronRight className="w-3 h-3" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
          {t('hero.title')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-arco-primary to-purple-600">
            {t('hero.subtitle')}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('hero.desc')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://chromewebstore.google.com/detail/facebook-bm-%E7%95%8C%E9%9D%A2%E5%88%87%E6%8D%A2%E5%99%A8/gljliehhjacicpgbmammmlbckhgpmacd?utm_source=ext_app_install_page" 
            target="_blank" 
            rel="noreferrer"
          >
            <Button size="lg" icon={<Chrome className="w-5 h-5" />}>
              {t('hero.addToChrome')}
            </Button>
          </a>
          <a 
            href="https://t.me/bmswitcher_com" 
            target="_blank" 
            rel="noreferrer"
          >
            <Button variant="outline" size="lg" icon={<Send className="w-5 h-5" />}>
                {t('hero.viewSource')}
            </Button>
          </a>
        </div>

        {/* Features Pills */}
        <div className="mt-8 text-sm text-gray-400 font-medium flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                {t('hero.free')}
            </span>
            <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                {t('hero.noLogin')}
            </span>
            <span className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                {t('hero.secure')}
            </span>
        </div>

        {/* Social Proof / Trust Signal */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">
                <span className="text-gray-900 font-bold">10,000+</span> {t('hero.users')}
            </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;