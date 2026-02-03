
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeaderProps {
  isDarkMode: boolean;
  currentPage: 'home' | 'portfolio' | 'services' | 'contact';
  navigateTo: (page: 'home' | 'portfolio' | 'services' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, currentPage, navigateTo }) => {
  const { scrollY } = useScroll();
  
  // Header fades out between 0 and 200px scroll
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const pointerEvents = useTransform<number, string>(scrollY, [0, 200], ['auto', 'none']);

  const logoUrl = "https://res.cloudinary.com/df4ax8siq/image/upload/v1770122693/2_alykqd.png";

  return (
    <motion.header 
      style={{ opacity, pointerEvents }}
      className="fixed top-0 left-0 w-full z-50 pointer-events-auto"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center group outline-none"
          >
            <img 
              src={logoUrl} 
              alt="Contenaissance Logo" 
              className={`h-[80px] sm:h-[100px] md:h-44 w-auto max-w-full object-contain transition-all duration-700 group-hover:scale-105 ${!isDarkMode ? 'brightness-125 contrast-125' : ''}`}
              loading="eager"
              decoding="async"
            />
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.3em] uppercase">
          <button 
            onClick={() => navigateTo('home')}
            className={`transition-all duration-300 outline-none nav-glow ${currentPage === 'home' ? 'text-blue-500' : 'text-white'}`}
          >
            Studio
          </button>
          <button 
            onClick={() => navigateTo('services')}
            className={`transition-all duration-300 outline-none nav-glow ${currentPage === 'services' ? 'text-blue-500' : 'text-white'}`}
          >
            Services
          </button>
          <button 
            onClick={() => navigateTo('portfolio')}
            className={`transition-all duration-300 outline-none nav-glow ${currentPage === 'portfolio' ? 'text-blue-500' : 'text-white'}`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => navigateTo('contact')}
            className={`transition-all duration-300 outline-none nav-glow ${currentPage === 'contact' ? 'text-blue-500' : 'text-white'}`}
          >
            Contact
          </button>
        </nav>

        {/* Theme toggle removed for a minimal, fixed-theme aesthetic */}
        <div className="w-[42px] hidden md:block" />
      </div>
    </motion.header>
  );
};

export default Header;
