import React from 'react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';
import { useRouter } from '../contexts/RouterContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { navigate } = useRouter();
  
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-8">
        
        {/* Logo + Name */}
        <div onClick={() => navigate('#/')} className="cursor-pointer">
            <Logo textSize="text-lg" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-gray-500 font-medium">
             <span onClick={() => navigate('#/')} className="hover:text-arco-primary transition-colors cursor-pointer">{t('nav.home')}</span>
             <span onClick={() => navigate('#/features')} className="hover:text-arco-primary transition-colors cursor-pointer">{t('nav.features')}</span>
             <span onClick={() => navigate('#/privacy')} className="hover:text-arco-primary transition-colors cursor-pointer">{t('nav.privacy')}</span>
             <span onClick={() => navigate('#/about')} className="hover:text-arco-primary transition-colors cursor-pointer">{t('nav.about')}</span>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-2 text-sm text-gray-400">
          <p>
            {t('footer.copyright')}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
