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

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    const spreadX = isMobile ? 45 : isTablet ? 70 : 110;
    const liftY = isMobile ? 15 : 25;
    const exitX = isMobile ? -800 : -1600;
    const exitY = isMobile ? 400 : 650;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const total = cards.length;

      // Initial state
      gsap.set(cards, {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        transformOrigin: "center center",
      });

      cards.forEach((card, i) => {
        card.style.zIndex = String(total - i);
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1800",
          scrub: 0.5,
          pin: true,
        },
      });

      // PHASE 1 – Lift
      tl.to(cards, {
        y: (i) => -i * liftY,
        rotate: (i) => i * 2,
        rotateY: -15,
        rotateX: 6,
        duration: 0.4,
        ease: "power2.out",
      });

      // PHASE 2 – Spread
      tl.to(cards, {
        x: (i) => i * spreadX,
        y: (i) => -i * (liftY * 2),
        rotate: (i) => i * -3,
        rotateY: -55,
        duration: 1,
        ease: "power3.out",
        stagger: {
          each: 0.06,
          from: "end",
        },
      });

      // PHASE 3 – Exit
      tl.to(cards, {
        x: exitX,
        y: exitY,
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
    <div className="bg-zinc-950 text-white">
      <div className="h-[15vh] md:h-[20vh]" />

      <section
        ref={sectionRef}
        className="relative h-screen flex items-center justify-center overflow-hidden px-4"
        style={{
          perspective: "1600px",
        }}
      >
        {/* Cards */}
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="
              absolute
              w-[120px] h-[160px]
              sm:w-[140px] sm:h-[180px]
              md:w-[170px] md:h-[210px]
              lg:w-[190px] lg:h-[230px]
              rounded-2xl md:rounded-3xl
              overflow-hidden
              shadow-[0_40px_100px_rgba(0,0,0,0.6)]
            "
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

        {/* Center Content */}
        <div className="absolute z-50 text-center max-w-xl md:max-w-3xl px-4 pointer-events-none top-[70%] -translate-y-1/2">
          <h1 className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-light leading-tight tracking-tight
          ">
            Crafted <span className="font-medium">in 3D</span>
            <br />
            <span className="opacity-80 text-base sm:text-lg md:text-xl">
              Immersive Web Experiences
            </span>
          </h1>

          <button
            className="
              group relative pointer-events-auto
              mt-6 px-6 py-3 md:px-8 md:py-4
              rounded-xl md:rounded-2xl
              border border-white/40 backdrop-blur-md
              overflow-hidden transition-all duration-500 hover:scale-105
              text-sm md:text-base
            "
          >
            <div
              className="absolute inset-0 bg-white
              translate-x-[-100%] group-hover:translate-x-0
              transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
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