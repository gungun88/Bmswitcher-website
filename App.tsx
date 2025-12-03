import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PrivacyPage from './pages/PrivacyPage';
import AboutPage from './pages/AboutPage';
import InstallPage from './pages/InstallPage';
import { LanguageProvider } from './contexts/LanguageContext';
import { RouterProvider, useRouter } from './contexts/RouterContext';

const AppContent: React.FC = () => {
  const { route } = useRouter();

  let Component;
  if (route.startsWith('#/features')) {
    Component = FeaturesPage;
  } else if (route.startsWith('#/privacy')) {
    Component = PrivacyPage;
  } else if (route.startsWith('#/about')) {
    Component = AboutPage;
  } else if (route.startsWith('#/install')) {
    Component = InstallPage;
  } else {
    Component = HomePage;
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-arco-bg selection:bg-arco-primary selection:text-white font-sans">
      <Navbar />
      <main className="flex-grow">
        <Component />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </LanguageProvider>
  );
}

export default App;