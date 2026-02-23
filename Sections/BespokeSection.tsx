"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BespokeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const total = cards.length;

      // ===== INITIAL STACK STATE =====
      gsap.set(cards, {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateY: 0, // 👈 slight right tilt
        rotateX: 0,
        scale: 1,
        transformOrigin: "center center",
      });

      // Proper stacking (last card at bottom)
      cards.forEach((card, i) => {
        card.style.zIndex = String(total - i);
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90",
          end: "+=1500",
          scrub: 0.2,
          pin: true,
        },
      });

      // ===== PHASE 1 — DEPTH LIFT =====
      tl.to(cards, {
        y: (i) => -i * 20,
        rotate: (i) => i * 2,
        rotateY: -50,   // 👈 slightly more right tilt
        rotateX: 8,
        duration: 0.2,
        ease: "power2.out",
      });

      // ===== PHASE 2 — SPREAD FROM BOTTOM CARD =====
      tl.to(cards, {
        x: (i) => i * 90,
        y: (i) => -i * 40,
        rotate: (i) => i * -3,
        rotateY: -59,   // 👈 maintain right tilt
        duration: 1,
        ease: "power3.out",
        stagger: {
          each: 0.08, // 🔥 faster stagger
          from: "end",
        },
      });

      // ===== PHASE 3 — CINEMATIC EXIT =====
      tl.to(cards, {
        x: "-=1600",
        y: "+=650",
        rotate: 0,
        duration: 1,
        ease: "power4.inOut",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
    "https://images.unsplash.com/photo-1558655146-d09347e92766",
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
    "https://images.unsplash.com/photo-1551434678-e076c223a692",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
    "https://images.unsplash.com/photo-1558655146-d09347e92766",

  ];

  return (
    <div className="bg-black text-white">
      <div style={{ height: "20vh" }} />

      <section
        ref={sectionRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          perspective: "1400px",
          perspectiveOrigin: "center center",
        }}
      >
        {/* 3D Cards */}
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="absolute w-[180px] h-[220px] rounded-3xl overflow-hidden
            shadow-[0_80px_140px_rgba(0,0,0,0.6)]"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={`${src}?auto=format&fit=crop&w=1000&q=90`}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        ))}

        {/* CENTER CONTENT */}
        <div className="absolute z-50 text-center max-w-3xl px-6 pointer-events-none top-[70%] -translate-y-1/2 animate-[float_6s_ease-in-out_infinite]">
          <h1 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
            Bespoke <span className="font-medium">PeachWeb</span>
            <br />
            <span className="font-light opacity-80">
              3D Sites from $9k
            </span>
          </h1>

          <button
            className="group relative pointer-events-auto mt-5 px-8 py-4 rounded-2xl
  border border-white/40 backdrop-blur-md
  overflow-hidden transition-all duration-500 hover:scale-105"
          >
            {/* Sliding background */}
            <div
              className="absolute inset-0 bg-white
    translate-x-[-100%] group-hover:translate-x-0
    transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />

            {/* Glow pulse */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100
    bg-white/20 blur-2xl transition-opacity duration-700"
            />

            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-500">
              Book a Call
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}