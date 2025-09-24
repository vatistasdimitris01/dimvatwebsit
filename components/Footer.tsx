
import React from 'react';
import XIcon from './icons/XIcon';
import InstagramIcon from './icons/InstagramIcon';
import { portfolioData } from '../constants';

interface FooterProps {
    onPrivacyClick: () => void;
    onTermsClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick }) => {
  const { connect, personalInfo, projects } = portfolioData;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
      { href: '#about', text: 'About' },
      { href: '#projects', text: 'Projects' },
  ];
  
  const xUrl = connect.socialLinks.find(link => link.platform === 'X')?.url || '#';
  const instaUrl = connect.socialLinks.find(link => link.platform === 'Instagram')?.url || '#';

  return (
    <footer id="connect" className="bg-white text-black px-4 sm:px-6 lg:px-10 py-16 md:py-24 scroll-mt-24 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        
        <div className="flex flex-col lg:flex-row lg:justify-between gap-16">
            {/* Left Side: Stay Connected */}
            <div className="lg:max-w-md">
              <h2 className="text-2xl md:text-3xl font-sans-text font-normal">Stay connected for early access to our newest tools and local events</h2>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3">
                  <a href={xUrl} target="_blank" rel="noopener noreferrer" aria-label="X" className="border border-black rounded-full w-14 h-14 flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <XIcon className="w-5 h-5" />
                  </a>
                  <a href={instaUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border border-black rounded-full w-14 h-14 flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                </div>
                <a href={`mailto:${connect.email}`} className="border border-black rounded-full py-3 px-6 text-base font-medium hover:bg-black hover:text-white transition-colors duration-300 whitespace-nowrap">
                  Sign up for our newsletter
                </a>
              </div>
            </div>

            {/* Right Side: Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-base flex-grow">
              <div className="col-span-1">
                <h3 className="text-lg font-bold mb-4">Navigation</h3>
                <ul className="space-y-3 font-sans-text text-gray-700">
                  {navLinks.map(link => (
                    <li key={link.text}>
                      <a href={link.href} className="hover:text-black transition-colors" onClick={handleNavClick}>{link.text}</a>
                    </li>
                  ))}
                  <li><a href="#connect" className="hover:text-black transition-colors" onClick={handleNavClick}>Connect</a></li>
                </ul>
              </div>
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-lg font-bold mb-4">Other teams and product areas</h3>
                <ul className="space-y-3 font-sans-text text-gray-700">
                  {projects.slice(0, 5).map(project => (
                    <li key={project.title}>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">{project.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </div>

        {/* Giant Name */}
        <div className="my-16 md:my-20 -ml-1">
          <h1 className="text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17vw] font-bold tracking-tighter leading-none break-words uppercase">
            Dimitris Vatistas
          </h1>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="flex items-center gap-4">
                <span className="font-bold text-base">{personalInfo.name}</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 uppercase tracking-wider text-gray-600 text-xs font-medium">
                <a href="#about" className="hover:text-black" onClick={handleNavClick}>About</a>
                <a href="#projects" className="hover:text-black" onClick={handleNavClick}>Projects</a>
                <button onClick={onPrivacyClick} className="hover:text-black">Privacy</button>
                <button onClick={onTermsClick} className="hover:text-black">Terms</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
