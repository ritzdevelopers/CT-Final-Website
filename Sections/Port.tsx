
import React, { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Reels from './Reels';

interface PortProps {
  isDarkMode: boolean;
}

const BrandFilmCard: React.FC<{
  title: string;
  video: string;
  category: string;
  isDarkMode: boolean;
  index: number;
}> = ({ title, video, category, isDarkMode, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      // Unmute and ensure it's playing with sound
      videoRef.current.muted = false;
      videoRef.current.play().catch(e => {
        console.warn("Audio/Video playback failed:", e);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      // Mute and continue silent loop
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  };

  return (
    <motion.div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        scale: 1.08, 
        y: -25,
        zIndex: 100,
        boxShadow: "0 40px 70px -15px rgba(59, 130, 246, 0.4)" 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className="relative w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-video rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 flex-shrink-0 transition-all cursor-pointer group bg-zinc-900"
    >
      {/* Video content - using single ref for perfectly synced audio/video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
      
      {/* Brand Labeling */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 text-center px-6">
        <motion.span 
          animate={{ opacity: isHovered ? 1 : 0.4 }}
          className="text-[8px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-white mb-2 block"
        >
          {category}
        </motion.span>
        <h4 className="text-sm md:text-xl font-bold tracking-tight text-white leading-tight mb-3 uppercase font-sora">
          {title}
        </h4>
        <div className="w-12 h-[1px] bg-blue-500/50 mx-auto rounded-full transition-all duration-500 group-hover:w-24 group-hover:bg-blue-500" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      {/* Modern Audio status indicator */}
      {isHovered && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-8 right-8 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
        >
          <div className="flex gap-[3px] items-end h-3">
            {[1, 2, 3, 4, 5].map(i => (
              <motion.div 
                key={i}
                animate={{ height: [4, 14, 6, 12, 4] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.12 }}
                className="w-[2px] bg-blue-400 rounded-full"
              />
            ))}
          </div>
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-blue-400">Cinematic Audio</span>
        </motion.div>
      )}
    </motion.div>
  );
};

const Port: React.FC<PortProps> = ({ isDarkMode }) => {
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

  const duplicatedFilms = [...brandFilms, ...brandFilms];

  return (
    <section className="pt-40 md:pt-48 pb-24 max-w-full overflow-hidden relative bg-zinc-950">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .port-marquee-inner {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
        .port-marquee-container:hover .port-marquee-inner {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mb-20 md:mb-32 flex flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-16 h-[1px] bg-blue-500/30" />
          <span className="text-[11px] font-bold tracking-[0.6em] uppercase text-white/40">
            Featured Productions
          </span>
          <div className="w-16 h-[1px] bg-blue-500/30" />
        </motion.div>
        <h2 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter text-white uppercase font-sora text-center leading-[0.8] mb-4">
          Brand Films
        </h2>
      </div>

      <div className="relative w-full overflow-visible py-20 port-marquee-container">
        {/* Depth gradients */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-96 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent z-40 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-96 bg-gradient-to-l from-zinc-950 via-zinc-950/40 to-transparent z-40 pointer-events-none" />

        <div className="port-marquee-inner flex gap-8 md:gap-16 px-12">
          {duplicatedFilms.map((film, index) => (
            <BrandFilmCard 
              key={index}
              title={film.title}
              video={film.video}
              category={film.category}
              isDarkMode={isDarkMode}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="h-[1px] w-full bg-white/5 my-32 max-w-[1400px] mx-auto px-6" />

      <div className="max-w-[1400px] mx-auto">
        <Reels isDarkMode={isDarkMode} />
      </div>
    </section>
  );
};

export default Port;
