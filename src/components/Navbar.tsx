
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300', 
      scrolled ? 'py-3 bg-portfolio-dark bg-opacity-90 backdrop-blur-sm shadow-md' : 'py-5'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-lg font-bold text-portfolio-light font-display">
              <span className="text-gradient">Portfolio</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300"
            >
              {mobileMenuOpen ? (
                <path 
                  d="M18 6L6 18M6 6L18 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              ) : (
                <path 
                  d="M4 6H20M4 12H20M4 18H20" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={cn(
          'md:hidden absolute left-0 right-0 bg-portfolio-dark bg-opacity-95 backdrop-blur-sm transition-all duration-300 overflow-hidden',
          mobileMenuOpen ? 'max-h-64 py-4 shadow-lg' : 'max-h-0'
        )}>
          <div className="flex flex-col space-y-4 px-4">
            <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
