"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Interactive() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!sectionRef.current || !previewRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                previewRef.current,
                {
                    scale: 0.30, //  smaller from start
                    borderRadius: "30px",
                },
                {
                    scale: 1,
                    borderRadius: "0px",
                    ease: "none",
                    force3D: true,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=250%", //  more scroll distance
                        scrub: 1.5,     //  smoother interpolation
                        pin: ".pin-wrapper",
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-zinc-950 text-white"
        >
            {/* TOP PREVIEW */}
            <div className="pin-wrapper relative w-full flex justify-center py-24 z-10">
                <div
                    ref={previewRef}
                    className="w-[100vw] max-w-full aspect-video overflow-hidden will-change-transform"
                    style={{ transformOrigin: "center center" }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/ibNrPjETR_k?autoplay=1&mute=1&loop=1&playlist=ibNrPjETR_k&controls=0&modestbranding=1"
                        className="w-full h-full object-cover"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                </div>
            </div>

            {/* CONTENT BELOW */}
            <div className="relative z-20 max-w-6xl mx-auto px-6 py-8">
                <h1 className="text-[clamp(2rem,8vw,4.5rem)] leading-tight font-light mb-14">
                    Launch your Visually Stunning <br />
                    <span className="font-extrabold">
                        Interactive 3D Website.
                    </span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col sm:flex-row gap-6 items-center md:justify-end">

                        {/* Book Now */}
                        <button className="relative overflow-hidden px-6 py-3 border border-white/20 text-white group">
                            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                                Book Now
                            </span>
                        </button>

                        {/* Get Started */}
                        <button className="relative overflow-hidden px-6 py-3 border border-white/20 text-black bg-white group">
                            <span className="absolute inset-0 bg-[#0A0D2D] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                                Get started — it's free
                            </span>
                        </button>

                    </div>

                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-sm h-[420px]">
                            <video
                                src="https://res.cloudinary.com/df4ax8siq/video/upload/v1769146036/VID_20251225_173528_892_zhqspw.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}