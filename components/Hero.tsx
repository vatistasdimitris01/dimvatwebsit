import React from 'react';
import { portfolioData } from '../constants';

const Hero: React.FC = () => {
  const { name, title } = portfolioData.personalInfo;

  return (
    <section className="hero relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center bg-[#8f9aff] text-center px-4">
      <div className="relative z-10 text-black">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium" data-text={name}>{name}</h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl font-sans-text">{title}</p>
      </div>
    </section>
  );
};

export default Hero;
