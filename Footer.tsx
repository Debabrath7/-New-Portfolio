import React from 'react';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white dark:bg-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Debabrath</h2>
            <p className="text-gray-400 mt-2">ML Enthusiast & Data Science Specialist</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/debabrath-2174a9252" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-purple-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Debabrath7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-purple-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:Debabrath07@gmail.com"
              className="bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-purple-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Debabrath. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="mx-2 text-red-500" /> by Debabrath
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;