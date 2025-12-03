import React, { useEffect } from 'react';
import { Lock, EyeOff, ServerOff, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${t('nav.privacy')} - Bmswitcher`;
  }, [t]);

  return (
    <div className="pt-28 pb-16 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-green-50 rounded-2xl mb-6">
                 <ShieldCheck className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('privacy.title')}</h1>
            <p className="text-sm text-gray-400 font-medium uppercase tracking-wide bg-gray-100 inline-block px-3 py-1 rounded-full">{t('privacy.updated')}</p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-3xl shadow-arco p-8 md:p-12 mb-8 border border-gray-100 relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-arco-primary"></div>
             
            <p className="text-lg text-gray-700 leading-relaxed mb-10 font-medium">
                {t('privacy.intro')}
            </p>

            <div className="space-y-10">
                {/* Data Collection Section */}
                <div className="flex gap-6 items-start">
                    <div className="p-4 bg-red-50 rounded-2xl shrink-0 shadow-sm">
                        <EyeOff className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">{t('privacy.collection.title')}</h2>
                        <p className="text-gray-500 leading-relaxed text-base">{t('privacy.collection.desc')}</p>
                    </div>
                </div>

                {/* Permissions Section */}
                <div className="flex gap-6 items-start">
                    <div className="p-4 bg-blue-50 rounded-2xl shrink-0 shadow-sm">
                        <Lock className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                         <h2 className="text-xl font-bold text-gray-900 mb-3">{t('privacy.permissions.title')}</h2>
                         <p className="text-gray-500 leading-relaxed text-base">{t('privacy.permissions.desc')}</p>
                    </div>
                </div>

                {/* Third Party Section */}
                <div className="flex gap-6 items-start">
                     <div className="p-4 bg-green-50 rounded-2xl shrink-0 shadow-sm">
                        <ServerOff className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                         <h2 className="text-xl font-bold text-gray-900 mb-3">{t('privacy.thirdparty.title')}</h2>
                         <p className="text-gray-500 leading-relaxed text-base">{t('privacy.thirdparty.desc')}</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPage;