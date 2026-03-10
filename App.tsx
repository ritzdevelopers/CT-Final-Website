import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Services from "./Sections/Services";
import Reels from "./Sections/Reels";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import SnowEffect from "./Sections/SnowEffect";
import AIQuote from "./Sections/AIQuote";
import BespokeSection from "./Sections/BespokeSection";
import Interactive from "./Sections/Interactive";
import Experts from "./Sections/Experts";
import MosaicSection from "./Sections/MosaicSection";
import ServicePage from "./Sections/Services/ServicePage";
import PortfolioPage from "./Sections/Portfolio/PortfolioPage";

const App: React.FC = () => {
  const [isDarkMode] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // navigation function
  const navigateTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-zinc-950 text-zinc-100">

      <AnimatePresence>
        {isDarkMode && (
          <motion.div
            key="snow-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <SnowEffect />
          </motion.div>
        )}
      </AnimatePresence>

      <Header
        isDarkMode={isDarkMode}
        navigateTo={navigateTo}
      />

      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            {/* HOME */}
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hero isDarkMode={isDarkMode} navigateTo={navigateTo} />
                  <AIQuote isDarkMode={isDarkMode} />
                  <Reels isDarkMode={isDarkMode} />
                  <Interactive isDarkMode={isDarkMode} />
                  <Services isDarkMode={isDarkMode} navigateTo={navigateTo} />
                  <BespokeSection isDarkMode={isDarkMode} />
                  <Experts isDarkMode={isDarkMode} />
                  <MosaicSection isDarkMode={isDarkMode} />
                  <Contact isDarkMode={isDarkMode} isFullPage={false} />
                </motion.div>
              }
            />

            {/* PORTFOLIO */}
            <Route
              path="/portfolio"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <PortfolioPage isDarkMode={isDarkMode} />
                </motion.div>
              }
            />

            {/* SERVICES */}
            <Route
              path="/services"
              element={
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <ServicePage isDarkMode={isDarkMode} />
                  <div className="border-t border-white/5 pt-12">
                    <Contact isDarkMode={isDarkMode} isFullPage={false} />
                  </div>
                </motion.div>
              }
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact isDarkMode={isDarkMode} isFullPage />
                </motion.div>
              }
            />

          </Routes>
        </AnimatePresence>
      </main>

      <Footer
        isDarkMode={isDarkMode}
        navigateTo={navigateTo}
      />
    </div>
  );
};

export default App;