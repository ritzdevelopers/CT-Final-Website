"use client";

import { motion } from "framer-motion";

export default function Experts() {
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
                <motion.img
                    src="dist/assets/fairy.png"
                    alt="Glowing Jellyfish"
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
            </div>
        </div>
    );
}