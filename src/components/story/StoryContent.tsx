"use client";

import React from "react";
import Image from "next/image";
import { STORY_CONTENT, STORY_TITLE_IMAGE } from "@/data/story-data";

export const StoryContent: React.FC = () => {
  return (
    <div className="w-full space-y-8">
      {/* Título como imagen optimizada */}
      <div className="flex items-center justify-center text-center">
        <div className="relative w-60 h-16 md:h-20 lg:h-24">
          <Image
            src={STORY_TITLE_IMAGE.src}
            alt={STORY_TITLE_IMAGE.alt}
            fill
            className="object-contain"
            priority={false}
            sizes="(max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
          />
        </div>
      </div>

      {/* Contenido de historia simplificado */}
      <div className="space-y-6">
        {/* Párrafos de la historia */}
        <div className="space-y-4">
          {STORY_CONTENT.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-700 leading-relaxed text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>

        {/* Cita final */}
        <blockquote className="mt-8">
          <p
            className="text-gray-600 italic text-lg md:text-xl text-center leading-relaxed"
            dangerouslySetInnerHTML={{ __html: STORY_CONTENT.quote }}
          />
        </blockquote>
      </div>
    </div>
  );
};
