"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SafariLayoutProps {
  children: React.ReactNode;
}

const SafariLayout = ({ children }: SafariLayoutProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Detectar si se ha hecho scroll (más de 100px)
      setIsScrolled(currentScrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Liana Izquierda - OVERLAY fija */}
      <div className="fixed left-[-55px] top-0 h-full w-24 md:w-32 lg:w-40 z-50 pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752268494/Artboard_2_copy_2_emo0gd.png"
          alt="Liana izquierda"
          fill
          className="object-cover object-right opacity-90"
          priority
          sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
        />
      </div>

      {/* Liana Derecha - OVERLAY fija */}
      <div className="fixed right-[-80px] top-0 h-full w-24 md:w-32 lg:w-40 z-50 pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752268494/Artboard_2_copy_fqjwku.png"
          alt="Liana derecha"
          fill
          className="object-cover object-left opacity-90"
          priority
          sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
        />
      </div>

      {/* Follaje Superior Principal - OVERLAY que se oculta con scroll */}
      <div
        className={`fixed -top-4 left-0 right-1/2 h-32 md:h-40 lg:h-48 z-40 pointer-events-none transition-all duration-500 ease-out ${
          isScrolled
            ? "opacity-0 transform -translate-y-full"
            : "opacity-80 transform translate-y-0"
        }`}
        style={{
          transform: `translateY(${isScrolled ? "-100%" : scrollY * -0.5}px)`,
        }}
      >
        <Image
          src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752268494/Artboard_1_ijjtv1.png"
          alt="Follaje superior izquierdo"
          fill
          className="object-cover object-top scale-110"
          priority
          sizes="50vw"
        />
      </div>

      {/* Follaje Superior Secundario - OVERLAY que se oculta con scroll */}
      <div
        className={`fixed -top-4 right-0 left-1/2 h-32 md:h-40 lg:h-48 z-40 pointer-events-none transition-all duration-500 ease-out ${
          isScrolled
            ? "opacity-0 transform -translate-y-full"
            : "opacity-75 transform translate-y-0"
        }`}
        style={{
          transform: `translateY(${
            isScrolled ? "-100%" : scrollY * -0.4
          }px) scaleX(-1)`,
        }}
      >
        <Image
          src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752268494/Artboard_1_ijjtv1.png"
          alt="Follaje superior derecho"
          fill
          className="object-cover object-top scale-110"
          priority
          sizes="50vw"
        />
      </div>

      {/* Follaje Superior Central - Capa adicional para mayor densidad */}
      <div
        className={`fixed -top-5 left-1/4 right-1/4 h-28 md:h-36 lg:h-44 z-39 pointer-events-none transition-all duration-700 ease-out ${
          isScrolled
            ? "opacity-0 transform -translate-y-full"
            : "opacity-60 transform translate-y-0"
        }`}
        style={{
          transform: `translateY(${isScrolled ? "-100%" : scrollY * -0.3}px)`,
        }}
      >
        <Image
          src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752268494/Artboard_1_ijjtv1.png"
          alt="Follaje superior central"
          fill
          className="object-cover object-top opacity-70 scale-105"
          sizes="50vw"
        />
      </div>

      {/* Contenido principal SIN padding extra - mantiene layout original */}
      <div className="relative z-10">{children}</div>

      {/* Indicador visual sutil de scroll en las lianas */}
      <div className="fixed bottom-4 left-4 z-50 pointer-events-none">
        <div
          className={`w-2 h-8 bg-green-500 rounded-full transition-all duration-300 ${
            scrollY > 50 ? "opacity-60" : "opacity-20"
          }`}
          style={{
            height: `${Math.min(scrollY / 10, 40)}px`,
          }}
        />
      </div>
    </div>
  );
};

export default SafariLayout;
