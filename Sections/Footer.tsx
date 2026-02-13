
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  isDarkMode: boolean;
  currentPage?: 'home' | 'portfolio' | 'services' | 'contact';
  navigateTo?: (page: 'home' | 'portfolio' | 'services' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, currentPage, navigateTo }) => {
  const scrollToTop = () => {
    const l = (window as any).lenis;
    if (l && typeof l.scrollTo === 'function') {
      l.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12">
      <div className="flex items-center justify-center">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.15, y: -8 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-all duration-300 group shadow-lg shadow-black/40 hover:shadow-amber-500/20 overflow-hidden"
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 rounded-full ring-1 ring-white/10 opacity-100 transition-opacity duration-300" />
          <ArrowUp 
            size={24} 
            className="relative z-10 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-amber-300 drop-shadow-lg" 
            strokeWidth={2.5}
          />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
