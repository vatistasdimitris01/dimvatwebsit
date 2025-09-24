
import React from 'react';
import { portfolioData } from '../constants';

const Hero: React.FC = () => {
  const { name, title } = portfolioData.personalInfo;

  return (
    <section className="hero relative bg-white text-center p-4 md:p-6">
      <div className="relative rounded-3xl overflow-hidden flex flex-col items-center justify-center max-w-5xl mx-auto py-32 md:py-40 lg:py-48 px-4">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 top-0 left-0 w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40 z-5"></div>
          <div className="relative z-10 text-white">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium" data-text={name}>{name}</h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl font-sans-text">{title}</p>
          </div>
      </div>
    </section>
  );
};

export default Hero;
