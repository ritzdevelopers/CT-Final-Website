
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
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 hover:border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp 
            size={24} 
            className="transition-transform duration-300 group-hover:-translate-y-1" 
          />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
