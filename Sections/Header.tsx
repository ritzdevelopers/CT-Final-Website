import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Home, Clapperboard, Film, Mail, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  isDarkMode: boolean;
  navigateTo: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, navigateTo }) => {

  const location = useLocation();
  const currentPath = location.pathname;

  const logoUrl = "https://res.cloudinary.com/df4ax8siq/image/upload/v1770122693/2_alykqd.png";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // 👇 SAME nav structure, only added path internally
  const navItems = [
    { key: 'home', path: '/', label: 'Studio' },
    { key: 'services-page', path: '/services', label: 'Services' },
    { key: 'portfolio', path: '/portfolio', label: 'Portfolio' },
    { key: 'contact', path: '/contact', label: 'Contact' }
  ];

  const navIcons = {
    home: <Home size={16} className="opacity-80" />,
    'services-page': <Clapperboard size={16} className="opacity-80" />,
    portfolio: <Film size={16} className="opacity-80" />,
    contact: <Mail size={16} className="opacity-80" />,
  };

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('overflow-hidden');
      const l = (window as any).lenis;
      if (l?.stop) l.stop();
    } else {
      document.body.classList.remove('overflow-hidden');
      const l = (window as any).lenis;
      if (l?.start) l.start();
    }
  }, [mobileOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 8);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      animate={{
        y: hidden ? "-60px" : "0px",
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto"
      }}
      transition={{ y: { duration: 0.4 }, opacity: { duration: 0.35 } }}
      className={`fixed top-0 left-0 w-full z-[400] transition-colors duration-300 bg-zinc-950/85 backdrop-blur-md border-b border-white/10`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-1 md:py-5 flex items-center justify-between h-[95px]">

        {/* LOGO */}
        <button
          onClick={() => navigateTo('/')}
          className="flex items-center group outline-none"
        >
          <img
            src={logoUrl}
            alt="Contenaissance Logo"
            className={`h-[80px] sm:h-[100px] md:h-[9rem] w-auto max-w-full object-contain transition-all duration-700 group-hover:scale-105 ${!isDarkMode ? 'brightness-125 contrast-125' : ''}`}
          />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[13px] font-bold tracking-[0.05em] uppercase">
          {navItems.map(item => (
            <button
              key={item.key}
              onClick={() => navigateTo(item.path)}
              className={`transition-all duration-300 outline-none nav-glow ${currentPath === item.path ? 'text-[#ab8922]' : 'text-white'
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="w-[42px] hidden md:block" />

        {/* MOBILE BUTTON */}
        <button
          aria-label="Open navigation"
          onClick={() => setMobileOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-full w-5 h-5 text-white"
        >
          <div className="flex flex-col items-end gap-[5px]">
            <span className="block w-6 h-[3px] bg-white rounded-full" />
            <span className="block w-9 h-[3px] bg-white rounded-full" />
            <span className="block w-7 h-[3px] bg-white rounded-full" />
          </div>
        </button>
      </div>

      {/* 🔒 MOBILE MENU — UNTOUCHED DESIGN */}
      {mobileOpen && createPortal(
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed inset-0 z-[500] md:hidden bg-[#05070d] overflow-y-auto"
        >
          <div className="flex flex-col min-h-screen px-6 pt-6 pb-10 relative">

            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <img
                src={logoUrl}
                alt="Logo"
                className="h-10 object-contain"
              />

              <button
                onClick={() => setMobileOpen(false)}
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Center Content */}
            <div className="flex-1 flex flex-col justify-center items-center">

              <span className="text-[11px] tracking-[0.4em] uppercase text-white/40  my-5">
                Navigate
              </span>

              <div className="w-full max-w-[520px] space-y-4">

                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * idx }}
                    onClick={() => {
                      navigateTo(item.path);
                      setMobileOpen(false);
                    }}
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white uppercase tracking-[0.35em] text-[12px] flex items-center justify-between"
                  >
                    <span className="flex items-center gap-4">
                      {navIcons[item.key]}
                      {item.label}
                    </span>
                    <span className="w-10 h-[1px] bg-white/20" />
                  </motion.button>
                ))}

                {/* Get In Touch Button */}
                <button
                  onClick={() => {
                    navigateTo("/contact");
                    setMobileOpen(false);
                  }}
                  className="w-full mt-6 py-3 rounded-full bg-white text-black font-bold uppercase tracking-[0.35em] text-[12px]"
                >
                  Get In Touch  
                </button>
              </div>
            </div>

            {/* Bottom Tagline */}
            <div className="mt-12 text-center">
              <span className="text-[10px] tracking-[0.35em] uppercase text-white/30">
                Ritz Gen AI Storytelling Studios
              </span>
            </div>

          </div>
        </motion.div>,
        document.body
      )}
    </motion.header>
  );
};

export default Header;