
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product catalog, cart functionality, and secure checkout process.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    links: {
      github: "#",
      live: "#",
    }
  },
  {
    title: "Task Management App",
    description: "A productivity application for organizing tasks with features like drag-and-drop, categories, and progress tracking.",
    tags: ["React", "TypeScript", "Redux", "Firebase"],
    image: "bg-gradient-to-br from-green-500 to-teal-600",
    links: {
      github: "#",
      live: "#",
    }
  },
  {
    title: "AI Content Generator",
    description: "Web application that leverages AI to generate blog content, social media posts, and marketing copy.",
    tags: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel"],
    image: "bg-gradient-to-br from-red-500 to-orange-600",
    links: {
      github: "#",
      live: "#",
    }
  }
];

const ProjectCard: React.FC<(typeof projects)[0]> = ({ title, description, tags, image, links }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="rounded-lg overflow-hidden bg-gray-900 border border-gray-800 transition-all duration-500 hover:border-portfolio-accent-1 hover:-translate-y-2 opacity-0"
    >
      <div className={`h-48 ${image} flex items-center justify-center`}>
        <span className="text-white text-lg font-medium">Project Image</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-portfolio-light">{title}</h3>
        <p className="text-portfolio-gray mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-medium text-portfolio-accent-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a 
            href={links.github} 
            className="text-portfolio-gray hover:text-portfolio-accent-1 transition-colors"
            aria-label="View source code on GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={links.live} 
            className="text-portfolio-gray hover:text-portfolio-accent-1 transition-colors"
            aria-label="View live project"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (headingRef.current) headingRef.current.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
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
    <section id="projects" className="py-24 bg-portfolio-dark bg-opacity-50" ref={sectionRef}>
      <div className="section-container">
        <h2 className="heading-md text-center mb-4 opacity-0" ref={headingRef}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-portfolio-gray text-center mb-16 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built with a focus on solving specific problems with elegant solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="btn-primary inline-flex items-center"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
