"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Interactive() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Track scroll only inside this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Fade out on scroll
    const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.9], [0, -120]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-black text-white overflow-hidden"
        >
            <motion.div
                style={{ opacity, y }}
                className="max-w-full mx-auto px-6 md:px-16 py-20 md:py-10"
            >
                {/* Top Preview Video */}
                <div className="w-full flex justify-center mb-20">
                    <div className="w-full max-w-5xl h-[220px] md:h-[350px] rounded-xl overflow-hidden border border-white/10">
                        <video
                            src="https://files.peachworlds.com/website/0e5f237e-0e45-4db9-8798-8e340bff43f0/peachwebsitevideo-2b.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>


                <div className="px-6 md:px-30">

                    {/* Heading */}
                    <h1 className="text-[clamp(2rem,10vw,4.5rem)] leading-tight font-light mb-12">
                        Launch your Visually Stunning <br />
                        <span className="font-extrabold ">
                            Interactive 3D Website.
                        </span>
                    </h1>

                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Buttons */}
                        <div className="flex gap-6 items-center md:justify-end">
                            <button className="border border-white/30 px-6 py-3 text-sm hover:border-white transition duration-300">
                                Book Now
                            </button>

                            <button className="bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition duration-300">
                                Get started — it's free
                            </button>
                        </div>

                        {/* Right Video */}
                        <div className="w-full h-[400px] md:h-[550px] mt-10">
                            <video
                                src="https://res.cloudinary.com/df4ax8siq/video/upload/v1769146036/VID_20251225_173528_892_zhqspw.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                            />
                        </div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
}