
import React, { useState, useRef, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (formRef.current) formRef.current.classList.add('animate-fade-in');
          if (infoRef.current) infoRef.current.classList.add('animate-fade-in-delay-1');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-portfolio-dark bg-opacity-50" ref={sectionRef}>
      <div className="section-container">
        <h2 className="heading-md text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-portfolio-gray text-center mb-16 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach out.
          I'm always open to discussing new opportunities and ideas.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div 
            ref={formRef} 
            className="lg:col-span-2 bg-gray-900 rounded-lg p-6 border border-gray-800 opacity-0"
          >
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-gray mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-800 border-gray-700 focus:border-portfolio-accent-1"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-gray mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 focus:border-portfolio-accent-1"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-gray mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-800 border-gray-700 focus:border-portfolio-accent-1 min-h-[150px]"
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-portfolio-accent-1 hover:bg-opacity-90 text-white w-full sm:w-auto px-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          <div 
            ref={infoRef} 
            className="bg-gray-900 rounded-lg p-6 border border-gray-800 opacity-0 h-fit"
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-gray-800 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-portfolio-accent-1" />
                </div>
                <div>
                  <p className="text-sm text-portfolio-gray">Email</p>
                  <a href="mailto:hello@example.com" className="hover:text-portfolio-accent-1 transition-colors">
                    agasthyarkumar@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-gray-800 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-portfolio-accent-1" />
                </div>
                <div>
                  <p className="text-sm text-portfolio-gray">Phone</p>
                  <a href="tel:+11234567890" className="hover:text-portfolio-accent-1 transition-colors">
                    +91 7019502675
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-gray-800 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 text-portfolio-accent-1" />
                </div>
                <div>
                  <p className="text-sm text-portfolio-gray">Location</p>
                  <p>Kolar, Karnataka, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h4 className="text-sm font-medium mb-4">Follow me:</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/agasthyarkumar" 
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 text-portfolio-gray hover:border-portfolio-accent-1 hover:text-portfolio-accent-1 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/agasthyarkumar/" 
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 text-portfolio-gray hover:border-portfolio-accent-1 hover:text-portfolio-accent-1 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 text-portfolio-gray hover:border-portfolio-accent-1 hover:text-portfolio-accent-1 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
