
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Portfolio</h3>
            <p className="text-portfolio-gray mb-4">
              Creating elegant solutions through modern web development and design.
            </p>
            <p className="text-portfolio-gray">
              © {new Date().getFullYear()} <span className="text-portfolio-accent-1">Your Name</span>. All Rights Reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-portfolio-gray">
              <li><a href="#home" className="hover:text-portfolio-accent-1 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-portfolio-accent-1 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-portfolio-accent-1 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-portfolio-accent-1 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-portfolio-accent-1 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-portfolio-gray">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile App Development</li>
              <li>Consulting</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-portfolio-gray mb-4">Subscribe to receive updates and news.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md bg-gray-800 border-gray-700 focus:border-portfolio-accent-1 focus:outline-none flex-1"
              />
              <button
                type="submit"
                className="bg-portfolio-accent-1 hover:bg-opacity-90 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
