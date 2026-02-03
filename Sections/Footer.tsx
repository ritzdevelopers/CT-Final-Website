
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigateTo?.('home');
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12">
      <div className="flex items-center justify-center">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.15, y: -8 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 flex items-center justify-center transition-all duration-300 group shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-purple-500/50 overflow-hidden"
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <ArrowUp 
            size={24} 
            className="relative z-10 text-white transition-transform duration-300 group-hover:-translate-y-1 drop-shadow-lg" 
            strokeWidth={2.5}
          />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
