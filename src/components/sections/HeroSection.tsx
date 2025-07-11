"use client";
import { useEffect, useState } from "react";
import VideoBackground from "../hero/VideoBackground";

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
        src="https://res.cloudinary.com/dcuapqoii/video/upload/v1752269091/Principal_ctn14j.mp4"
        poster="https://images.pexels.com/photos/1448735/pexels-photo-1448735.jpeg"
        title="Safari Adventure Video"
        className="z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* SECCIÓN NOMBRE + EDAD CON SUPERPOSICIÓN */}
        <div className="relative mb-8">
          {/* Cartel Principal del Nombre (MARCO + TEXTO) */}
          <div
            className={`relative transition-all duration-1000 ${
              showContent
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            {/* MARCO del cartel nombre */}
            <img
              src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752269500/Artboard_7_zhh9g5.png"
              alt="Marco cartel Benjamin"
              className="w-72 md:w-96 lg:w-[500px] h-auto drop-shadow-2xl"
              loading="eager"
            />

            {/* TEXTO "BENJAMIN" superpuesto */}
            <img
              src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752269498/Artboard_6_pgruml.png"
              alt="Texto Benjamin"
              className="absolute top-18 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 md:w-80 lg:w-[420px] h-auto"
              loading="eager"
            />
          </div>

          {/* Cartel de Edad (MARCO + TEXTO) - SUPERPUESTO */}
          <div
            className={`absolute -bottom-10 -right-0 z-10 transition-all duration-800 delay-400 ${
              showContent
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-90"
            }`}
          >
            {/* MARCO del cartel edad */}
            <img
              src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752269499/Artboard_7_copy_2_fj7zqr.png"
              alt="Marco cartel 3 años"
              className="w-40 md:w-40 lg:w-48 h-auto drop-shadow-xl"
              loading="eager"
            />

            {/* TEXTO "3 AÑOS" superpuesto */}
            <img
              src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752269497/Artboard_6_copy_2_ljkiuf.png"
              alt="Texto 3 años"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-32 lg:w-36 h-auto"
              loading="eager"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${
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
