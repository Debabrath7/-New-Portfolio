import React, { useState, useEffect } from 'react';
import { Download, Linkedin, Github, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${isScrolled ? 'text-purple-800 dark:text-purple-400' : 'text-white'}`}>Debabrath</h1>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-purple-600 transition-colors`}>Home</button>
          <button onClick={() => scrollToSection('about')} className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-purple-600 transition-colors`}>About</button>
          <button onClick={() => scrollToSection('education')} className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-purple-600 transition-colors`}>Education</button>
          <button onClick={() => scrollToSection('projects')} className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-purple-600 transition-colors`}>Projects</button>
          <button onClick={() => scrollToSection('skills')} className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-purple-600 transition-colors`}>Skills</button>
          <button onClick={() => scrollToSection('contact')} className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-purple-600 transition-colors`}>Contact</button>
          
          <div className="flex items-center space-x-4 ml-4">
            <button
              onClick={toggleDarkMode}
              className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-purple-600 transition-colors`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a href="https://www.linkedin.com/in/debabrath-2174a9252" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-purple-600 transition-colors`}>
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/Debabrath7" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'} hover:text-purple-600 transition-colors`}>
              <Github size={20} />
            </a>
            <a 
              href="C:\Users\Deba\Downloads\project-bolt-sb1-zrpakcxr\project\public\General CV.pdf" 
              download 
              className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-purple-700 transition-colors"
            >
              <Download size={16} className="mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;