"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ANIMATION_CONSTANTS, HERO_CONTENT } from "@/constants/appConstants";

interface HeroSectionProps {
  children?: React.ReactNode;
}

export function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="relative pt-32 md:pt-17 w-full max-w-184 flex flex-col items-center z-20 px-6 md:px-4">
      {children}
    </section>
  );
}

export function SubtitleBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_CONSTANTS.HERO_FADE_DURATION }}
      className="w-fit h-8 md:h-9.5 bg-white rounded-full px-2 pr-4 flex items-center gap-2 border border-[#007AFF]/10 shadow-sm mb-6 md:mb-8"
    >
      <Image
        src="/Frame 23.svg"
        alt=""
        width={32}
        height={17}
        className="rounded-full w-6 h-3.5 md:w-8 md:h-4.25"
      />
      <span className="text-[#007AFF] text-[14px] md:text-[16px] lg:text-[19px] font-medium whitespace-nowrap">
        {HERO_CONTENT.SUBTITLE}
      </span>
    </motion.div>
  );
}

export function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: ANIMATION_CONSTANTS.HERO_FADE_DURATION,
          delay: 0.1,
        }}
        className="text-[36px] sm:text-[48px] md:text-[64px] font-bold leading-[110%] md:leading-[120%] tracking-[-2%] text-center text-[#1A1C1E]"
      >
        <span className="text-[#007AFF]">{HERO_CONTENT.TITLE.PART_1}</span>{" "}
        {HERO_CONTENT.TITLE.PART_2}
        <br className="hidden md:block" />
        <span className="md:hidden"> </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: ANIMATION_CONSTANTS.HERO_FADE_DURATION,
          delay: 0.2,
        }}
        className="max-w-160 text-[15px] md:text-[18px] font-normal leading-[140%] tracking-[-1%] text-center text-[#4B5563]"
      >
        {HERO_CONTENT.DESCRIPTION}
      </motion.p>
    </div>
  );
}

export function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: ANIMATION_CONSTANTS.HERO_FADE_DURATION,
        delay: 0.3,
      }}
      className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-10 w-full sm:w-auto"
    >
      <button className="w-full sm:w-40 h-12 bg-[#007AFF] text-white rounded-full font-medium text-base hover:bg-blue-600 transition-colors">
        {HERO_CONTENT.BUTTONS.PRIMARY}
      </button>
      <button className="w-full sm:w-auto h-12 px-6 bg-white/60 backdrop-blur-sm text-[#1A1C1E] rounded-full border border-[#6C788F33] flex items-center justify-center gap-3 hover:bg-white/80 transition-colors">
        <Image src="/appleLogo.svg" alt="" width={18} height={20} />
        <div className="w-px h-5 bg-[#6C788F33]" />
        <span className="font-medium text-base whitespace-nowrap">
          {HERO_CONTENT.BUTTONS.SECONDARY}
        </span>
      </button>
    </motion.div>
  );
}
