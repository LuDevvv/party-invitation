"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        <div className="relative mb-16">
          {/* Cartel Principal del Nombre (MARCO + TEXTO) */}
          <div
            className={`relative transition-all duration-1000 ${
              showContent
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            {/* MARCO del cartel nombre */}
            <div className="relative w-72 md:w-96 lg:w-[500px] h-auto">
              <Image
                src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752269500/Artboard_7_zhh9g5.png"
                alt="Marco cartel Ian"
                width={500}
                height={200}
                className="w-full h-auto drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 500px"
              />

              {/* TEXTO "Ian" superpuesto */}
              <div className="absolute top-17 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752465636/Artboard_6_pegzds.png"
                  alt="Texto Ian"
                  width={420}
                  height={80}
                  className="w-26 md:w-28 lg:w-[420px] h-auto"
                  priority
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 320px, 420px"
                />
              </div>
            </div>
          </div>

          {/* Cartel de Edad (MARCO + TEXTO) - SUPERPUESTO */}
          <div
            className={`absolute -bottom-10 right-14 md:-right-8 z-10 transition-all duration-800 delay-400 ${
              showContent
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-90"
            }`}
          >
            {/* MARCO del cartel edad */}
            <div className="relative w-40 md:w-44 lg:w-48 h-auto">
              <Image
                src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752269499/Artboard_7_copy_2_fj7zqr.png"
                alt="Marco cartel 3 años"
                width={192}
                height={120}
                className="w-full h-auto drop-shadow-xl"
                priority
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 176px, 192px"
              />

              {/* TEXTO "3 AÑOS" superpuesto */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752465636/Artboard_6_copy_2_gkdmam.png"
                  alt="Texto 3 años"
                  width={144}
                  height={40}
                  className="w-24 md:w-32 lg:w-36 h-auto"
                  priority
                  sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 144px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN FECHA Y HORA - IMAGEN */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            showContent
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752465636/Artboard_7_copy_2_1_h02glr.png"
              alt="Fecha de la celebración - 3 Agosto 2025 | 2:30 PM"
              width={400}
              height={80}
              className="w-72 md:w-96 lg:w-[400px] h-auto drop-shadow-xl"
              priority
              sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 400px"
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
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center backdrop-blur-sm bg-white/10">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
            <span className="text-white text-sm mt-2 font-medium drop-shadow-lg">
              Desliza
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
