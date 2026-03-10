"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface ExpertSectionProps {
    isDarkMode?: boolean;
}
export default function Experts({ isDarkMode }:ExpertSectionProps) {

    const videoRef1 = useRef<HTMLVideoElement | null>(null);
    const videoRef2 = useRef<HTMLVideoElement | null>(null);
    const handleMouseEnter = (video: HTMLVideoElement | null) => {
        if (video) {
            video.muted = false;
            video.volume = 1;
        }
    };

    const handleMouseLeave = (video: HTMLVideoElement | null) => {
        if (video) {
            video.muted = true;
            video.volume = 0;
        }
    };

    return (
        <div className="bg-zinc-950">
            <div className="w-full  flex justify-center mb-14 md:mb-10 px-5 md:px-10">
                <div
                    onMouseEnter={() => handleMouseEnter(videoRef1.current)}
                    onMouseLeave={() => handleMouseLeave(videoRef1.current)}
                    className="w-full max-w-full h-[180px] sm:h-[240px] md:h-auto rounded-2xl overflow-hidden border border-white/10 cursor-pointer">
                    <video
                        ref={videoRef1}
                        src="https://res.cloudinary.com/dbpx7aobb/video/upload/v1772515369/service2_rdybf5.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="w-full h-full object-contain "
                    />
                </div>
            </div>
            <section className="relative text-white overflow-hidden">
                <div
                    className="
                    max-w-full mx-auto
                    px-6 sm:px-8 lg:px-16
                    py-5 sm:py-10 lg:pb-16
                    flex flex-col-reverse lg:flex-row
                    items-center justify-between
                    gap-12 lg:gap-0
                "
                >

                    <div className="w-full lg:w-1/2 z-10">
                        <h1
                            className="
                            font-light leading-[1.1] tracking-tight
                            text-[clamp(2rem,5vw,2.5rem)]
                            mb-6
                        "
                        >
                            Get your <span className="font-bold">3D Website</span> with
                            <br />
                            <span className="opacity-80"> Our Expert Designers.</span>
                        </h1>
                        <p className="text-white/70 text-sm sm:text-base max-w-md mb-8">
                            We craft immersive, high-end 3D experiences that elevate your brand
                            beyond flat design.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button
                                className="
                                w-full sm:w-auto
                                px-6 py-3
                                text-sm sm:text-base
                                border border-white
                                rounded-xl
                                bg-transparent
                                hover:bg-white hover:text-black
                                transition-all duration-300
                            "
                            >
                                Book Now
                            </button>

                        </div>
                    </div>
                    {/* Video section */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-1 lg:mt-0">
                        <motion.div
                            onMouseEnter={() => handleMouseEnter(videoRef2.current)}
                            onMouseLeave={() => handleMouseLeave(videoRef2.current)}
                            className="w-full sm:w-[340px] md:w-[420px] lg:w-[520px] xl:w-[500px] max-w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] xl:h-[280px] cursor-pointer">
                            <video
                                ref={videoRef2}
                                src="https://res.cloudinary.com/dbpx7aobb/video/upload/v1772515260/expert_cztbxe.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="none"
                                className="w-full h-full object-contain rounded-2xl shadow-2xl border border-white/20 bg-black object-cover"

                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>

    );
}