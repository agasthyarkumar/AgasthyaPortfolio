
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-portfolio-accent-1 hover:bg-opacity-90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${
        showButton ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;
