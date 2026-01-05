"use client";
import {
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ANIMATION_CONSTANTS,
  BIRD_CONFIGURATIONS,
} from "@/constants/appConstants";

export function AnimatedBackground() {
  // Controls for manual animation triggers
  const bird1Controls = useAnimation();
  const bird2Controls = useAnimation();

  // State to track if birds are currently in the air
  const [isFlying, setIsFlying] = useState(false);

  // Scroll hook to detect user movement
  const { scrollY } = useScroll();

  // The Animation Function
  const startFlyingSequence = async (delayOverride = 0) => {
    if (isFlying) return; // Stop if already flying
    setIsFlying(true);

    // Start both birds simultaneously
    await Promise.all([
      bird1Controls.start({
        x: 2200,
        y: -600,
        opacity: [0, 1, 1, 1, 0],
        scale: [0.7, 0.9, 1, 0.9, 0.7],
        transition: {
          duration: ANIMATION_CONSTANTS.BIRD_FLY_DURATION,
          ease: "linear",
          delay: delayOverride,
        },
      }),
      bird2Controls.start({
        x: -2000,
        y: -700,
        opacity: [0, 1, 1, 1, 0],
        scale: [0.8, 1, 1.1, 1, 0.8],
        scaleX: -1,
        transition: {
          duration: ANIMATION_CONSTANTS.BIRD_FLY_DURATION,
          ease: "linear",
          delay: delayOverride + ANIMATION_CONSTANTS.BIRD_STAGGER_DELAY,
        },
      }),
    ]);

    // Reset positions instantly (hidden) so they are ready for next flyover
    bird1Controls.set({ x: 0, y: 0, opacity: 0, scale: 0.7 });
    bird2Controls.set({ x: 0, y: 0, opacity: 0, scale: 0.8 });

    setIsFlying(false);
  };

  // TRIGGER: Initial Page Load
  useEffect(() => {
    startFlyingSequence(ANIMATION_CONSTANTS.BIRD_FLY_DELAY_LOAD);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TRIGGER: User Scrolls
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isFlying && latest > 10) {
      startFlyingSequence(ANIMATION_CONSTANTS.BIRD_FLY_DELAY_SCROLL);
    }
  });

  return (
    <>
      {/* TOP BIRD LAYER */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-480 h-screen pointer-events-none z-0 transform scale-[0.4] origin-top md:scale-100 md:origin-top transition-transform duration-500">
        {BIRD_CONFIGURATIONS.TOP_LAYER.BIRDS.map((bird, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ top: `${bird.top}px`, left: `${bird.left}px` }}
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: bird.delay, ease: "easeOut" }}
          >
            <Image
              src={bird.src}
              alt=""
              width={bird.width}
              height={bird.height}
              priority
            />
          </motion.div>
        ))}
      </div>

      {/* SKY BIRD LAYER */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-480 h-full pointer-events-none z-30 transform scale-[0.5] origin-center md:scale-100 md:origin-top transition-transform duration-500">
        {BIRD_CONFIGURATIONS.SKY_LAYER.BIRDS.map((bird, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ top: `${bird.top}px`, left: `${bird.left}px` }}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: bird.delay, ease: "easeOut" }}
          >
            <Image
              src={bird.src}
              alt=""
              width={bird.width}
              height={bird.height}
              priority
            />
          </motion.div>
        ))}

        {/* FLYING BIRDS */}
        <motion.div
          className="absolute"
          style={{
            top: BIRD_CONFIGURATIONS.FLYING_BIRDS.BIRD_1.top,
            left: BIRD_CONFIGURATIONS.FLYING_BIRDS.BIRD_1.left,
          }}
          initial={{
            opacity: 0,
            scale: BIRD_CONFIGURATIONS.FLYING_BIRDS.BIRD_1.scale,
          }}
          animate={bird1Controls}
        >
          <Image
            src="/Group 1.svg"
            alt="Flying bird L-R"
            width={BIRD_CONFIGURATIONS.FLYING_BIRDS.BIRD_1.width}
            height={BIRD_CONFIGURATIONS.FLYING_BIRDS.BIRD_1.height}
          />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: BIRD_CONFIGURATIONS.FLYING_BIRDS.BIRD_2.top,
            left: BIRD_CONFIGURATIONS.FLYING_BIRDS.BIRD_2.left,
          }}
          initial={{
            opacity: 0,
            scale: BIRD_CONFIGURATIONS.FLYING_BIRDS.BIRD_2.scale,
            scaleX: -1,
          }}
          animate={bird2Controls}
        >
          <Image
            src="/Group 1.svg"
            alt="Flying bird R-L"
            width={BIRD_CONFIGURATIONS.FLYING_BIRDS.BIRD_2.width}
            height={BIRD_CONFIGURATIONS.FLYING_BIRDS.BIRD_2.height}
          />
        </motion.div>
      </div>
    </>
  );
}
