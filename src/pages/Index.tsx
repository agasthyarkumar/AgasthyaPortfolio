import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Set the page title
    document.title = 'Agasthya R Kumar';
    
    // Initial animations for elements already in viewport
    const handleInitialAnimations = () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    
    // Add scroll listener for animations
    const handleScroll = () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.getBoundingClientRect().height;
        
        if (elementTop < window.innerHeight - elementHeight / 5) {
          element.classList.add('animate-fade-in');
        }
      });
    };
    
    // Initialize animations and add scroll listener
    handleInitialAnimations();
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="bg-portfolio-dark text-portfolio-light min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
