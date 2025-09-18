import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Sun, Moon, MapPin, User } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange, isDark, onThemeToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'waste', label: 'Waste', href: '#waste' },
    { id: 'water', label: 'Water', href: '#water' },
    { id: 'transport', label: 'Transport', href: '#transport' },
    { id: 'emergency', label: 'Emergency', href: '#emergency' },
    { id: 'about', label: 'About', href: '#about' },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="heading-font">
              <h1 className="text-xl font-bold text-foreground">CityCare</h1>
              <p className="text-xs text-muted-foreground -mt-1">Smart City Portal</p>
            </div>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  className="relative"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeTab"
                    />
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Right Side - User Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onThemeToggle}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            <Button variant="outline" size="sm" onClick={() => handleNavClick('login')}>
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onThemeToggle}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 pt-6">
                  {/* Mobile Navigation */}
                  <div className="flex flex-col space-y-2">
                    {navigationItems.map((item) => (
                      <Button
                        key={item.id}
                        variant={currentPage === item.id ? "default" : "ghost"}
                        className="justify-start"
                        onClick={() => handleNavClick(item.id)}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </div>

                  {/* Mobile Actions */}
                  <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                    <Button variant="outline" onClick={() => handleNavClick('login')}>
                      <User className="w-4 h-4 mr-2" />
                      Login / Sign Up
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;