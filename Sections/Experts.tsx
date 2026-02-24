"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function Experts() {
    return (
        <div>
            <div className="w-full flex justify-center mb-14 md:mb-20 px-5 md:px-10">
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
            <section className="relative text-white overflow-hidden">
                <div
                    className="
                    max-w-full mx-auto
                    px-6 sm:px-8 lg:px-16
                    py-16 sm:py-20 lg:py-28
                    flex flex-col-reverse lg:flex-row
                    items-center justify-between
                    gap-12 lg:gap-0
                "
                >

                    <div className="w-full lg:w-1/2 z-10">
                        <h1
                            className="
                            font-light leading-[1.1] tracking-tight
                            text-[clamp(2rem,5vw,3.2rem)]
                            mb-6
                        "
                        >
                            Get your <span className="font-medium">3D Website</span>
                            <br />
                            <span className="opacity-80">with our Experts.</span>
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
                                Book a Call
                            </button>
                            <button
                                className="
                                w-full sm:w-auto
                                px-6 py-3
                                text-sm sm:text-base
                                rounded-xl
                                bg-white text-black
                                hover:bg-gray-200
                                transition-all duration-300
                            "
                            >
                                See Pricing
                            </button>
                        </div>
                    </div>
                    {/* Video section */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-8 lg:mt-0">
                        <motion.div className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[520px] xl:w-[500px] max-w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] xl:h-[280px]">
                            <video
                                src="/vdo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain rounded-2xl shadow-2xl border border-white/20 bg-black object-cover"

                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>

    );
}