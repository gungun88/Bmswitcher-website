import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.privacy': 'Privacy',
    'nav.about': 'About',
    'nav.install': 'Install Now',

    // Hero
    'hero.badge': 'v1.0.0 Now Available',
    'hero.title': 'Facebook BM Switcher',
    'hero.subtitle': 'One-click switch between new and old interfaces',
    'hero.desc': 'Simple and easy-to-use Chrome extension that helps you quickly switch between the new and old Facebook Business Manager interfaces. No login required, just install and use.',
    'hero.addToChrome': 'Add to Chrome',
    'hero.viewSource': 'Join Telegram',
    'hero.free': 'Free & Open Source',
    'hero.noLogin': 'No Login Required',
    'hero.secure': 'Secure & Reliable',
    'hero.users': 'active users worldwide',

    // Home Features Section
    'feat.title': 'Why choose Bmswitcher?',
    'feat.subtitle': 'Designed for Facebook advertisers and operators to solve interface switching troubles.',
    'feat.card1.title': 'One-Click Switch',
    'feat.card1.desc': 'No complicated operations. Click the extension icon to switch between the new and old Business Manager interfaces and improve workflow efficiency.',
    'feat.card2.title': 'No Login Required',
    'feat.card2.desc': 'Install and use right away. No account registration or complicated setup is required. The extension works directly with your current Facebook login state.',
    'feat.card3.title': 'Secure & Reliable',
    'feat.card3.desc': 'Open-source and transparent code built on official Chrome extension standards. No personal data collection, safe and worry-free.',

    // Footer
    'footer.madeWith': 'Made with',
    'footer.by': 'by Open Source Community',
    'footer.copyright': '© 2023 Bmswitcher',

    // CTA
    'cta.title': 'Ready to improve efficiency?',
    'cta.desc': 'Join now and experience a smoother way to manage Facebook BM.',
    'cta.btn': 'Get Started',

    // Features Page
    'features.page.title': 'Powerful Features, Simple Experience',
    'features.page.subtitle': 'Explore how Bmswitcher helps you manage Facebook Business Manager more efficiently.',
    'features.list.1.title': 'Instant Interface Switching',
    'features.list.1.desc': 'Switch between "Business Suite" and the classic "Business Manager" instantly without manually editing URLs.',
    'features.list.2.title': 'Cookie-based Authentication',
    'features.list.2.desc': 'Uses your existing browser session. If you are logged into Facebook, you are ready to go.',
    'features.list.3.title': 'Lightweight Architecture',
    'features.list.3.desc': 'Less than 1MB in size, with nearly zero impact on browser performance.',
    'features.how.title': 'How to Use',
    'features.how.step1': 'Install the extension from the Chrome Web Store.',
    'features.how.step2': 'Pin the extension to your browser toolbar.',
    'features.how.step3': 'When you are on a Facebook Business page, click the icon to toggle views.',
    'features.faq.title': 'Frequently Asked Questions',
    'features.faq.q1': 'Is this extension free?',
    'features.faq.a1': 'Yes. Bmswitcher is completely free and open source.',
    'features.faq.q2': 'Is it safe to use?',
    'features.faq.a2': 'Absolutely. The extension runs entirely in your browser and does not send any data to external servers.',
    'features.faq.q3': 'Does it work on all operating systems?',
    'features.faq.a3': 'Yes. It works on any operating system, including Windows, macOS, and Linux, as long as Chrome is supported.',

    // Features Comparison
    'features.comp.title': 'Experience the Difference',
    'features.comp.subtitle': 'See why professional advertisers are switching to our tool.',
    'features.comp.manual': 'The Manual Way',
    'features.comp.manual.1': 'Manually editing complex URL parameters',
    'features.comp.manual.2': 'Frustrating page reloads and waiting',
    'features.comp.manual.3': 'Risk of breaking page navigation',
    'features.comp.auto': 'The Bmswitcher Way',
    'features.comp.auto.1': 'One-click instant toggle',
    'features.comp.auto.2': 'Seamless switching with less friction',
    'features.comp.auto.3': 'Safe, reliable, and consistent',

    // Features Audience
    'features.audience.title': 'Built for Professionals',
    'features.audience.1.title': 'Media Buyers',
    'features.audience.1.desc': 'Access legacy pixel settings and ad manager tools efficiently.',
    'features.audience.2.title': 'Agencies',
    'features.audience.2.desc': 'Standardize workflows across multiple client accounts.',
    'features.audience.3.title': 'Business Owners',
    'features.audience.3.desc': 'Simplify complex Facebook backend management.',

    // Privacy Page
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last Updated: October 2023',
    'privacy.intro': 'At Bmswitcher, we take your privacy seriously and are committed to being transparent about how the extension works.',
    'privacy.collection.title': 'Data Collection',
    'privacy.collection.desc': 'Bmswitcher does not collect, store, or transmit any of your personal data, Facebook credentials, or browsing history. All operations are performed locally within your browser.',
    'privacy.permissions.title': 'Permissions Usage',
    'privacy.permissions.desc': 'We request only the minimum permissions required to modify the current tab URL and complete the interface switch.',
    'privacy.thirdparty.title': 'Third-Party Services',
    'privacy.thirdparty.desc': 'We do not use any third-party analytics or tracking tools within the extension.',

    // About Page
    'about.title': 'About Bmswitcher',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'Bmswitcher is an open-source project created by Facebook advertisers who were frustrated with the complex navigation of Business Manager. Our goal is to save time for every digital marketer.',
    'about.community.title': 'Community Driven',
    'about.community.desc': 'We believe in the power of open source. Anyone can inspect our code, contribute improvements, or report issues.',
    'about.contact.title': 'Contact Us',
    'about.contact.desc': 'Have questions or suggestions? Join our Telegram community to get support directly from the developers.',
    'about.contact.btn': 'Join Telegram',

    // Install Page
    'install.title': 'Installation Guide',
    'install.subtitle': 'Follow these simple steps to start using Bmswitcher.',
    'install.step1.title': 'Add to Browser',
    'install.step1.desc': 'Open the Chrome Web Store page and click the "Add to Chrome" button.',
    'install.step2.title': 'Pin Extension',
    'install.step2.desc': 'Open the Extensions menu in your browser toolbar, find Bmswitcher, and pin it so it stays visible.',
    'install.step3.title': 'Start Switching',
    'install.step3.desc': 'Open any Facebook Business Manager page and click the Bmswitcher icon to toggle interfaces.',
    'install.btn.store': 'Go to Chrome Web Store',
    'install.tips.title': 'Pro Tips',
    'install.tips.desc': 'You do not need to log in to the extension. As long as you are logged in to Facebook in your browser, it works automatically.',
  },
  zh: {
    // Navbar
    'nav.home': '首页',
    'nav.features': '功能介绍',
    'nav.privacy': '隐私政策',
    'nav.about': '关于我们',
    'nav.install': '立即安装',

    // Hero
    'hero.badge': 'v1.0.0 正式发布',
    'hero.title': 'Facebook BM 切换器',
    'hero.subtitle': '一键切换新旧后台界面',
    'hero.desc': '简单易用的 Chrome 扩展，帮助你在新版和旧版 Facebook Business Manager 界面之间快速切换。无需额外登录，安装即可使用。',
    'hero.addToChrome': '添加到 Chrome',
    'hero.viewSource': '加入 Telegram',
    'hero.free': '免费开源',
    'hero.noLogin': '无需登录',
    'hero.secure': '安全可靠',
    'hero.users': '全球活跃用户',

    // Home Features Section
    'feat.title': '为什么选择 Bmswitcher？',
    'feat.subtitle': '专为 Facebook 广告投手和运营人员设计，解决后台界面切换麻烦。',
    'feat.card1.title': '一键切换',
    'feat.card1.desc': '无需复杂操作，点击扩展图标即可快速在新旧 Business Manager 界面之间切换，提升工作效率。',
    'feat.card2.title': '无需登录',
    'feat.card2.desc': '安装后即可使用，无需注册账号或进行复杂配置。扩展会直接复用你当前的 Facebook 登录状态。',
    'feat.card3.title': '安全可靠',
    'feat.card3.desc': '代码开源透明，基于官方 Chrome 扩展标准开发。不采集个人数据，用起来更安心。',

    // Footer
    'footer.madeWith': '用心',
    'footer.by': '由开源社区打造',
    'footer.copyright': '© 2023 Bmswitcher',

    // CTA
    'cta.title': '准备提升效率了吗？',
    'cta.desc': '现在就开始，体验更顺手的 Facebook BM 管理方式。',
    'cta.btn': '开始使用',

    // Features Page
    'features.page.title': '强大功能，简单体验',
    'features.page.subtitle': '看看 Bmswitcher 如何帮助你更高效地管理 Facebook Business Manager。',
    'features.list.1.title': '极速界面切换',
    'features.list.1.desc': '在“Business Suite”和经典“Business Manager”之间快速切换，无需手动修改链接。',
    'features.list.2.title': '基于 Cookie 的认证',
    'features.list.2.desc': '直接使用你当前浏览器会话。只要你已经登录 Facebook，就能立即开始使用。',
    'features.list.3.title': '轻量级架构',
    'features.list.3.desc': '体积不到 1MB，对浏览器性能几乎没有影响。',
    'features.how.title': '使用方法',
    'features.how.step1': '在 Chrome 应用商店安装扩展。',
    'features.how.step2': '将扩展图标固定到浏览器工具栏。',
    'features.how.step3': '打开任意 Facebook Business 页面后，点击图标即可切换视图。',
    'features.faq.title': '常见问题',
    'features.faq.q1': '这个扩展免费吗？',
    'features.faq.a1': '是的，Bmswitcher 完全免费且开源。',
    'features.faq.q2': '使用安全吗？',
    'features.faq.a2': '非常安全。扩展完全在你的浏览器本地运行，不会把任何数据发送到外部服务器。',
    'features.faq.q3': '支持所有操作系统吗？',
    'features.faq.a3': '支持。只要系统能安装 Chrome 浏览器，无论是 Windows、macOS 还是 Linux 都可以使用。',

    // Features Comparison
    'features.comp.title': '切换体验对比',
    'features.comp.subtitle': '看看为什么越来越多专业广告主开始使用这款工具。',
    'features.comp.manual': '手动切换方式',
    'features.comp.manual.1': '手动修改复杂的 URL 参数',
    'features.comp.manual.2': '频繁刷新页面并等待加载',
    'features.comp.manual.3': '容易操作失误导致页面跳转异常',
    'features.comp.auto': 'Bmswitcher 方式',
    'features.comp.auto.1': '一键切换，立即生效',
    'features.comp.auto.2': '切换过程顺滑，不打断工作流',
    'features.comp.auto.3': '稳定可靠，长期可用',

    // Features Audience
    'features.audience.title': '为专业用户而生',
    'features.audience.1.title': '广告投手',
    'features.audience.1.desc': '更高效地访问旧版像素设置和广告管理功能。',
    'features.audience.2.title': '代理团队',
    'features.audience.2.desc': '统一多客户账号的操作流程，减少切换成本。',
    'features.audience.3.title': '业务负责人',
    'features.audience.3.desc': '降低 Facebook 后台管理复杂度，让日常操作更直接。',

    // Privacy Page
    'privacy.title': '隐私政策',
    'privacy.updated': '最后更新：2023 年 10 月',
    'privacy.intro': '在 Bmswitcher，我们非常重视你的隐私，并承诺清晰说明扩展的工作方式。',
    'privacy.collection.title': '数据收集',
    'privacy.collection.desc': 'Bmswitcher 不会收集、存储或传输你的个人数据、Facebook 凭据或浏览历史。所有操作都只在你的浏览器本地完成。',
    'privacy.permissions.title': '权限使用',
    'privacy.permissions.desc': '我们只申请完成界面切换所必需的最小权限，用于修改当前标签页的 URL。',
    'privacy.thirdparty.title': '第三方服务',
    'privacy.thirdparty.desc': '扩展内部不使用任何第三方统计或追踪工具。',

    // About Page
    'about.title': '关于 Bmswitcher',
    'about.mission.title': '我们的使命',
    'about.mission.desc': 'Bmswitcher 是一个开源项目，由一群长期使用 Facebook 广告后台、受困于复杂导航流程的广告从业者共同发起。我们的目标是替每一位数字营销人员节省时间。',
    'about.community.title': '社区驱动',
    'about.community.desc': '我们相信开源的力量。任何人都可以查看代码、提交改进，或反馈问题。',
    'about.contact.title': '联系我们',
    'about.contact.desc': '如果你有问题或建议，欢迎加入我们的 Telegram 社区，直接和开发者交流。',
    'about.contact.btn': '加入 Telegram',

    // Install Page
    'install.title': '安装指南',
    'install.subtitle': '按照下面几个简单步骤，即可开始使用 Bmswitcher。',
    'install.step1.title': '添加到浏览器',
    'install.step1.desc': '打开 Chrome 应用商店页面，点击“添加到 Chrome”按钮完成安装。',
    'install.step2.title': '固定扩展',
    'install.step2.desc': '打开浏览器工具栏中的扩展菜单，找到 Bmswitcher，并将它固定到工具栏，方便随时使用。',
    'install.step3.title': '开始切换',
    'install.step3.desc': '进入任意 Facebook Business Manager 页面后，点击 Bmswitcher 图标即可切换界面。',
    'install.btn.store': '前往 Chrome 应用商店',
    'install.tips.title': '使用提示',
    'install.tips.desc': '无需在扩展里再次登录。只要你的浏览器已经登录 Facebook，扩展就会自动生效。',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
