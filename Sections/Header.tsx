
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeaderProps {
  isDarkMode: boolean;
  currentPage: 'home' | 'portfolio' | 'services' | 'contact';
  navigateTo: (page: 'home' | 'portfolio' | 'services' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, currentPage, navigateTo }) => {
  const [imgError, setImgError] = useState(false);
  const { scrollY } = useScroll();
  
  // Header fades out between 0 and 200px scroll
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const pointerEvents = useTransform<number, string>(scrollY, [0, 200], ['auto', 'none']);

  const logoUrl = "https://lh3.googleusercontent.com/pw/AP1GczMeZhP8dhPe1FqZ9pPOAg3Shz_uxFzt6vqktkdykKO9AymDimeLcFQSl_e1KJm3_RIoNWSId27-vq7mWF2iD_W4iwP6tQ1x7APAUnHNYJwj8IYwJGPPqwBq5oXbNAl9gqKBKg_zAvQs0rXaA2wBpb3brw=w2028-h2028-s-no-gm?authuser=0";

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
            {!imgError ? (
              <img 
                src={logoUrl} 
                alt="Contenaissance Logo" 
                onError={() => setImgError(true)}
                className={`h-[100px] md:h-44 w-auto object-contain transition-all duration-700 group-hover:scale-105 ${!isDarkMode ? 'brightness-125 contrast-125' : ''}`}
              />
            ) : (
              <span className="text-xl font-bold tracking-tighter uppercase font-sora text-white">
                Contenaissance<span className="text-blue-500">.</span>
              </span>
            )}
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
