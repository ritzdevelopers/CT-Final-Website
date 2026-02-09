import React, { useMemo, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Reels from './Reels';

interface PortfolioProps {
  isDarkMode: boolean;
}

const BrandFilmCard: React.FC<{
  title: string;
  video: string;
  category: string;
  isDarkMode: boolean;
  index: number;
}> = ({ title, video, category, isDarkMode, index }) => {
  return (
    <motion.div 
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        zIndex: 50,
        boxShadow: "0 20px 40px -10px rgba(255, 255, 255, 0.05)" 
      }}
      className="relative w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-video rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 flex-shrink-0 transition-all cursor-pointer group"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
      
      {/* Brand Labeling - Decreased text sizes */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center px-4">
        <span className="text-[7px] md:text-[8px] font-bold tracking-[0.4em] uppercase text-white/40 mb-1 block">
          {category}
        </span>
        <h4 className="text-[12px] md:text-base font-bold tracking-tight text-white leading-tight mb-2 uppercase">
          {title}
        </h4>
        <div className="w-8 h-[1px] bg-white/20 mx-auto rounded-full transition-all group-hover:w-16 group-hover:bg-white/40" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
};

const Portfolio: React.FC<PortfolioProps> = ({ isDarkMode }) => {
  const brandFilms = useMemo(() => [
    {
      title: "Gulshan Luxury",
      category: "Architectural Narrative",
      video: "https://res.cloudinary.com/df4ax8siq/video/upload/v1769147668/Gulshan_Brand_1_1_ebdpjy.mp4"
    },
    {
      title: "Namah Wellness",
      category: "Cinematic Identity",
      video: "https://res.cloudinary.com/df4ax8siq/video/upload/v1769147707/Namah_Brand_1_1_ynlq46.mp4"
    },
    {
      title: "MPF Narrative",
      category: "Horizontal Narrative",
      video: "https://res.cloudinary.com/df4ax8siq/video/upload/v1769084096/1_vmbyoo.mp4"
    },
    {
      title: "RMW Synthesis",
      category: "Neural Core",
      video: "https://res.cloudinary.com/df4ax8siq/video/upload/v1769084093/3_knelxc.mp4"
    },
    {
      title: "Lumora Safari",
      category: "Immersive Design",
      video: "https://res.cloudinary.com/df4ax8siq/video/upload/v1769086501/Lumora__Jungle_Safari_1_1_rzdyik.mp4"
    }
  ], []);

  // Scroll state/refs for manual control
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="pt-40 md:pt-48 pb-32 md:pb-40 max-w-full overflow-hidden relative bg-zinc-950">
      {/* Brand Films Title - Removed Cinematic Motion text */}
      <div className="mb-16 md:mb-24 flex flex-col items-center px-6">
        <h2 className="text-5xl md:text-9xl font-bold tracking-tighter text-white uppercase font-sora text-center">
          Brand Films
        </h2>
        <span className="block text-xl md:text-2xl font-medium tracking-tight text-white/70 mt-4">
          Vertical Productions
        </span>
      </div>

      <div className="relative w-full py-10">
        {/* Depth Fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-zinc-950 to-transparent z-40 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-zinc-950 to-transparent z-40 pointer-events-none" />

        {/* Navigation buttons (same style as Reels) */}
        <AnimatePresence>
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            onClick={() => scroll('left')}
            className={`absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white z-50 hover:bg-white hover:text-black transition-all shadow-2xl ${
              canScrollLeft ? '' : 'opacity-40 pointer-events-none'
            }`}
          >
            <ChevronLeft size={24} />
          </motion.button>
        </AnimatePresence>

        <AnimatePresence>
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            onClick={() => scroll('right')}
            className={`absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white z-50 hover:bg-white hover:text-black transition-all shadow-2xl ${
              canScrollRight ? '' : 'opacity-40 pointer-events-none'
            }`}
          >
            <ChevronRight size={24} />
          </motion.button>
        </AnimatePresence>

        {/* Manual scroll carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 md:gap-12 overflow-x-auto no-scrollbar px-6"
        >
          {brandFilms.map((film, index) => (
            <BrandFilmCard
              key={index}
              title={film.title}
              video={film.video}
              category={film.category}
              isDarkMode={isDarkMode}
              index={index}
            />
          ))}
          <div className="w-6 md:w-12 flex-shrink-0" />
        </div>
      </div>

      {/* Increased spacing between sections */}
      <div className="h-[1px] w-full bg-white/5 my-80 md:my-96 max-w-[1400px] mx-auto px-6" />

      {/* AI Reels Section */}
      <div className="max-w-[1400px] mx-auto">
        <Reels isDarkMode={isDarkMode} />
      </div>
    </section>
  );
};

export default Portfolio;