import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Languages, Check } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';
import { useRouter } from '../contexts/RouterContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage, t } = useLanguage();
  const { route, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleLanguage = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (hash: string) => {
    if (hash === '#/' && (route === '' || route === '#/')) return true;
    return route.startsWith(hash) && hash !== '#/';
  };

  const getNavLinkClass = (hash: string) => `
    font-medium transition-all duration-200 relative px-3 py-2 rounded-lg cursor-pointer
    ${isActive(hash)
      ? 'text-arco-primary bg-blue-50/80 font-semibold'
      : 'text-gray-600 hover:text-arco-primary hover:bg-gray-50'
    }
  `;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-white/50 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div onClick={() => handleNavClick('#/')} className="hover:opacity-90 transition-opacity cursor-pointer">
            <Logo />
          </div>

          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <span onClick={() => handleNavClick('#/')} className={getNavLinkClass('#/')}>{t('nav.home')}</span>
            <a
              href="https://doingfb.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm transition-colors border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            >
              官方社区
            </a>
            <a
              href="https://doingfb.com/d/28"
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm transition-colors border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            >
              联系我们
            </a>

            <div className="h-4 w-px bg-gray-300 mx-2"></div>

            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Languages className="w-5 h-5" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-1 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                  <button
                    onClick={() => toggleLanguage('en')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${language === 'en' ? 'text-arco-primary font-medium' : 'text-gray-700'}`}
                  >
                    English
                    {language === 'en' && <Check className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => toggleLanguage('zh')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${language === 'zh' ? 'text-arco-primary font-medium' : 'text-gray-700'}`}
                  >
                    中文
                    {language === 'zh' && <Check className="w-4 h-4" />}
                  </button>
                </div>
              )}
            </div>

            <Button size="sm" onClick={() => handleNavClick('#/install')}>
              {t('nav.install')}
            </Button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => toggleLanguage(language === 'en' ? 'zh' : 'en')}
              className="text-gray-600 hover:text-arco-primary flex items-center gap-1 text-sm font-medium"
            >
              <Languages className="w-5 h-5" />
              {language === 'en' ? 'EN' : '中'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-arco-primary"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 md:hidden p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <span onClick={() => handleNavClick('#/')} className={`block p-3 rounded-lg cursor-pointer ${isActive('#/') ? 'bg-blue-50 text-arco-primary font-medium' : 'text-gray-600'}`}>{t('nav.home')}</span>
          <a
            href="https://doingfb.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full border px-3 py-2 text-sm font-semibold shadow-sm transition-colors border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
          >
            官方社区
          </a>
          <a
            href="https://doingfb.com/d/28"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full border px-3 py-2 text-sm font-semibold shadow-sm transition-colors border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
          >
            联系我们
          </a>
          <div className="pt-2">
            <Button className="w-full" onClick={() => handleNavClick('#/install')}>
              {t('nav.install')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
