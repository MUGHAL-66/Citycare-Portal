import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/navigation';
import Home from './components/pages/home';
import Services from './components/pages/services';
import Waste from './components/pages/waste';
import Water from './components/pages/water';
import Emergency from './components/pages/emergency';
import About from './components/pages/about';
import Login from './components/pages/login';

// Footer Component
const Footer: React.FC<{ onPageChange: (page: string) => void }> = ({ onPageChange }) => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <div className="heading-font">
                <h3 className="text-xl font-bold">CityCare</h3>
                <p className="text-xs text-muted-foreground -mt-1">Smart City Portal</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your gateway to comprehensive city services. Making municipal interactions simple, 
              transparent, and accessible for everyone.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-font font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onPageChange('waste')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Waste Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('water')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Water Supply
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('transport')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Public Transport
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('emergency')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Emergency Services
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="heading-font font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onPageChange('about')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-font font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Emergency</p>
                <p className="mono-font font-bold">911</p>
              </div>
              <div>
                <p className="text-muted-foreground">City Services</p>
                <p className="mono-font font-bold">(555) 311-CITY</p>
              </div>
              <div>
                <p className="text-muted-foreground">Email</p>
                <p>info@citycare.gov</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 CityCare. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('citycare-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(systemPrefersDark);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('citycare-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  const renderPage = () => {
    const pageProps = { onPageChange: handlePageChange };
    
    switch (currentPage) {
      case 'home':
        return <Home {...pageProps} />;
      case 'services':
        return <Services {...pageProps} />;
      case 'waste':
        return <Waste />;
      case 'water':
        return <Water />;
      case 'emergency':
        return <Emergency />;
      case 'about':
        return <About {...pageProps} />;
      case 'login':
        return <Login {...pageProps} />;
      default:
        return <Home {...pageProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isDark={isDark}
        onThemeToggle={handleThemeToggle}
      />

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
};

export default App;