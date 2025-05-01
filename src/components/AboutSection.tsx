import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import banner from '../assets/banner.jpg';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (imageRef.current) imageRef.current.classList.add('animate-fade-in-right');
          if (contentRef.current) contentRef.current.classList.add('animate-fade-in-left');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div 
            className="relative opacity-0 order-2 md:order-1" 
            ref={imageRef}
          >
            <div className="relative z-10">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-800 border-2 border-portfolio-accent-1 relative">
                <img 
                  src={banner} 
                  alt="Banner" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent-1 to-portfolio-accent-2 opacity-50"></div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-portfolio-accent-2 rounded-lg"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-portfolio-accent-1 rounded-full opacity-20 blur-xl"></div>
          </div>
          
          {/* Content Section */}
          <div className="opacity-0 order-1 md:order-2" ref={contentRef}>
            <h2 className="heading-md mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-portfolio-gray mb-6">
              Hello! I'm a passionate developer focused on creating elegant solutions through code. 
              My journey in web development started several years ago, and I've been in love with 
              creating digital experiences ever since.
            </p>
            <p className="text-portfolio-gray mb-6">
              With a strong foundation in modern frontend technologies and a keen eye for design, 
              I strive to build applications that are not only functional but also intuitive and 
              pleasant to use.
            </p>
            <p className="text-portfolio-gray mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source, or enjoying the outdoors. I'm always looking for new challenges and 
              opportunities to grow.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="h-1 w-6 bg-portfolio-accent-1 mr-4"></div>
                <div>
                  <p className="text-sm text-portfolio-gray">Experience</p>
                  <p className="font-medium">5+ Years</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-1 w-6 bg-portfolio-accent-1 mr-4"></div>
                <div>
                  <p className="text-sm text-portfolio-gray">Projects</p>
                  <p className="font-medium">20+ Completed</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-1 w-6 bg-portfolio-accent-2 mr-4"></div>
                <div>
                  <p className="text-sm text-portfolio-gray">Education</p>
                  <p className="font-medium">Computer Science</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-1 w-6 bg-portfolio-accent-2 mr-4"></div>
                <div>
                  <p className="text-sm text-portfolio-gray">Location</p>
                  <p className="font-medium">New York, USA</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
