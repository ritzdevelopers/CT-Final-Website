import React from "react";

const CreativePortraits = () => {
    return (
        <section className="relative h-screen  bg-black overflow-hidden flex items-center">

            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5A3917] via-black to-black"></div>

            <div className="relative flex  gap-16 mx-auto px-20 pb-10  w-full">

                {/* Heading */}
                <h1 className="text-white font-normal leading-[0.9] text-5xl md:text-9xl tracking-tight">
                    Creative
                    <br />
                    <span className="font-medium relative left-64">Portraits</span>
                </h1>

                {/* Description */}
                <p className="mt-12 max-w-[300px] text-gray-300 text-md">
                    In our studio, professional photographers models collaborate and take
                    special photos.
                </p>

                {/* Image Cards */}

                               
                <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                    className="absolute top-48 left-20 w-52  shadow-2xl rotate-[-8deg]"
                />

                
                <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                    className="absolute top-60 left-[30%]  w-52  shadow-2xl rotate-[-8deg]"
                />

                
                <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                    className="absolute top-40 left-[52%] w-52  shadow-2xl rotate-[-9deg] "
                />

                
                <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                    className="absolute top-44 right-20 w-52  shadow-2xl rotate-[-8deg]"
                />
            </div>
        </section>
    );
};

export default CreativePortraits;