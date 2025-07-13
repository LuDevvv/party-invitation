import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { LocationSection } from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StorySection />
      <LocationSection />
    </div>
  );
}
