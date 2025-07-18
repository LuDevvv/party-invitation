"use client";

import React from "react";
import { SafariDivider } from "@/components/ui/SafariDivider";
import { StoryGallery } from "@/components/story/StoryGallery";
import { StoryContent } from "@/components/story/StoryContent";

export const StorySection: React.FC = () => {
  return (
    <>
      <SafariDivider />

      <section
        className="py-10 px-8 bg-gradient-to-b from-green-50/30 to-orange-50/30"
        aria-labelledby="story-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="w-full order-1">
              <StoryGallery />
            </div>

            <div className="w-full order-2">
              <StoryContent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StorySection;
