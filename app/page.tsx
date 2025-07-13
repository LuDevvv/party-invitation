import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { LocationSection } from "@/components/sections/LocationSection";
import { RSVPSection } from "@/components/sections/RSVPSection";
import { SafariLayout } from "@/components/layout";
import { BackgroundMusic } from "@/components/ui/BackgroundMusic";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SafariLayout>
        <HeroSection />
        <StorySection />
        <LocationSection />
        <RSVPSection />
      </SafariLayout>

      <BackgroundMusic
        audioUrl="https://res.cloudinary.com/dcuapqoii/video/upload/v1752272610/El_Ciclo_de_la_Vida-2_gbf6il.mp3"
        defaultVolume={0.3}
      />
    </div>
  );
}
