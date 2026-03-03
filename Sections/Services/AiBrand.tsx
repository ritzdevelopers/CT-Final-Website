import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function AiBrand() {
    const previewRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(previewRef.current,
                 {
                    scale: 0.3,
                    borderRadius: "10px"
                },
                {
                    scale: 1,
                    borderRadius: "0px",
                    ease: "none",
                    force3D: true,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=80%",
                        scrub: 1.5,
                        anticipatePin: 1,
                        invalidateOnRefresh: true
                    }
                }
            )
        })
        return () => ctx.revert();
    }, [])
    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen  text-white px-6 md:px-20 py-20">

            {/* Main Heading */}
            <div className="max-w-6xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                    AI Brand Films –
                    {/* Stories that captivate.
                    <br />
                    Intelligence that connects. */}
                </h1>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20">
                {/* Left */}
                <div className="space-y-3 text-sm tracking-[0.2em] uppercase">
                    <p className="tracking-[0.2em] font-bold bg-gradient-to-r from-[#00ffa3] via-[#39ff14] to-[#dcff50] bg-clip-text text-transparent">AI Brand Films</p>
                    <p className="tracking-[0.2em] font-bold bg-gradient-to-r from-[#00ffa3] via-[#39ff14] to-[#dcff50] bg-clip-text text-transparent">Digital First Content</p>
                    <p className="tracking-[0.2em] font-bold bg-gradient-to-r from-[#00ffa3] via-[#39ff14] to-[#dcff50] bg-clip-text text-transparent">Ai Power Compaigns</p>
                    <p className="tracking-[0.2em] font-bold bg-gradient-to-r from-[#00ffa3] via-[#39ff14] to-[#dcff50] bg-clip-text text-transparent">Visual Identify Sysytem</p>

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
                        Brands don’t just speak — they resonate. With AI-powered brand films,
                        we transform complex ideas into emotional, cinematic narratives that
                        move audiences and create lasting impressions.
                    </p>

                    <p>
                        What we create goes beyond visuals: intelligent storytelling,
                        data-driven creativity, and immersive motion design that elevates
                        your brand presence across every platform.
                    </p>

                    <p>
                        The result: a future-ready brand identity that stands strong in
                        digital, social, and motion — crafted for companies that want
                        innovation to be seen and felt.
                    </p>
                </div>
            </div>

            {/* 🔥 Video Section */}
            <div
                ref={previewRef}
                className="mt-10">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">

                    <video
                        className="w-full h-[90vh] object-cover"
                        src="/service/service1.MP4"
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