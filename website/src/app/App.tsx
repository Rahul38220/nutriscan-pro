import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProductIdeaPage } from './components/ProductIdeaPage';
import { ProductPage } from './components/ProductPage';
import { IntegrationPage } from './components/IntegrationPage';
import { AcknowledgementPage } from './components/AcknowledgementPage';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSubPage, setCurrentSubPage] = useState('chemistry');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update page title
    const pageTitles: Record<string, string> = {
      'home': 'Home - ISPC AgriCore Dynamics 2025',
      'about': 'About Us - ISPC AgriCore Dynamics 2025',
      'product-idea': 'Product Idea - ISPC AgriCore Dynamics 2025',
      'product': 'NutriScan Pro - ISPC AgriCore Dynamics 2025',
      'integration': 'Scientific Foundations - ISPC AgriCore Dynamics 2025',
      'acknowledgement': 'Acknowledgement - ISPC AgriCore Dynamics 2025',
    };
    
    document.title = pageTitles[currentPage] || 'ISPC AgriCore Dynamics 2025';
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleNavigateSubPage = (subPage: string) => {
    setCurrentSubPage(subPage);
  };

  return (
    <div className="min-h-screen bg-[#0a1810]">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence>
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'product-idea' && <ProductIdeaPage />}
        {currentPage === 'product' && <ProductPage />}
        {currentPage === 'integration' && (
          <IntegrationPage 
            currentSubPage={currentSubPage} 
            onNavigateSubPage={handleNavigateSubPage} 
          />
        )}
        {currentPage === 'acknowledgement' && <AcknowledgementPage />}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#0a1810] border-t border-emerald-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              © 2025 ISPC AgriCore Dynamics. All rights reserved.
            </p>
            <p className="text-emerald-400 text-sm">
              Innovating for a sustainable agricultural future
            </p>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}