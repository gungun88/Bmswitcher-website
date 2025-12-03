import React, { useEffect } from 'react';
import { Download, Pin, PlayCircle, Chrome, Lightbulb } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

const InstallPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${t('nav.install')} - Bmswitcher`;
  }, [t]);

  return (
    <div className="pt-28 pb-16 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t('install.title')}</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t('install.subtitle')}</p>
        </div>

        {/* Steps */}
        <div className="space-y-8 relative mb-16">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute left-[3.25rem] top-8 bottom-8 w-0.5 bg-gray-100"></div>

            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-arco border border-gray-100 relative z-10 md:ml-12 hover:shadow-arco-hover transition-all duration-300">
                <div className="md:absolute md:-left-16 md:top-8 w-10 h-10 bg-arco-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg mb-4 md:mb-0">1</div>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="p-4 bg-blue-50 rounded-xl text-arco-primary shrink-0 w-16 h-16 flex items-center justify-center">
                        <Download className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">{t('install.step1.title')}</h2>
                        <p className="text-gray-500 mb-6 leading-relaxed">{t('install.step1.desc')}</p>
                        <a 
                            href="https://chromewebstore.google.com/detail/facebook-bm-%E7%95%8C%E9%9D%A2%E5%88%87%E6%8D%A2%E5%99%A8/gljliehhjacicpgbmammmlbckhgpmacd?utm_source=ext_app_install_page"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button icon={<Chrome className="w-5 h-5" />}>
                                {t('install.btn.store')}
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-arco border border-gray-100 relative z-10 md:ml-12 hover:shadow-arco-hover transition-all duration-300">
                <div className="md:absolute md:-left-16 md:top-8 w-10 h-10 bg-arco-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg mb-4 md:mb-0">2</div>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="p-4 bg-purple-50 rounded-xl text-purple-600 shrink-0 w-16 h-16 flex items-center justify-center">
                        <Pin className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">{t('install.step2.title')}</h2>
                        <p className="text-gray-500 leading-relaxed">{t('install.step2.desc')}</p>
                    </div>
                </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-arco border border-gray-100 relative z-10 md:ml-12 hover:shadow-arco-hover transition-all duration-300">
                <div className="md:absolute md:-left-16 md:top-8 w-10 h-10 bg-arco-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg mb-4 md:mb-0">3</div>
                 <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="p-4 bg-green-50 rounded-xl text-green-600 shrink-0 w-16 h-16 flex items-center justify-center">
                        <PlayCircle className="w-8 h-8" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">{t('install.step3.title')}</h2>
                        <p className="text-gray-500 leading-relaxed">{t('install.step3.desc')}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Tip Box */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100 flex items-start gap-4">
            <Lightbulb className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{t('install.tips.title')}</h3>
                <p className="text-gray-600">{t('install.tips.desc')}</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default InstallPage;