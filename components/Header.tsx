import React, { useState, useEffect } from 'react';
import HamburgerIcon from './icons/HamburgerIcon';
import CloseIcon from './icons/CloseIcon';
import { portfolioData } from '../constants';
import XIcon from './icons/XIcon';
import InstagramIcon from './icons/InstagramIcon';


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { connect } = portfolioData;
  const xUrl = connect.socialLinks.find(link => link.platform === 'X')?.url || '#';
  const instaUrl = connect.socialLinks.find(link => link.platform === 'Instagram')?.url || '#';

  const navLinks = [
      { href: '#about', text: 'About' },
      { href: '#projects', text: 'Projects' },
      { href: '#connect', text: 'Connect' },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }

        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar, { passive: true });
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-20 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
        <nav className="mx-auto flex items-center justify-between px-4 lg:px-10 h-[76px] lg:h-[84px] max-w-screen-xl">
          {/* Left: Hamburger Menu Button */}
          <div className="flex-1 flex justify-start">
            <button
              className="z-30 p-2 -ml-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <HamburgerIcon />
            </button>
          </div>
          
          {/* Middle: Name */}
          <div className="flex-1 flex justify-center">
            <a href="#" aria-label="Home Page" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
              <span className="font-sans font-medium text-lg tracking-wide whitespace-nowrap">Dimitris Vatistas</span>
            </a>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex-1 flex justify-end items-center gap-3">
              <a href={xUrl} target="_blank" rel="noopener noreferrer" className="p-1 hidden sm:block hover:opacity-70 transition-opacity" aria-label="X">
                  <XIcon className="w-5 h-auto" />
              </a>
              <a href={instaUrl} target="_blank" rel="noopener noreferrer" className="p-1 hidden sm:block hover:opacity-70 transition-opacity" aria-label="Instagram">
                  <InstagramIcon className="w-5 h-auto" />
              </a>
          </div>
        </nav>
      </header>

      {/* Navigation Menu (Overlay) */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-5 h-[76px] lg:h-[84px] max-w-screen-xl mx-auto px-4 lg:px-10">
             <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2"
            >
                <CloseIcon />
            </button>
        </div>
        <div className="flex flex-col items-center justify-center h-[calc(100%-84px)]">
            <ul className={`space-y-8 text-center transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href} 
                    className="text-black font-sans text-4xl" 
                    onClick={handleNavClick}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </>
  );
};

export default Header;