
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Home, Clapperboard, Film, Mail, X } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  currentPage: 'home' | 'portfolio' | 'services' | 'contact';
  navigateTo: (page: 'home' | 'portfolio' | 'services' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, currentPage, navigateTo }) => {
  const logoUrl = "https://res.cloudinary.com/df4ax8siq/image/upload/v1770122693/2_alykqd.png";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems: Array<{ key: 'home' | 'services' | 'portfolio' | 'contact'; label: string }> = [
    { key: 'home', label: 'Studio' },
    { key: 'services', label: 'Services' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'contact', label: 'Contact' }
  ];
  const navIcons: Record<'home' | 'services' | 'portfolio' | 'contact', React.ReactNode> = {
    home: <Home size={16} className="opacity-80" />,
    services: <Clapperboard size={16} className="opacity-80" />,
    portfolio: <Film size={16} className="opacity-80" />,
    contact: <Mail size={16} className="opacity-80" />,
  };

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('overflow-hidden');
      const l = (window as any).lenis;
      if (l && typeof l.stop === 'function') l.stop();
    } else {
      document.body.classList.remove('overflow-hidden');
      const l = (window as any).lenis;
      if (l && typeof l.start === 'function') l.start();
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      const l = (window as any).lenis;
      if (l && typeof l.start === 'function') l.start();
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header className={`fixed top-0 left-0 w-full z-[400] pointer-events-auto transition-colors duration-300 ${scrolled ? 'bg-zinc-950/85 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-1 md:py-5 flex items-center justify-between h-[95px]">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center group outline-none"
          >
            <img 
              src={logoUrl} 
              alt="Contenaissance Logo" 
              className={`h-[80px] sm:h-[100px] md:h-[9rem] w-auto max-w-full object-contain transition-all duration-700 group-hover:scale-105 ${!isDarkMode ? 'brightness-125 contrast-125' : ''}`}
              loading="eager"
              decoding="async"
            />
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-[13px] font-bold tracking-[0.1em] uppercase">
          {navItems.map(item => (
            <button
              key={item.key}
              onClick={() => navigateTo(item.key)}
              className={`transition-all duration-300 outline-none nav-glow ${currentPage === item.key ? 'text-[#ab8922]' : 'text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="w-[42px] hidden md:block" />

        <button
          aria-label="Open navigation"
          onClick={() => setMobileOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-full  w-5 h-5 text-white"
        >
          <span className="sr-only">Open navigation</span>
          <div className="flex flex-col items-end gap-[5px]">
            <span className="block w-6 h-[3px] bg-white rounded-full" />
            <span className="block w-9 h-[3px] bg-white rounded-full" />
            <span className="block w-7 h-[3px] bg-white rounded-full" />
          </div>
        </button>
      </div>

      {mobileOpen && createPortal(
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="fixed inset-0 z-[500] md:hidden bg-zinc-950 backdrop-blur-md border-b border-white/10 overflow-y-auto"
        >
          <div className="flex flex-col min-h-screen">
            <div className="flex items-center justify-between px-6 pt-6">
              <img src={logoUrl} alt="Contenaissance Logo" className="h-12 w-auto object-contain" />
              <button
                aria-label="Close navigation"
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-white/10 bg-zinc-900/60 w-10 h-10 text-white flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-amber-400/6 blur-3xl" />
            <div className="flex-1 px-6 py-0 md:py-10 flex flex-col items-center justify-center gap-4">
              <div className="mb-4 text-center">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Navigate</span>
              </div>
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * (idx + 1) }}
                  onClick={() => {
                    navigateTo(item.key);
                    setMobileOpen(false);
                  }}
                  className={`w-full max-w-[520px] px-6 py-4 rounded-2xl border border-white/10 bg-zinc-900/40 text-white font-bold uppercase tracking-[0.35em] text-[11px] flex items-center justify-between ${currentPage === item.key ? 'border-amber-400/30 shadow-amber-400/10' : ''}`}
                >
                  <span className="flex items-center gap-3">
                    {navIcons[item.key]}
                    {item.label}
                  </span>
                  <span className="w-8 h-[1px] bg-white/10" />
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => {
                  navigateTo('contact');
                  setMobileOpen(false);
                }}
                className="w-full max-w-[520px] py-4 rounded-full font-bold uppercase tracking-[0.35em] text-[11px] bg-white text-zinc-950 shadow-2xl"
              >
                Get In Touch
              </motion.button>
              <div className="mt-6 text-center">
                <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-white/40">Ritz Gen AI Storytelling Studios</span>
              </div>
            </div>
          </div>
        </motion.div>,
        document.body
      )}
    </motion.header>
  );
};

export default Header;
