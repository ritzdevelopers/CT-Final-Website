import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function AiPower() {
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
                    AI Power Compaigns –
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
                       Make full use of the potential of your marketing campaigns to drive better results and increase profits. We use AI technology to create data-driven strategies to help you reach your intended audience as effectively as possible. We closely examine how users behave and what campaigns look like, we make sure you do not waste any of your dollars. 
                    </p>

                    <p>
                       The use of AI technology can enhance your marketing campaigns in all aspects. We analyze and predict the market from the vast data. The accurate analysis helps to optimize the campaigns. Our approach guarantees the fulfilment of all performance objectives, resulting in substantial returns on your ad expenditures
                    </p>

                    <p>
                        Incorporate AI into the heart of your marketing campaign and you will easily scale your marketing campaigns. By relying on our data-driven strategies, it is easy to adapt to market trends and consumer behavior to keep your marketing campaigns effective. AI powered marketing campaigns provide result-driven services, from social media marketing to email marketing.

                    </p>
                </div>
            </div>
            
            {/* vdo section */}
             <div className="pin-wrapper relative w-full flex justify-center py-10 md:py-24 z-10">
                <div
                    ref={previewRef}
                    className="w-[100vw] max-w-full aspect-video overflow-hidden will-change-transform rounded-3xl"
                    style={{ transformOrigin: "center center" }}
                >
                    <iframe
                        src="https://res.cloudinary.com/dbpx7aobb/video/upload/v1772515260/expert_cztbxe.mp4"
                        className="w-full h-full object-fit pointer-events-none rounded-2xl "
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                </div>
            </div>

            

        </section>
    );
}