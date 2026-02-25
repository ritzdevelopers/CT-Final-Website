"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ExpertsProps {
    isDarkMode?: boolean;
}

export default function Experts({ isDarkMode }: ExpertsProps) {
    const [imageFailed, setImageFailed] = useState(false);

    return (
        <div className="flex items-center justify-between min-h-[500px] bg-black px-16 py-24 relative overflow-hidden">
            {/* Left Text */}
            <div className="flex flex-col justify-center text-left z-10">
                <h1 className="text-white text-[3rem] font-light leading-tight mb-8">
                    Get your 3D Website<br />with our Experts.
                </h1>
                <div className="flex gap-6">
                    <button className="px-4 py-2 text-white text-md font-light border border-white rounded-xl bg-transparent hover:bg-white hover:text-[#05051a] transition">
                        Book a Call
                    </button>
                    <button className="px-4 py-2 text-[#05051a] text-md font-light rounded-xl bg-white hover:bg-[#e0e0ff] transition">
                        See Pricing
                    </button>
                </div>
            </div>

            {/* Right Jellyfish */}
            <div className="flex justify-end items-center w-1/2 relative">
                {!imageFailed ? (
                    <motion.img
                        src="/fairy.png"
                        alt="Glowing Jellyfish"
                        onError={() => setImageFailed(true)}
                        className="w-[500px] h-auto drop-shadow-[0_0_40px_#00eaff]"
                        animate={{
                            y: [0, -20, 0],
                            scale: [1, 1.05, 1],
                            filter: [
                                "drop-shadow(0 0 20px #00eaff)",
                                "drop-shadow(0 0 60px #00eaff)",
                                "drop-shadow(0 0 20px #00eaff)",
                            ],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    />
                ) : (
                    <div className="text-cyan-300/80 text-sm border border-cyan-400/30 rounded-xl px-4 py-2 bg-cyan-500/5">
                        Add `fairy.png` in `public/` to show jellyfish
                    </div>
                )}
            </div>
        </div>

    );
}
