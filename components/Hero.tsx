import React from 'react';
import { portfolioData } from '../constants';

const Hero: React.FC = () => {
  const { name, title } = portfolioData.personalInfo;

  return (
    <section className="hero relative bg-white text-center p-4 md:p-6">
      <div className="relative rounded-3xl overflow-hidden flex flex-col items-center justify-center max-w-5xl mx-auto aspect-video">
          <iframe
            className="absolute -top-[60px] left-0 w-full h-[calc(100%+120px)] pointer-events-none"
            src="https://www.youtube.com/embed/-eGqL4Cbn_o?autoplay=1&mute=1&controls=0&loop=1&playlist=-eGqL4Cbn_o&playsinline=1&iv_load_policy=3&modestbranding=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="absolute inset-0 bg-black/40 z-5"></div>
          <div className="relative z-10 text-white px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium" data-text={name}>{name}</h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl font-sans-text">{title}</p>
          </div>
      </div>
    </section>
  );
};

export default Hero;