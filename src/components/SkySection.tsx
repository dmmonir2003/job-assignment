"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ANIMATION_CONSTANTS } from "@/constants/appConstants";

export function SkySection() {
  return (
    <>
      <div className="h-7.5 md:h-13.5 w-full" />

      <motion.div
        className="relative w-full h-145.25 overflow-hidden"
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: ANIMATION_CONSTANTS.SKY_FADE_DURATION,
          ease: "easeOut",
        }}
      >
        {/* SCROLL BUTTON */}
        <div className="absolute top-45 md:top-65 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40">
          <span className="text-[#1A1C1E] text-[16px] md:text-[18px] font-normal tracking-[-2%] whitespace-nowrap">
            Scroll to learn more
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: ANIMATION_CONSTANTS.SCROLL_BUTTON_ANIMATION_DURATION,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/arrow-down-04.svg"
              alt="Scroll down"
              width={32}
              height={32}
            />
          </motion.div>
        </div>

        {/* SKY BACKGROUND GROUP */}
        <div className="absolute inset-0 w-full h-full opacity-10 z-0">
          <div className="absolute left-0 w-full h-145.25 z-0">
            <div
              className="w-full h-full bg-blue-500"
              style={{
                maskImage: "url(/sky-3.svg)",
                maskSize: "cover",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: "url(/sky-3.svg)",
                WebkitMaskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            />
          </div>
          <div className="absolute top-[111.93px] w-full h-136 z-10">
            <div
              className="w-full h-full bg-blue-400"
              style={{
                maskImage: "url(/sky-2.svg)",
                maskSize: "cover",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: "url(/sky-2.svg)",
                WebkitMaskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            />
          </div>
          <div className="absolute left-0 w-full h-120.75 top-54.75 z-20">
            <div
              className="w-full h-full bg-blue-200"
              style={{
                maskImage: "url(/sky-1.svg)",
                maskSize: "cover",
                maskRepeat: "no-repeat",
                maskPosition: "bottom",
                WebkitMaskImage: "url(/sky-1.svg)",
                WebkitMaskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "bottom",
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
