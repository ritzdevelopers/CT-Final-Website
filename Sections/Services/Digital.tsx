import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function Digital() {
    const previewRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const ctx = gsap.context(() => {
            gsap.fromTo(previewRef.current,
                {
                    scale: 0.3,
                    borderRadius: "10px"
                },
                {
                   scale:1,
                   borderRadius:"0px",
                   ease:"none",
                   force3D:true,
                   scrollTrigger:{
                    trigger:sectionRef.current,
                    start:"top top",
                    end:"+=80%",
                    scrub:1.5,
                    anticipatePin:1,
                    invalidateOnRefresh:true
                   } 
                }
            )
        })
        return () => ctx.revert();

    }, [])
    return (
        <section 
        ref={sectionRef}
        className="relative w-full min-h-screen  text-white px-6 md:px-20 py-5">

            {/* Main Heading */}
            <div className="max-w-6xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                    Digital-First Content –
                    {/* Stories that captivate.
                    <br />
                    Intelligence that connects. */}
                </h1>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20">
                {/* Left */}
                <div className="space-y-3 text-sm tracking-[0.2em] uppercase">
                    <p className="tracking-[0.2em] font-bold bg-gradient-to-r from-[#00ffa3] via-[#39ff14] to-[#dcff50] bg-clip-text text-transparent">AI Storytelling</p>
                    <p className="tracking-[0.2em] font-bold bg-gradient-to-r from-[#00ffa3] via-[#39ff14] to-[#dcff50] bg-clip-text text-transparent">Brand Identity Films</p>
                    <p className="tracking-[0.2em] font-bold bg-gradient-to-r from-[#00ffa3] via-[#39ff14] to-[#dcff50] bg-clip-text text-transparent">Cinematic Visuals</p>
                    <p className="tracking-[0.2em] font-bold bg-gradient-to-r from-[#00ffa3] via-[#39ff14] to-[#dcff50] bg-clip-text text-transparent">AI Motion Design</p>

                    <div className="mt-12 space-y-3 text-gray-400 tracking-widest pt-12">
                        <p className="hover:text-white cursor-pointer">
                            LinkedIn ↗
                        </p>
                        <p className="hover:text-white cursor-pointer">
                            Website ↗
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="md:col-span-2 text-gray-300 text-lg leading-relaxed space-y-8">
                    <p>
                        Content today doesn’t wait to be discovered — it competes.
                        We create digital-first experiences engineered for platforms, performance, and precision.
                    </p>

                    <p>
                        From AI-driven visuals to short-form storytelling and interactive media, every asset is crafted to move fast, scale smart, and connect instantly.
                    </p>

                    <p>
                        We craft high-impact visuals and AI-powered narratives engineered for digital speed and cultural relevance.
                    </p>
                </div>
            </div>

            {/*  Video Section */}
            <div 
            ref={previewRef}
            className="mt-10">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">

                    <video
                        className="w-full h-[90vh] object-cover"
                        src="/expert.MP4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />

                    {/* Optional Dark Overlay */}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>
            </div>

        </section>
    );
}