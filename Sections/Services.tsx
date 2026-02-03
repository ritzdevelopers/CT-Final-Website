
import React from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';

interface ServicesProps {
  isDarkMode: boolean;
  isFullPage?: boolean;
}

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  isDarkMode: boolean;
  delay: number;
}> = ({ title, description, icon, isDarkMode, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="perspective-1000 group"
    >
      <motion.div
        whileHover={{ rotateY: 3, rotateX: -3, translateZ: 10 }}
        className="relative h-full p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 transform-style-3d bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800 hover:shadow-2xl hover:shadow-blue-500/10"
      >
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-zinc-800 text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110">
          {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 28 })}
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-1 transition-transform text-white">
          {title}
        </h3>
        
        <p className="text-sm font-light leading-relaxed text-white/50">
          {description}
        </p>
        
        <div className="absolute -inset-[1px] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-blue-500/20 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC<ServicesProps> = ({ isDarkMode, isFullPage = false }) => {
  const allServices = [
    {
      title: "AI Brand Films",
      description: "Cinematic storytelling powered by advanced generative AI, blending live action with synthetic environments.",
      icon: <Video />,
    },
    {
      title: "AI Development",
      description: "Engineering bespoke neural architectures and custom LLM integrations that power your brand's unique digital ecosystem.",
      icon: <Code />,
    },
    {
      title: "AI Automation",
      description: "Deploying agentic workflows and automated production pipelines that transform operational speed into a competitive advantage.",
      icon: <Cpu />,
    },
    {
      title: "Brand Narrative Architecture",
      description: "Structuring future-proof brand stories that adapt and evolve across all digital and AI touchpoints.",
      icon: <Layers />,
    },
    {
      title: "Digital-First Content",
      description: "High-velocity content creation designed specifically for modern consumption platforms and social ecosystems.",
      icon: <Smartphone />,
    },
    {
      title: "Visual Identity Systems",
      description: "Comprehensive aesthetic frameworks that define how your brand looks and feels in an AI-driven world.",
      icon: <Palette />,
    },
    {
      title: "Hyper Realistic Content",
      description: "Pushing the boundaries of realism with AI synthesis that is indistinguishable from traditional high-end photography.",
      icon: <Sparkles />,
    },
    {
      title: "AI-Powered Campaigns",
      description: "Data-informed creative campaigns that leverage AI tools for unprecedented scale and personalization.",
      icon: <Target />,
    },
    {
      title: "Video & Motion Design",
      description: "Dynamic motion graphics and kinetic typography that breathe life into your brand's digital presence.",
      icon: <Clapperboard />,
    }
  ];

  return (
    <section id="services" className={`${isFullPage ? 'pt-40 md:pt-48' : '-mt-8 py-8 md:py-12'} px-6 max-w-[1400px] mx-auto`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white"
          >
            AI Services
          </motion.h2>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-xs text-lg font-light leading-relaxed text-white/70"
        >
          Merging human creative intuition with the raw power of neural intelligence.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-0">
        {allServices.map((service, index) => (
          <ServiceCard 
            key={index}
            delay={index * 0.1}
            isDarkMode={isDarkMode}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
