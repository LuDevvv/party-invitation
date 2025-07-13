"use client";

import React from "react";
import Image from "next/image";
import { StoryImage } from "@/data/story-data";

interface PolaroidImageProps {
  image: StoryImage;
  isActive: boolean;
  rotation: number;
  position: {
    top: string;
    left?: string;
    right?: string;
    marginLeft?: string;
  };
  onClick: () => void;
  index: number;
}

export const PolaroidImage: React.FC<PolaroidImageProps> = ({
  image,
  isActive,
  rotation,
  position,
  onClick,
  index,
}) => {
  const zIndex = isActive ? 30 : index === 1 ? 20 : 10;

  return (
    <div
      className={`absolute w-40 h-52 md:w-44 md:h-56 lg:w-48 lg:h-60 bg-white rounded-lg shadow-xl cursor-pointer transition-all duration-500 hover:shadow-2xl ${
        isActive
          ? "brightness-100 scale-105"
          : "brightness-90 hover:brightness-95"
      }`}
      style={{
        transform: `rotate(${rotation}deg) ${isActive ? "scale(1.05)" : ""}`,
        zIndex,
        ...position,
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
      aria-label={`Ver imagen: ${image.alt}`}
    >
      {/* Polaroid frame */}
      <div className="w-full h-full rounded-lg overflow-hidden shadow-inner">
        <div className="relative w-full h-4/4 bg-gray-100 rounded overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 160px, (max-width: 1024px) 176px, 192px"
          />

          {/* Overlay de brillo cuando está activa */}
          {isActive && (
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
          )}
        </div>
      </div>
    </div>
  );
};
