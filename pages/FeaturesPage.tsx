import React, { useEffect } from 'react';
import { Zap, Shield, ToggleLeft, CheckCircle2, Layout, MousePointer2, HelpCircle, XCircle, Check, Briefcase, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FeaturesPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${t('nav.features')} - Bmswitcher`;
  }, [t]);

  return (
    <div className="pt-28 pb-16 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t('features.page.title')}</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t('features.page.subtitle')}</p>
        </div>

        {/* Detailed Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-arco hover:shadow-arco-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-arco-primary">
                    <ToggleLeft className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('features.list.1.title')}</h3>
                <p className="text-gray-500 leading-relaxed">{t('features.list.1.desc')}</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-arco hover:shadow-arco-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-green-600">
                    <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('features.list.2.title')}</h3>
                <p className="text-gray-500 leading-relaxed">{t('features.list.2.desc')}</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-arco hover:shadow-arco-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                    <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('features.list.3.title')}</h3>
                <p className="text-gray-500 leading-relaxed">{t('features.list.3.desc')}</p>
            </div>
        </div>

        {/* Comparison Section (New) */}
        <div className="mb-24">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('features.comp.title')}</h2>
                <p className="text-gray-500">{t('features.comp.subtitle')}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Manual Way */}
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-gray-200 rounded-lg">
                            <XCircle className="w-6 h-6 text-gray-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-700">{t('features.comp.manual')}</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-gray-600">
                            <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                            <span>{t('features.comp.manual.1')}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-600">
                            <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                            <span>{t('features.comp.manual.2')}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-600">
                            <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                            <span>{t('features.comp.manual.3')}</span>
                        </li>
                    </ul>
                </div>

                {/* Bmswitcher Way */}
                <div className="bg-white rounded-3xl p-8 border-2 border-arco-primary shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-arco-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <CheckCircle2 className="w-6 h-6 text-arco-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{t('features.comp.auto')}</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-gray-700 font-medium">
                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                            <span>{t('features.comp.auto.1')}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700 font-medium">
                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                            <span>{t('features.comp.auto.2')}</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700 font-medium">
                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                            <span>{t('features.comp.auto.3')}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Audience Section (New) */}
        <div className="mb-24">
             <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('features.audience.title')}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-100 hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                        <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('features.audience.1.title')}</h3>
                    <p className="text-sm text-gray-500">{t('features.audience.1.desc')}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-100 hover:shadow-md transition-all">
                     <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                        <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('features.audience.2.title')}</h3>
                    <p className="text-sm text-gray-500">{t('features.audience.2.desc')}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-100 hover:shadow-md transition-all">
                     <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center text-pink-600 mb-4">
                        <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('features.audience.3.title')}</h3>
                    <p className="text-sm text-gray-500">{t('features.audience.3.desc')}</p>
                </div>
            </div>
        </div>

        {/* How it Works Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">{t('features.how.title')}</h2>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                {/* Step 1 */}
                <div className="relative flex flex-col items-center text-center group">
                    <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-6 z-10 shadow-sm transition-transform group-hover:scale-110 duration-300">
                        <Layout className="w-8 h-8 text-arco-primary" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-blue-50 text-arco-primary text-xs font-bold rounded-full mb-3">STEP 01</div>
                    <p className="text-gray-600 font-medium">{t('features.how.step1')}</p>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col items-center text-center group">
                     <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-6 z-10 shadow-sm transition-transform group-hover:scale-110 duration-300">
                        <CheckCircle2 className="w-8 h-8 text-arco-primary" />
                    </div>
                     <div className="inline-block px-3 py-1 bg-blue-50 text-arco-primary text-xs font-bold rounded-full mb-3">STEP 02</div>
                    <p className="text-gray-600 font-medium">{t('features.how.step2')}</p>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col items-center text-center group">
                     <div className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-6 z-10 shadow-sm transition-transform group-hover:scale-110 duration-300">
                        <MousePointer2 className="w-8 h-8 text-arco-primary" />
                    </div>
                     <div className="inline-block px-3 py-1 bg-blue-50 text-arco-primary text-xs font-bold rounded-full mb-3">STEP 03</div>
                    <p className="text-gray-600 font-medium">{t('features.how.step3')}</p>
                </div>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center flex items-center justify-center gap-3">
                 <HelpCircle className="text-arco-primary" />
                 {t('features.faq.title')}
             </h2>
             <div className="space-y-4">
                 <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                     <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-50 text-arco-primary text-sm flex items-center justify-center">Q</span>
                        {t('features.faq.q1')}
                     </h3>
                     <p className="text-gray-600 pl-8">{t('features.faq.a1')}</p>
                 </div>
                 <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                     <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-50 text-arco-primary text-sm flex items-center justify-center">Q</span>
                        {t('features.faq.q2')}
                     </h3>
                     <p className="text-gray-600 pl-8">{t('features.faq.a2')}</p>
                 </div>
                 <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                     <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-50 text-arco-primary text-sm flex items-center justify-center">Q</span>
                        {t('features.faq.q3')}
                     </h3>
                     <p className="text-gray-600 pl-8">{t('features.faq.a3')}</p>
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturesPage;