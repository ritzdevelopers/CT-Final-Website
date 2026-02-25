"use client";


import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function SlidingRow({
    children,
    direction = 1,
}: {
    children: React.ReactNode;
    direction?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Slide amount
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [0, direction * 200] // change 200 for more dramatic movement
    );

    return (
        <motion.div
            ref={ref}
            style={{ x }}
            className="grid grid-cols-12 gap-6 auto-rows-[200px]"
        >
            {children}
        </motion.div>
    );
}

export default function Home() {
    return (
        <main className="bg-[#f5f5f5] min-h-[200vh] p-6 md:p-10 space-y-10">

            {/* ROW 1 → LEFT */}
            <SlidingRow direction={-1}>
                <div className="col-span-3 relative overflow-hidden ">
                    <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-4.8dd753c719d788ed76ef6b6acbd776ff.jpg" alt="" className="object-cover" />
                </div>

                <div className="col-span-3 relative overflow-hidden ">
                    <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-1.f27f2e44f0b09b5b4e3864bb35fe99a4.jpg" alt="" className="object-cover" />
                </div>

                <div className="col-span-3 flex items-center justify-center">
                    <h1 className="text-[100px] text-black uppercase">
                        ÉDITION
                    </h1>
                </div>
                <div className="col-span-3 relative overflow-hidden rounded-xl">
                    <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-8.c29a35d3e16d484687d8f1c1f5816506.jpg" alt="" className="object-cover" />
                </div>
            </SlidingRow>

            {/* ROW 2 → RIGHT */}
            <SlidingRow direction={1}>
                <div className="col-span-3 relative overflow-hidden rounded-xl">
                    <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-8.c29a35d3e16d484687d8f1c1f5816506.jpg" alt="" className="object-cover" />
                </div>

                <div className="col-span-6 relative overflow-hidden rounded-xl">
                    <img src="/img4.jpg" alt="" className="object-cover" />
                </div>

                <div className="col-span-3 flex items-center justify-center">
                    <h1 className="text-[100px] font-black uppercase">
                        LIMITÉE
                    </h1>
                </div>
            </SlidingRow>

            {/* ROW 3 → LEFT */}
            <SlidingRow direction={-1}>
                <div className="col-span-3 flex items-center justify-center">
                    <h1 className="text-[120px] font-black">
                        1500
                    </h1>
                </div>

                <div className="col-span-6 relative overflow-hidden rounded-xl">
                    <img src="/img5.jpg" alt="" className="object-cover" />
                </div>

                <div className="col-span-3 flex items-center justify-center">
                    <h1 className="text-[100px] font-black uppercase">
                        PIÈCES
                    </h1>
                </div>
            </SlidingRow>

        </main>
    );
}