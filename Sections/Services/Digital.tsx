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
                <div className="md:col-span-2 text-gray-300 text-md space-y-3">
                    <p>
                        In a digital-first world, we consume content faster than ever, and it has to hit home right away. Through the use of AI, we create fast, appealing content for you that resonates with your audience. Our content engages online users instantly, whether they are visiting your website, scrolling your mobile app, or simply seeing it on social media.
                    </p>

                    <p>
                        Using advanced AI, we craft contextually relevant content that is tailored to meet the exact requirements of your target audience.  We know that each platform needs its own design, so the vibes of your content always suit the message at the right time.  Whether to help you move views on your advertising message, E-commerce business, or any web service, and more !

                    </p>

                    <p>
                        Translating the content into appropriate media as per the audience requirement ensures effective engagement. Through the use of AI analytics, we keep a track of engagement and optimize it for maximum effectiveness. Regardless of whether you are launching a product, building brand awareness, or running a campaign, our content delivers results on all digital platforms.

                    </p>
                </div>
            </div>

            {/*  Video Section */}

            <div className="pin-wrapper relative w-full flex justify-center py-10 md:py-24 z-10">
                <div
                    ref={previewRef}
                    className="w-[100vw] max-w-full aspect-video overflow-hidden will-change-transform rounded-3xl"
                    style={{ transformOrigin: "center center" }}
                >
                    <iframe
                        src="https://res.cloudinary.com/df4ax8siq/video/upload/v1769084093/3_knelxc.mp4"
                        className="w-full h-full object-fit pointer-events-none rounded-2xl "
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                </div>
            </div>

        </section>
    );
}