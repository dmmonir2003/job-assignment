import { Navbar } from "@/components/navbar";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import {
  HeroSection,
  SubtitleBadge,
  HeroContent,
  HeroButtons,
} from "@/components/HeroSection";
import { SkySection } from "@/components/SkySection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#EFF7FF] flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <AnimatedBackground />

      <HeroSection>
        <SubtitleBadge />
        <HeroContent />
        <HeroButtons />
      </HeroSection>

      <SkySection />
    </main>
  );
}
