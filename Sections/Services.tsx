"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Video,
  Layers,
  Smartphone,
  Palette,
  Sparkles,
  Target,
  Clapperboard,
  Code,
  Cpu
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServicesProps {
  isDarkMode: boolean;
  isFullPage?: boolean;
}

/* ========================= */
/* ORIGINAL CARD (UNCHANGED STYLE) */
/* ========================= */

const ServiceCard: React.FC<{
  title: string;
  description: string;
  delay: number;
}> = ({ title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative group "
    >
      {/* Outer Glow */}
      <div className="absolute -inset-[1px] rounded-[28px] opacity-30 
    group-hover:opacity-70 transition duration-500 
     
    pointer-events-none"
      />

      {/* Main Card */}
      <div className="relative rounded-[28px] border border-[#3A3A3E] 
                      p-5 sm:p-6 md:p-8 lg:p-5 text-justify
                      overflow-hidden transition-all duration-500
                      bg-gradient-to-b from-white/[0.02] to-white/[0.01]
                      backdrop-blur-xl
                      group-hover:-translate-y-2
                      group-hover:scale-[1.02]
                      group-hover:border-blue-500/40
                      group-hover:shadow-[0_20px_60px_-10px_rgba(59,130,246,0.25)]"
      >
        {/* Premium Gradient Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent blur-2xl" />
        </div>

        {/* Inner Glass Container */}
        <div className="font-sora bg-zinc-900/40 rounded-[22px] p-5 sm:p-6 md:p-8 lg:p-8 "
        >
          {/* Badge */}
          <div className="inline-block mb-4 sm:mb-5">
            <span className="font-sora px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-[#3B82F6] text-white">
              Use Case
            </span>
          </div>

          {/* Title */}
          <h3 className="font-sora text-lg sm:text-xl md:text-2xl lg:text-2xl 
        font-semibold text-white mb-3 tracking-tight"
          >
            {title}
          </h3>

          {/* Description */}
          <p className="font-sora text-xs sm:text-sm md:text-base 
        text-white/60 leading-relaxed"
          >
            {description}
          </p>

          {/* Explore */}
          <div className="mt-5 sm:mt-6">
            <span className="text-yellow-500 font-medium text-xs sm:text-sm 
          flex items-center gap-2 
          group-hover:gap-3 transition-all duration-300"
            >
              Explore More
              <span className="transition-transform duration-300 group-hover:translate">
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ========================= */
/* SECTION */
/* ========================= */

const Services: React.FC<ServicesProps> = ({
  isDarkMode,
  isFullPage = false
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fishRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -80]);

  useEffect(() => {
    if (!sectionRef.current || !fishRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(fishRef.current, {
        x: -600,
        y: 1000,
        rotation: -25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom top",
          scrub: 2
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const allServices = [
    {
      title: "AI Brand Films",
      description: "Discover how to turn your brand story into a cinematic experience via AI-driven 3D technology.  We use generative AI to make brand films with dynamic live action in a synthetic environment that boosts your brand and captures imagination!"
    },
    {
      title: "Digital-First Content",
      description: "Design high-velocity content for any modern digital consumption platform. Using advanced AI tools, we help you craft compelling and contextual visuals that connect with your audience across diverse social ecosystems."
    },
    {
      title: "AI-Powered Campaigns",
      description: "Enhance campaigns with AI and scale marketing. Our strategies are based on data and performance, guaranteeing you the best ROI for your digital marketing budget."
    },
    {
      title: "Visual Identity Systems",
      description: "Create your brand’s AI- driven visual identity system. We design brand frameworks that are memorable and scalable and apply the necessary look and feel to brand touchpoints in an AI - enabled world."
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`relative overflow-hidden min-h-[150vh] bg-zinc-950 ${isFullPage ? "pt-40 md:pt-56" : "-mt-8 py-8 md:py-12"
        } px-5 md:px-24 max-w-[1600px] mx-auto`}
    >
      {/* Header */}
      <div className="relative z-10 flex flex-col mb-14">
        <motion.div
          style={{ opacity, y }}
          className="flex items-center gap-3 mb-4 "
        >
          <div className="w-8 h-[1px] bg-blue-500/50" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/50">
            Expertise
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2rem,10vw,11rem)] font-bold tracking-tighter text-white leading-none"
        >
          AI Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg font-light text-white/70 mt-4"
        >
          Merging human creative intuition with the raw power of neural intelligence.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  font-sora ">
        {allServices.map((service, index) => (
          <ServiceCard
            key={index}
            delay={index * 0.1}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;