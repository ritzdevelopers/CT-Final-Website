import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AiBrand from "./AiBrand";
import Digital from "./Digital";
import AiPower from "./AiPower";
import VisualIdentify from "./VisualIdentify";

interface ServicePageProps {
  isDarkMode: boolean;
}

export default function ServicePage({ isDarkMode }: ServicePageProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      // small timeout ensures DOM is fully rendered
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="bg-zinc-950">
      {/* Banner */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src="./service/banner.jpg"
          alt="AI Services Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end justify-end px-6 md:px-16 py-10 md:py-16">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            AI Services
          </h1>
        </div>
      </section>

      {/* Sections */}
      <section id="ai-brand">
        <AiBrand />
      </section>

      <section id="digital-first">
        <Digital />
      </section>

      <section id="ai-powered">
        <AiPower />
      </section>

      <section id="visual-identity">
        <VisualIdentify />
      </section>
    </div>
  );
}