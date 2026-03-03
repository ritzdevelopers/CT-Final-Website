import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function VisualIdentify() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const previewRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(previewRef.current,
                {
                    scale:0.3,
                    borderRadius:"10px"
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
    })
    return (
        <section
        ref={sectionRef}
        className="relative w-full min-h-screen  text-white px-6 md:px-20 py-20">

            {/* Main Heading */}
            <div className="max-w-6xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                    Visual Identify System –
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
                <div className="md:col-span-2 text-gray-300 text-md space-y-3">
                    <p>
                       Coin a powerful AI-driven visual identity system which can precisely and strategically define your brand and its behavior in the long-term. We develop scalable branding frameworks to ensure visual consistency at all touchpoints, including the digital world, print and social media, packaging, advertising, and experiences. Each element is made so that its message is recognisable, strengthened by the brand identity selected that will operate firmly on the market. 
                    </p>

                    <p>
                       We will establish the suitable visual language, brand aesthetic, and intelligent design systems within today’s Ai-enabled ecosystem, in keeping with your organizational values, industry practices, and competitive landscape. All the elements, from detailed brand guidelines and visual governance frameworks to logo architecture, colour psychology, typography systems and iconography, is created to ensure consistency and adaptability as your brand evolves.

                    </p>

                    <p>
                       We offer comprehensive visual identity solutions including logotypes, colour palettes, typographic hierarchies, digital assets, UI/UX components, packaging imagery, brand collateral, motion graphics and interactive design systems. We provide long-term brand value, connection, and recall by creating a pleasing identity through effective design that speaks to your audience and differentiates you in a crowded online and offline marketplace.

                    </p>
                </div>
            </div>

 <div className="pin-wrapper relative w-full flex justify-center py-10 md:py-24 z-10">
                <div
                    ref={previewRef}
                    className="w-[100vw] max-w-full aspect-video overflow-hidden will-change-transform rounded-3xl"
                    style={{ transformOrigin: "center center" }}
                >
                    <iframe
                        src="https://res.cloudinary.com/dbpx7aobb/video/upload/v1772515369/service2_rdybf5.mp4"
                        className="w-full h-full object-fit pointer-events-none rounded-2xl "
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                </div>
            </div>
            

        </section>
    );
}