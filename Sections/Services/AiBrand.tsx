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
                <div className="md:col-span-2 text-gray-300 text-md  space-y-3">
                    <p>
                        Find out how 3D technology powered by AI can change the story of your brand into the cinema. Our group employs the use of generative AI to produce amazing brand videos that mesh live-action with virtual environments to ensure a built-up visual experience. Our brand films powered by AI enhance your company's story engaging viewers with captivating visuals and creative narrative.
                    </p>

                    <p>
                        Through our AI brand films, the audience can become emotionally attached to your brand and be more aware of it. We combine the latest AI technology with traditional storytelling to create a brand film that is better than the competition. A unique audiovisual and interactive experience leaves a lasting impression and significantly enhances your brand value.

                    </p>

                    <p>
                        AI brand films are the marketing of the future whether you need a corporate presentation, a digital ad, or something for social media. With our creative approach, we’ll ensure that your brand stands apart from the competition and is an experience to remember. AI filmmaking tells the story of your brand in the most futuristic and attention-grabbing way possible.

                    </p>
                </div>
            </div>


            {/* TOP video section */}
            <div className="pin-wrapper relative w-full flex justify-center py-10 md:py-24 z-10">
                <div
                    ref={previewRef}
                    className="w-[100vw] max-w-full aspect-video overflow-hidden will-change-transform rounded-3xl"
                    style={{ transformOrigin: "center center" }}
                >
                    <iframe
                        src="https://res.cloudinary.com/dbpx7aobb/video/upload/v1772515416/service1_pg5wmy.mp4"
                        className="w-full h-full object-fit pointer-events-none rounded-2xl "
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                </div>
            </div>

        </section>
    );
}