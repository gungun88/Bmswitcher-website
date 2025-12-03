import React, { useEffect } from 'react';
import { Users, Github, MessageCircle, Heart } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${t('nav.about')} - Bmswitcher`;
  }, [t]);

  return (
    <div className="pt-28 pb-16 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{t('about.title')}</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-arco-primary to-blue-300 mx-auto rounded-full shadow-sm"></div>
        </div>

        <div className="grid gap-6">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-arco hover:shadow-arco-hover transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center gap-5 mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl text-arco-primary group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{t('about.mission.title')}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {t('about.mission.desc')}
                </p>
            </div>

            {/* Community Card */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-arco hover:shadow-arco-hover transition-all duration-300 border border-gray-100 group">
                <div className="flex items-center gap-5 mb-6">
                    <div className="p-3 bg-gray-100 rounded-xl text-gray-800 group-hover:scale-110 transition-transform duration-300">
                        <Github className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{t('about.community.title')}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {t('about.community.desc')}
                </p>
            </div>

             {/* Contact Card */}
             <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100 text-center shadow-inner mt-4">
                 <div className="inline-flex p-3 bg-white rounded-full shadow-md mb-6">
                     <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                 </div>
                 <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('about.contact.title')}</h2>
                 <p className="text-gray-600 mb-8 max-w-lg mx-auto text-lg">{t('about.contact.desc')}</p>
                 <a href="https://t.me/bmswitcher_com" target="_blank" rel="noreferrer">
                    <Button size="lg" className="shadow-lg shadow-blue-500/20" icon={<MessageCircle className="w-5 h-5" />}>
                        {t('about.contact.btn')}
                    </Button>
                 </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;