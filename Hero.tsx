import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const titles = ['ML Enthusiast', 'Data Science Specialist', 'AI Researcher', 'Software Engineer'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting, currentTitleIndex]);

  const tick = () => {
    const currentTitle = titles[currentTitleIndex];
    const updatedText = isDeleting 
      ? currentTitle.substring(0, displayText.length - 1) 
      : currentTitle.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === currentTitle) {
      setIsDeleting(true);
      setDelta(3000); // Wait before starting to delete
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
      setDelta(500);
    }
  };

  return (
    <section id="home" className="h-screen relative flex items-center justify-center bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">DEBABRATH</h1>
        <h2 className="text-2xl md:text-3xl mb-6 h-12">
          <span className="font-light">I am a </span>
          <span className="font-semibold">{displayText}</span>
          <span className="animate-blink">|</span>
        </h2>
        <div className="mt-8">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-purple-800 px-8 py-3 rounded-full font-medium hover:bg-purple-100 transition-colors duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;