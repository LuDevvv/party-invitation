"use client";

import React from "react";
import { PolaroidImage } from "./PolaroidImage";
import { useStoryGallery } from "@/hooks/use-story-gallery";
import { STORY_IMAGES } from "@/data/story-data";

export const StoryGallery: React.FC = () => {
  const { activeIndex, setActiveIndex } = useStoryGallery(STORY_IMAGES.length);

  // Configuración de posiciones para cada imagen
  const imageConfigs = [
    {
      rotation: -10,
      position: { top: "20px", left: "20px" },
    },
    {
      rotation: 0,
      position: { top: "10px", left: "50%", marginLeft: "-80px" },
    },
    {
      rotation: 10,
      position: { top: "20px", right: "20px" },
    },
  ];

  return (
    <div className="w-full flex justify-center lg:justify-end overflow-hidden">
      <div className="relative w-[400px] h-[280px] md:w-[450px] md:h-[350px] lg:w-[480px] lg:h-[380px] mx-auto">
        {STORY_IMAGES.map((image, index) => (
          <PolaroidImage
            key={index}
            image={image}
            isActive={activeIndex === index}
            rotation={imageConfigs[index].rotation}
            position={imageConfigs[index].position}
            onClick={() => setActiveIndex(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
