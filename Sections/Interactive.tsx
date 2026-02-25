"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Interactive() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.75, 1],
        [1, 1, 0]
    );

    // Move slightly upward at bottom
    const y = useTransform(
        scrollYProgress,
        [0, 0.75, 1],
        [0, 0, -80]
    );

    // Slight scale down
    const scale = useTransform(
        scrollYProgress,
        [0, 0.75, 1],
        [1, 1, 0.95]
    );

    // Subtle blur
    const blur = useTransform(
        scrollYProgress,
        [0, 0.8, 1],
        ["0px", "0px", "8px"]
    );
    // const y = useTransform(scrollYProgress, [0, 0.9], [0, -120]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-black text-white overflow-hidden"
        >
            <motion.div
                style={{
                    opacity,
                    y,
                    scale,
                    filter: blur
                }}
                className="max-w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-10 py-5 md:py-20"
            >
                {/* Top Preview Video */}
                <div className="w-full flex justify-center mb-14 md:mb-20">
                    <div className="w-full max-w-full h-[180px] sm:h-[240px] md:h-auto rounded-2xl overflow-hidden border border-white/10">
                        <video
                            src="/aivdo.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Wrapper */}
                <div className="w-full">
                    {/* Heading */}
                    <h1 className="text-[clamp(2rem,8vw,4.5rem)] leading-tight font-light mb-10 md:mb-14 text-left">
                        Launch your Visually Stunning <br />
                        <span className="font-extrabold">
                            Interactive 3D Website.
                        </span>
                    </h1>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                        {/* Buttons Section */}
                        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center md:items-center md:justify-end">

                            <button
                                className="relative z-10 px-6 py-3 text-sm sm:text-base font-medium border border-white/20 bg-[#0A0D2D] text-white overflow-hidden group transition duration-300 hover:text-black"
                            >
                                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                                <span className="relative z-10">Book Now</span>
                            </button>

                            <button
                                className="relative z-10 px-6 py-3 text-sm sm:text-base  border border-white/20 bg-white text-black overflow-hidden group transition duration-300 hover:text-white font-medium"
                            >
                                <span className="absolute inset-0 bg-[#0A0D2D] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                                <span className="relative z-10 ">Get started — it's free</span>
                            </button>

                           
                        </div>

                        {/* Right Video */}
                        <div className="w-full flex justify-center ">
                            <div className="w-full max-w-sm h-[420px] sm:h-[350px] md:h-[500px]">
                                <video
                                    src="https://res.cloudinary.com/df4ax8siq/video/upload/v1769146036/VID_20251225_173528_892_zhqspw.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-contain md:object-cover "
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
}