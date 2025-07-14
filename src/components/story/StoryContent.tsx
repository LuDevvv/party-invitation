"use client";

import React from "react";
import Image from "next/image";
import { STORY_CONTENT, STORY_TITLE_IMAGE } from "@/data/story-data";

export const StoryContent: React.FC = () => {
  return (
    <div className="w-full space-y-8">
      {/* Título como imagen optimizada con marco */}
      <div className="flex items-center justify-center text-center">
        <div className="relative">
          {/* MARCO del cartel título */}
          <div className="relative w-64 md:w-80 lg:w-96 h-auto">
            <Image
              src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752269500/Artboard_7_zhh9g5.png"
              alt="Marco cartel título historia"
              width={384}
              height={150}
              className="w-full h-auto drop-shadow-2xl"
              priority={false}
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
            />

            {/* TEXTO "HISTORIA" superpuesto */}
            <div className="absolute top-15 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src={STORY_TITLE_IMAGE.src}
                alt={STORY_TITLE_IMAGE.alt}
                width={300}
                height={60}
                className="w-64 h-auto"
                priority={false}
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 240px, 288px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contenido de historia simplificado */}
      <div className="space-y-6">
        {/* Párrafos de la historia */}
        <div className="space-y-4">
          {STORY_CONTENT.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-700 leading-relaxed text-base text-justify md:text-lg"
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
