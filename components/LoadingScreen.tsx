
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [isHiding, setIsHiding] = useState(false);
  const [isGone, setIsGone] = useState(false);
  const [showLetters, setShowLetters] = useState(false);

  const name = "DIMITRIS VATISTAS";

  useEffect(() => {
    const letterTimer = setTimeout(() => {
      setShowLetters(true);
    }, 100);

    return () => clearTimeout(letterTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setIsHiding(true);
      const hideTimer = setTimeout(() => {
        setIsGone(true);
      }, 1000); 
      return () => clearTimeout(hideTimer);
    }
  }, [isLoading]);

  if (isGone) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-1000 ${
        isHiding ? 'opacity-0' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="text-center font-sans font-bold text-3xl md:text-5xl tracking-widest">
        {name.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-700 ease-in-out ${
              showLetters ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
