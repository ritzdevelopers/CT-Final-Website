"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


/* =========================
   Scroll Weight Heading
========================= */
function ScrollWeightHeading({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  });

  // Animate font weight 200 → 900
  const fontWeight = useTransform(scrollYProgress, [0, 1], [100, 900]);

  // Optional small scale for premium feel
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.p
      ref={ref}
      style={{ fontWeight, scale }}
      className="text-6xl text-white uppercase "
    >
      {children}
    </motion.p>
  );
}

/* =========================
   Sliding Row Component
========================= */
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

  const moveDistance = 120; // increase for stronger effect

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [direction * -moveDistance, direction * moveDistance]
  );

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        style={{ x }}
        className="flex gap-4 w-max will-change-transform"
      >
        <div className="flex gap-4">{children}</div>
        <div className="flex gap-4">{children}</div>
        <div className="flex gap-4">{children}</div>
      </motion.div>
    </div>
  );
}

/* =========================
   Main Section
========================= */
export default function MosaicSection() {
  return (
    <main className="bg-zinc-950 min-h-screen p-4 space-y-6 overflow-x-hidden">

      {/* ROW 1 */}
      <SlidingRow direction={-1}>
        <TileImage src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-1.f27f2e44f0b09b5b4e3864bb35fe99a4.jpg" />
        <TileImage src="https://picsum.photos/600/400?2" />
        <TileText>
          <ScrollWeightHeading>ÉDITION</ScrollWeightHeading>
        </TileText>
        <TileImage src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-4.8dd753c719d788ed76ef6b6acbd776ff.jpg" />
      </SlidingRow>

      {/* ROW 2 */}
      <SlidingRow direction={1}>
        <TileImage src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-12.4e8c5e78b1276aba7a8133e96df58712.jpg" />
        <TileImage src="https://picsum.photos/600/400?5" />
        <TileImage src="https://picsum.photos/600/400?6" />
        <TileText>
          <ScrollWeightHeading>LIMITÉE</ScrollWeightHeading>
        </TileText>
      </SlidingRow>

      {/* ROW 3 */}
      <SlidingRow direction={-1}>
        <TileImage src="https://picsum.photos/600/400?7" />
        <TileImage src="https://picsum.photos/600/400?8" />
        <TileText>
          <ScrollWeightHeading>1500</ScrollWeightHeading>
        </TileText>
        <TileImage src="https://picsum.photos/600/400?9" />
      </SlidingRow>

      {/* ROW 4 */}
      <SlidingRow direction={1}>
        <TileImage src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-14.0a64339771fee89ad9c31aede58819a4.jpg" />
        <TileImage src="https://picsum.photos/600/400?11" />
        <TileImage src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-1.f27f2e44f0b09b5b4e3864bb35fe99a4.jpg" />
        <TileText>
          <ScrollWeightHeading>PIÈCES</ScrollWeightHeading>
        </TileText>
      </SlidingRow>

    </main>
  );
}

/* =========================
   Reusable Tiles
========================= */

function TileImage({ src }: { src: string }) {
  return (
    <div className="w-[320px] h-[140px] overflow-hidden flex-shrink-0">
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function TileText({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[320px] h-[140px] flex items-center justify-center flex-shrink-0">
      {children}
    </div>
  );
}