import React from 'react';
import { portfolioData } from '../constants';

const Hero: React.FC = () => {
  const { name, title } = portfolioData.personalInfo;

  return (
    <section className="hero relative bg-white text-center p-4 md:p-6">
      <div className="relative z-10 bg-[#8f9aff] text-black rounded-3xl flex flex-col items-center justify-center max-w-5xl mx-auto py-32 md:py-40 lg:py-48 px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium" data-text={name}>{name}</h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl font-sans-text">{title}</p>
      </div>
    </section>
  );
};

export default Hero;