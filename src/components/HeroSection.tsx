
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    
    const phrases = ["Developer.", "Designer.", "Creator.", "Innovator.", "Thinker."];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        textElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // Pause at the end of typing
        typingSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        // Pause before starting to type next phrase
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-portfolio-accent-1 rounded-full filter blur-3xl opacity-10 animate-bounce-subtle"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-portfolio-accent-2 rounded-full filter blur-3xl opacity-10 animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="inline-block px-3 py-1 mb-6 text-sm font-medium text-portfolio-accent-1 border border-portfolio-accent-1 rounded-full opacity-0 animate-fade-in">Welcome to my portfolio</p>
          <h1 className="heading-xl mb-6 opacity-0 animate-fade-in-delay-1">
            Hi, I'm <span className="text-gradient">Agasthya R Kumar</span>
            <br />
            <span className="flex items-center justify-center">
              <span ref={textRef} className="min-h-[1.5em]">Developer.</span>
              <span className="animate-pulse ml-1">|</span>
            </span>
          </h1>
          <p className="text-lg text-portfolio-gray mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            I create exceptional digital experiences with modern web technologies, 
            focusing on performance, accessibility, and stunning design.
          </p>
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="btn-primary group">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 border border-portfolio-accent-1 rounded-md text-base font-medium text-portfolio-accent-1 hover:bg-portfolio-accent-1 hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-portfolio-accent-1 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce-subtle">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full border border-portfolio-gray text-portfolio-gray hover:text-portfolio-accent-1 hover:border-portfolio-accent-1 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
