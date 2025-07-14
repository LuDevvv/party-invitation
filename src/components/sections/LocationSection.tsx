"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Play, Navigation, Pause } from "lucide-react";
import { LOCATION_DATA } from "@/data/location-data";
import { LOCATION_TITLE_IMAGE } from "@/data/story-data";

// Custom Safari-themed Video Player Component
const CloudinaryVideoPlayer: React.FC<{
  src: string;
  poster: string;
  title: string;
}> = ({ src, poster, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
    setShowControls(true);
    setTimeout(() => setShowControls(false), 3000);
  };

  return (
    <div
      className="relative w-full h-full group cursor-pointer"
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover rounded-2xl"
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setTimeout(() => setShowControls(false), 2000)}
      />

      {/* Safari-themed overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-green-900/20 rounded-2xl pointer-events-none" />

      {/* Safari-themed Controls */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Safari-styled Play/Pause Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-110 shadow-2xl border-4 border-amber-200/30"
        >
          {isPlaying ? (
            <Pause size={32} className="drop-shadow-lg" />
          ) : (
            <Play size={32} className="ml-1 drop-shadow-lg" />
          )}
        </button>
      </div>

      {/* Safari-themed Video Title with wood background */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-gradient-to-r from-amber-800/90 to-amber-700/90 backdrop-blur-sm rounded-xl px-4 py-1 border-2 border-amber-200/30">
          <h4 className="text-white font-bold text-lg drop-shadow-lg flex items-center gap-1">
            {title}
          </h4>
        </div>
      </div>

      {/* Safari corner decorations when not playing */}
      {!isPlaying && (
        <>
          <div className="absolute top-4 left-4 w-3 h-3 bg-amber-600 rounded-full opacity-60">
            <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-amber-400 rounded-full"></div>
          </div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-amber-600 rounded-full opacity-60">
            <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-amber-400 rounded-full"></div>
          </div>
        </>
      )}
    </div>
  );
};

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      className="relative py-10 px-4 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Título como imagen optimizada con marco */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="relative">
            {/* MARCO del cartel título */}
            <div className="relative w-64 md:w-80 lg:w-96 h-auto">
              <Image
                src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752269500/Artboard_7_zhh9g5.png"
                alt="Marco cartel título lugar"
                width={384}
                height={150}
                className="w-full h-auto drop-shadow-2xl"
                priority={false}
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />

              {/* TEXTO "LUGAR" superpuesto */}
              <div className="absolute top-15 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={LOCATION_TITLE_IMAGE.src}
                  alt={LOCATION_TITLE_IMAGE.alt}
                  width={300}
                  height={60}
                  className="w-48 md:w-60 lg:w-72 h-auto"
                  priority={false}
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 240px, 288px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video Card */}
          <div className="safari-card p-6">
            {/* Video Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Play className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-900">
                  Tour Virtual
                </h3>
                <p className="text-amber-700">Conoce nuestro lugar mágico</p>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-gray-900">
              <CloudinaryVideoPlayer
                src="https://res.cloudinary.com/dcuapqoii/video/upload/v1752269050/Villa_lirvr7.mp4"
                poster="https://res.cloudinary.com/dcuapqoii/image/upload/v1752472708/Screenshot_2025-07-14_015751_yr031y.png"
                title="Villa - Tour Virtual"
              />
            </div>
          </div>

          {/* Directions Card */}
          <div className="safari-card p-6">
            {/* Directions Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Navigation className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-900">
                  Cómo Llegar
                </h3>
                <p className="text-amber-700">
                  Encuentra tu camino a la aventura
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="space-y-4">
              <a
                href={LOCATION_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-3 border-blue-800"
              >
                <ExternalLink size={20} className="mr-3" />
                Abrir en Google Maps
              </a>

              {LOCATION_DATA.youtubeUrl && (
                <a
                  href={LOCATION_DATA.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-3 border-red-800"
                >
                  <Play size={20} className="mr-3" />
                  Ver Direcciones en Video
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
