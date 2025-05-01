
import React, { useEffect, useRef } from 'react';
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML / CSS", level: 95 },
      { name: "TailwindCSS", level: 90 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "RESTful APIs", level: 85 }
    ]
  },
  {
    category: "Tools & Methods",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "Jest / Testing", level: 75 },
      { name: "CI/CD", level: 70 }
    ]
  }
];

const SkillCategory: React.FC<{
  category: string;
  items: { name: string; level: number }[];
  index: number;
}> = ({ category, items, index }) => {
  const categoryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }
    
    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);

  // Add a slight delay to each skill bar animation
  const getDelay = (itemIndex: number) => {
    return `${0.1 + (index * 0.1) + (itemIndex * 0.05)}s`;
  };

  return (
    <div ref={categoryRef} className="opacity-0">
      <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-800">{category}</h3>
      <div className="space-y-6">
        {items.map((item, itemIndex) => (
          <div key={itemIndex}>
            <div className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span className="text-portfolio-accent-1">{item.level}%</span>
            </div>
            <Progress 
              value={item.level} 
              className="h-2 bg-gray-800" 
              style={{
                '--progress-animation-delay': getDelay(itemIndex),
              } as React.CSSProperties}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
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
    <section id="skills" className="py-24" ref={sectionRef}>
      <div className="section-container">
        <h2 className="heading-md text-center mb-4 opacity-0" ref={headingRef}>
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-portfolio-gray text-center mb-16 max-w-2xl mx-auto">
          Here's an overview of my technical skills and areas of expertise. I'm continuously learning and adding to these.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <SkillCategory key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
