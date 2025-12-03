import React, { createContext, useState, useContext, ReactNode } from 'react';

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
    'hero.desc': 'Simple and easy-to-use Chrome extension that helps you quickly switch between the new and old Facebook Business Manager interfaces. No login required, just install and use!',
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
    'feat.card1.desc': 'No complicated operations, click the plugin icon to quickly switch between the new and old Business Manager interfaces to improve work efficiency.',
    'feat.card2.title': 'No Login Required',
    'feat.card2.desc': 'Install and use, no need to register an account or perform complicated configurations. The plugin works directly with your current Facebook login state.',
    'feat.card3.title': 'Secure & Reliable',
    'feat.card3.desc': 'Open source and transparent code, developed based on official Chrome extension standards. No personal data collection, safe and worry-free.',
    
    // Footer
    'footer.madeWith': 'Made with',
    'footer.by': 'by Open Source Community',
    'footer.copyright': 'Copyright © 2023 Bmswitcher',
    
    // CTA
    'cta.title': 'Ready to improve efficiency?',
    'cta.desc': 'Join now and experience the smoothest Facebook BM management way.',
    'cta.btn': 'Get Started',

    // Features Page
    'features.page.title': 'Powerful Features, Simple Experience',
    'features.page.subtitle': 'Explore how Bmswitcher helps you manage Facebook Business Manager more efficiently.',
    'features.list.1.title': 'Instant Interface Switching',
    'features.list.1.desc': 'Switch between "Business Suite" and the classic "Business Manager" instantly without manually editing URLs.',
    'features.list.2.title': 'Cookie-based Authentication',
    'features.list.2.desc': 'Uses your existing browser session. If you are logged into Facebook, you are ready to go.',
    'features.list.3.title': 'Lightweight Architecture',
    'features.list.3.desc': 'Less than 1MB in size, zero impact on browser performance.',
    'features.how.title': 'How to Use',
    'features.how.step1': 'Install the extension from Chrome Web Store.',
    'features.how.step2': 'Pin the icon to your browser toolbar.',
    'features.how.step3': 'When on a Facebook Business page, click the icon to toggle views.',
    'features.faq.title': 'Frequently Asked Questions',
    'features.faq.q1': 'Is this extension free?',
    'features.faq.a1': 'Yes, Bmswitcher is completely free and open source.',
    'features.faq.q2': 'Is it safe to use?',
    'features.faq.a2': 'Absolutely. The extension runs entirely in your browser and does not send any data to external servers.',
    'features.faq.q3': 'Does it work on all operating systems?',
    'features.faq.a3': 'Yes, it works on any OS (Windows, macOS, Linux) that supports the Chrome browser.',
    
    // Features Comparison
    'features.comp.title': 'Experience the Difference',
    'features.comp.subtitle': 'See why professional advertisers are switching to our tool.',
    'features.comp.manual': 'The Manual Way',
    'features.comp.manual.1': 'Manually editing complex URL parameters',
    'features.comp.manual.2': 'Frustrating page reloads and waiting',
    'features.comp.manual.3': 'Risk of breaking page navigation',
    'features.comp.auto': 'The Bmswitcher Way',
    'features.comp.auto.1': 'One-click instant toggle',
    'features.comp.auto.2': 'Seamless transition without friction',
    'features.comp.auto.3': 'Safe, reliable, and always works',

    // Features Audience
    'features.audience.title': 'Built for Professionals',
    'features.audience.1.title': 'Media Buyers',
    'features.audience.1.desc': 'Access legacy pixel settings and ad manager tools efficiently.',
    'features.audience.2.title': 'Agencies',
    'features.audience.2.desc': 'Standardize workflows across multiple client accounts.',
    'features.audience.3.title': 'Business Owners',
    'features.audience.3.desc': 'Simplify the complex Facebook interface management.',

    // Privacy Page
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last Updated: October 2023',
    'privacy.intro': 'At Bmswitcher, we take your privacy seriously. We are committed to being transparent about practices.',
    'privacy.collection.title': 'Data Collection',
    'privacy.collection.desc': 'Bmswitcher does NOT collect, store, or transmit any of your personal data, Facebook credentials, or browsing history. All operations are performed locally within your browser.',
    'privacy.permissions.title': 'Permissions Usage',
    'privacy.permissions.desc': 'We only request the minimum permissions necessary to modify the current tab URL to perform the interface switch.',
    'privacy.thirdparty.title': 'Third-Party Services',
    'privacy.thirdparty.desc': 'We do not use any third-party analytics or tracking tools within the extension.',

    // About Page
    'about.title': 'About Bmswitcher',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'Bmswitcher is an open-source project created by a group of Facebook advertisers who were frustrated with the complex navigation of the Business Manager. Our goal is to save time for every digital marketer.',
    'about.community.title': 'Community Driven',
    'about.community.desc': 'We believe in the power of open source. Anyone can inspect our code, contribute improvements, or report issues.',
    'about.contact.title': 'Contact Us',
    'about.contact.desc': 'Have questions or suggestions? Join our Telegram community to get support directly from the developers.',
    'about.contact.btn': 'Join Telegram',

    // Install Page
    'install.title': 'Installation Guide',
    'install.subtitle': 'Follow these simple steps to start using Bmswitcher',
    'install.step1.title': 'Add to Browser',
    'install.step1.desc': 'Go to the Chrome Web Store page and click the "Add to Chrome" button.',
    'install.step2.title': 'Pin Extension',
    'install.step2.desc': 'Click the puzzle icon 🧩 in the browser toolbar, find Bmswitcher, and click the pin icon to keep it visible.',
    'install.step3.title': 'Start Switching',
    'install.step3.desc': 'Navigate to any Facebook Business Manager page and click the Bmswitcher icon to toggle interfaces.',
    'install.btn.store': 'Go to Chrome Web Store',
    'install.tips.title': 'Pro Tips',
    'install.tips.desc': 'You don\'t need to log in to the extension. As long as you are logged into Facebook in your browser, it works automatically.',
  },
  zh: {
    // Navbar
    'nav.home': '首页',
    'nav.features': '功能详解',
    'nav.privacy': '隐私政策',
    'nav.about': '关于我们',
    'nav.install': '安装教程',
    
    // Hero
    'hero.badge': 'v1.0.0 正式发布',
    'hero.title': 'Facebook BM切换器',
    'hero.subtitle': '一键切换新旧界面',
    'hero.desc': '简单易用的 Chrome 扩展插件，帮助您在新旧 Facebook Business Manager 界面之间快速切换。 无需注册登录，安装即可使用！',
    'hero.addToChrome': '添加至 Chrome',
    'hero.viewSource': 'TG 交流群',
    'hero.free': '免费开源',
    'hero.noLogin': '无需登录',
    'hero.secure': '安全可靠',
    'hero.users': '全球用户的共同选择',
    
    // Home Features Section
    'feat.title': '为什么选择 Bmswitcher?',
    'feat.subtitle': '专为 Facebook 广告投手和运营人员设计，解决界面切换烦恼。',
    'feat.card1.title': '一键切换',
    'feat.card1.desc': '无需繁琐操作，点击插件图标即可快速在新旧 Business Manager 界面之间切换，提升工作效率。',
    'feat.card2.title': '无需登录',
    'feat.card2.desc': '安装即用，无需注册账号或进行繁琐的配置。插件直接与您当前的 Facebook 登录状态协同工作。',
    'feat.card3.title': '安全可靠',
    'feat.card3.desc': '代码开源透明，基于 Chrome 官方扩展标准开发。不收集任何个人数据，安全无忧。',
    
    // Footer
    'footer.madeWith': 'Made with',
    'footer.by': 'by Open Source Community',
    'footer.copyright': 'Copyright © 2023 Bmswitcher',
    
    // CTA
    'cta.title': '准备好提升效率了吗？',
    'cta.desc': '立即加入，体验最流畅的 Facebook BM 管理方式。',
    'cta.btn': '开始使用',

    // Features Page
    'features.page.title': '强大功能，极致体验',
    'features.page.subtitle': '探索 Bmswitcher 如何帮助您更高效地管理 Facebook Business Manager。',
    'features.list.1.title': '极速界面切换',
    'features.list.1.desc': '在 "Business Suite" 和经典 "Business Manager" 之间瞬间切换，告别手动修改 URL 的烦恼。',
    'features.list.2.title': '基于 Cookie 验证',
    'features.list.2.desc': '使用您现有的浏览器会话。只要您登录了 Facebook，即可直接使用，无需二次登录。',
    'features.list.3.title': '轻量级架构',
    'features.list.3.desc': '插件体积不到 1MB，对浏览器性能零影响，不仅快而且稳。',
    'features.how.title': '使用指南',
    'features.how.step1': '从 Chrome 应用商店安装插件。',
    'features.how.step2': '将插件图标固定在浏览器工具栏。',
    'features.how.step3': '当处于 Facebook 业务页面时，点击图标即可切换视图。',
    'features.faq.title': '常见问题',
    'features.faq.q1': '这个插件是免费的吗？',
    'features.faq.a1': '是的，Bmswitcher 完全免费且开源。',
    'features.faq.q2': '它使用安全吗？',
    'features.faq.a2': '绝对安全。该扩展程序完全在您的浏览器本地运行，不会将任何数据发送到外部服务器。',
    'features.faq.q3': '它支持所有操作系统吗？',
    'features.faq.a3': '是的，它支持任何可以安装 Chrome 浏览器的操作系统（Windows, macOS, Linux）。',
    
    // Features Comparison
    'features.comp.title': '体验与众不同的效率',
    'features.comp.subtitle': '看看为什么专业的广告投放师都在使用我们的工具。',
    'features.comp.manual': '传统手动方式',
    'features.comp.manual.1': '手动修改复杂的 URL 参数',
    'features.comp.manual.2': '反复刷新页面等待加载',
    'features.comp.manual.3': '容易出错导致导航失效',
    'features.comp.auto': 'Bmswitcher 方式',
    'features.comp.auto.1': '一键点击，毫秒级响应',
    'features.comp.auto.2': '无缝切换，保持工作流',
    'features.comp.auto.3': '安全稳定，始终有效',

    // Features Audience
    'features.audience.title': '专为专业人士打造',
    'features.audience.1.title': '媒介买手',
    'features.audience.1.desc': '快速访问仅在旧版界面可用的像素和广告设置工具。',
    'features.audience.2.title': '代理商',
    'features.audience.2.desc': '在不同的广告账户和界面偏好之间标准化工作流程。',
    'features.audience.3.title': '跨境电商',
    'features.audience.3.desc': '简化复杂的 Facebook 后台管理，提升日常运营效率。',

    // Privacy Page
    'privacy.title': '隐私政策',
    'privacy.updated': '最后更新：2023年10月',
    'privacy.intro': '在 Bmswitcher，我们非常重视您的隐私。我们致力于保持透明。',
    'privacy.collection.title': '数据收集',
    'privacy.collection.desc': 'Bmswitcher 不会收集、存储或传输您的任何个人数据、Facebook 凭据或浏览历史记录。所有操作均在您的浏览器本地执行。',
    'privacy.permissions.title': '权限使用',
    'privacy.permissions.desc': '我们仅请求修改当前标签页 URL 所需的最低权限，以执行界面切换操作。',
    'privacy.thirdparty.title': '第三方服务',
    'privacy.thirdparty.desc': '我们在扩展程序中不使用任何第三方分析或跟踪工具。',

    // About Page
    'about.title': '关于 Bmswitcher',
    'about.mission.title': '我们的使命',
    'about.mission.desc': 'Bmswitcher 是一个开源项目，由一群对 Business Manager 复杂导航感到沮丧的 Facebook 广告投放师创建。我们的目标是为每一位数字营销人员节省时间。',
    'about.community.title': '社区驱动',
    'about.community.desc': '我们相信开源的力量。任何人都可以检查我们的代码、贡献改进或报告问题。',
    'about.contact.title': '联系我们',
    'about.contact.desc': '有疑问或建议？加入我们的 Telegram 社区，直接获得开发者的支持。',
    'about.contact.btn': '加入 Telegram',

    // Install Page
    'install.title': '安装使用指南',
    'install.subtitle': '只需简单几步，即可开始使用 Bmswitcher',
    'install.step1.title': '添加到浏览器',
    'install.step1.desc': '访问 Chrome 应用商店页面，点击右上角的 "添加至 Chrome" 按钮进行安装。',
    'install.step2.title': '固定插件',
    'install.step2.desc': '点击浏览器工具栏上的拼图图标 🧩，找到 Bmswitcher，点击大头针图标将其固定，以便随时使用。',
    'install.step3.title': '开始切换',
    'install.step3.desc': '进入任何 Facebook Business Manager 页面，点击 Bmswitcher 图标即可一键切换新旧界面。',
    'install.btn.store': '前往 Chrome 应用商店',
    'install.tips.title': '使用小贴士',
    'install.tips.desc': '您无需在插件中登录。只要您的浏览器已登录 Facebook 账号，插件就会自动工作。',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

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