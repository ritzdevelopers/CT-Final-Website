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

    // adjust this based on total row width
    const moveDistance = 25;

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [direction * -moveDistance, direction * moveDistance]
    );

    return (
        <div ref={ref} className="overflow-hidden">
            <motion.div
                style={{ x }}
                className="flex gap-4 w-max"
            >
                {/* Left duplicate */}
                <div className="flex gap-4">
                    {children}
                </div>

                {/* Original */}
                <div className="flex gap-4">
                    {children}
                </div>

                {/* Right duplicate */}
                <div className="flex gap-4">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}

export default function MosaicSection() {
    return (
        <main className="bg-zinc-950 min-h-[100vh] p-1 md:pt-2 md:pb-10 space-y-3 overflow-x-hidden py-3 md:my-10">

            {/* ROW 1 → LEFT */}
            <div className="overflow-hidden">
                <SlidingRow direction={-1}>
                    <div className="w-[320px] h-[140px] relative overflow-hidden  flex-shrink-0 ">
                        <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-4.8dd753c719d788ed76ef6b6acbd776ff.jpg" alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="w-[320px] h-[140px] relative overflow-hidden  flex-shrink-0">
                        <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-1.f27f2e44f0b09b5b4e3864bb35fe99a4.jpg" alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="w-[320px] h-[140px] flex items-center justify-center flex-shrink-0">
                        <h1 className="text-6xl text-white font-bold uppercase">
                            ÉDITION
                        </h1>
                    </div>
                    <div className=" w-[320px] h-[140px] relative overflow-hidden flex-shrink-0 ">
                        <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-2.b1d4272156170297d10a5a60965dbb82.jpg" alt="" className="object-cover" />
                    </div>
                </SlidingRow>
            </div>


            {/* ROW 2 → RIGHT */}
            <div className="overflow-hidden">
                <SlidingRow direction={1}>
                    <div className=" w-[320px] h-[140px] relative overflow-hidden flex-shrink-0 ">
                        <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-8.c29a35d3e16d484687d8f1c1f5816506.jpg" alt="" className="object-cover" />
                    </div>

                    <div className=" w-[320px] h-[140px] relative overflow-hidden flex-shrink-0 ">
                        <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-5.c7be62540b36c08bcbfde656ea89f089.jpg" alt="" className="object-cover" />
                    </div>
                    <div className=" w-[320px] h-[140px] relative overflow-hidden flex-shrink-0 ">
                        <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-6.904f5249c01d47b75251b2cfa978bccf.jpg" alt="" className="object-cover" />
                    </div>

                    <div className="w-[320px] h-[140px] flex items-center justify-center flex-shrink-0">
                        <h1 className="text-6xl text-white font-bold uppercase">
                            LIMITÉE
                        </h1>
                    </div>
                </SlidingRow>
            </div>


            {/* ROW 3 → LEFT */}
            <div className="overflow-hidden">
                <SlidingRow direction={-1}>
                    <div className=" w-[320px] h-[140px] relative overflow-hidden flex-shrink-0 ">
                        <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-12.4e8c5e78b1276aba7a8133e96df58712.jpg" alt="" className="object-cover" />
                    </div>
                    <div className=" w-[320px] h-[140px] relative overflow-hidden flex-shrink-0 ">
                        <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-9.ad839066400db0785d319a39aeb54b96.jpg" alt="" className="object-cover" />
                    </div>
                    <div className="w-[320px] h-[140px] flex items-center justify-center flex-shrink-0">
                        <h1 className="text-6xl text-white font-bold uppercase">
                            1500
                        </h1>
                    </div>
                    <div className=" w-[320px] h-[140px] relative overflow-hidden flex-shrink-0 ">
                        <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-10.852d26e1734f0094f91e42e2c96e7f76.jpg" alt="" className="object-cover" />
                    </div>

                </SlidingRow>
            </div>


            {/* ROW 4 → LEFT */}
            <div className="overflow-hidden">
                <SlidingRow direction={1}>
                    <div className=" w-[320px] h-[140px] relative overflow-hidden flex-shrink-0 ">
                        <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-1.f27f2e44f0b09b5b4e3864bb35fe99a4.jpg" alt="" className="object-cover" />
                    </div>
                    <div className=" w-[320px] h-[140px] relative overflow-hidden flex-shrink-0 ">
                        <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-13.31c04c133654910233f64dec54f5520f.jpg" alt="" className="object-cover" />
                    </div>
                    <div className=" w-[320px] h-[140px] relative overflow-hidden flex-shrink-0 ">
                        <img src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-14.0a64339771fee89ad9c31aede58819a4.jpg" alt="" className="object-cover" />
                    </div>

                    <div className="w-[320px] h-[140px] flex items-center justify-center flex-shrink-0">
                        <h1 className="text-6xl text-white font-bold uppercase">
                            PIÈCES
                        </h1>
                    </div>
                </SlidingRow>
            </div>
        </main>
    );
}