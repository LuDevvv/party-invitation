import { HeroSection } from "@/components/sections/HeroSection";
import SafariDivider from "@/components/sections/SafariDivider";
import StorySection from "@/components/sections/StorySection";
import { SafariLayout } from "@/components/layout";

export default function Home() {
  return (
    <SafariLayout>
      <HeroSection />
      <SafariDivider />
      <StorySection />
    </SafariLayout>
  );
}
