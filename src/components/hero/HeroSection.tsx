"use client";

import { useState, useEffect } from "react";
import { invitationData } from "@/data/invitation-data";
import { VineDecoration } from "./VineDecoration";
import { DateTimeDisplay } from "./DateTimeDisplay";
import VideoBackground from "./VideoBackground";

export const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after initial load
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <VideoBackground
        src="https://videos.pexels.com/video-files/7710516/7710516-hd_1920_1080_25fps.mp4"
        poster="https://images.pexels.com/photos/1448735/pexels-photo-1448735.jpeg"
        title="Safari Adventure Video"
        className="z-0"
      />

      {/* Vine Decorations */}
      <VineDecoration position="top-left" />
      <VineDecoration position="top-right" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Child Name & Age */}
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            {/* Name Card matching reference design */}
            <div className="relative bg-gradient-to-b from-red-700 to-red-800 border-4 border-yellow-400 rounded-xl px-8 py-4 shadow-2xl">
              <div className="bg-yellow-400 text-center py-2 -mx-2 -mt-2 mb-3 rounded-t-lg">
                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-red-800 tracking-wide">
                  {invitationData.child.name}
                </h1>
              </div>
              <div className="text-center">
                <span className="text-yellow-300 font-bold text-lg md:text-xl">
                  {invitationData.child.age}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Date Time Display */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <DateTimeDisplay />
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
            <span className="text-white text-sm mt-2 font-medium">Desliza</span>
          </div>
        </div>
      </div>
    </section>
  );
};
