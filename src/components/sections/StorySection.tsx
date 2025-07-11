"use client";
import React, { useState, useEffect } from "react";

const StorySection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Imagen central activa por defecto

  // Imágenes para la galería en formato polaroid
  const storyImages = [
    {
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752270346/WhatsApp_Image_2025-07-11_at_15.53.22_orzl9h.jpg",
      alt: "Momento especial 1",
    },
    {
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752270346/WhatsApp_Image_2025-07-11_at_15.53.22_orzl9h.jpg",
      alt: "Momento especial 2",
    },
    {
      src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752270346/WhatsApp_Image_2025-07-11_at_15.53.22_orzl9h.jpg",
      alt: "Momento especial 3",
    },
  ];

  // Historia de Ian
  const storyData = {
    title: "Historia",
    content: `Había una vez un corazón lleno de ambición. Durante años, ese corazón soñaba con un pequeño milagro: un bebé. No era un deseo cualquiera, era un clamor profundo, acompañado de lágrimas, visitas a médicos, oraciones al cielo y silencios dolorosos.

La vida no era fácil en ese entonces. La salud flaqueaba, los días eran pesados y los hospitales se volvían rutina. Había momentos en los que parecía que la esperanza se apagaba lentamente…

Pero justo cuando todo parecía perdido, cuando ya no quedaban fuerzas ni motivos para seguir, sucedió algo inesperado: ese corazón cansado decidió entrar a una iglesia. No sabía qué buscaba exactamente, pero allí, en medio del silencio y la fe, recibió una promesa de parte de Dios.`,
  };

  // Auto-rotación de la imagen activa cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Layout responsive: Mobile = vertical, Desktop = horizontal */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Galería de Fotos Polaroid Mejorada */}
          <div className="w-full flex justify-center lg:justify-end order-1 lg:order-1 overflow-hidden">
            <div className="relative w-[400px] h-[280px] md:w-[450px] md:h-[350px] lg:w-[480px] lg:h-[380px] mx-auto">
              {/* Foto 1 - Izquierda */}
              <div
                className={`absolute w-40 h-52 md:w-44 md:h-56 lg:w-48 lg:h-60 bg-white rounded-lg shadow-xl cursor-pointer transition-all duration-500 ${
                  activeIndex === 0
                    ? "z-30 brightness-100 scale-105"
                    : "z-10 brightness-90 hover:brightness-95"
                }`}
                style={{
                  transform: `rotate(-10deg) ${
                    activeIndex === 0 ? "scale(1.05)" : ""
                  }`,
                  top: "20px",
                  left: "20px",
                }}
                onClick={() => setActiveIndex(0)}
              >
                <div className="w-full p-6 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={storyImages[0].src}
                    alt={storyImages[0].alt}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                {activeIndex === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-lg pointer-events-none" />
                )}
              </div>

              {/* Foto 2 - Centro */}
              <div
                className={`absolute w-40 h-52 md:w-44 md:h-56 lg:w-48 lg:h-60 bg-white rounded-lg shadow-xl cursor-pointer transition-all duration-500 ${
                  activeIndex === 1
                    ? "z-30 brightness-100 scale-105"
                    : "z-20 brightness-90 hover:brightness-95"
                }`}
                style={{
                  transform: `rotate(0deg) ${
                    activeIndex === 1 ? "scale(1.05)" : ""
                  }`,
                  top: "10px",
                  left: "50%",
                  marginLeft: "-80px",
                }}
                onClick={() => setActiveIndex(1)}
              >
                <div className="w-full p-6 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={storyImages[1].src}
                    alt={storyImages[1].alt}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                {activeIndex === 1 && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-lg pointer-events-none" />
                )}
              </div>

              {/* Foto 3 - Derecha */}
              <div
                className={`absolute w-40 h-52 md:w-44 md:h-56 lg:w-48 lg:h-60 bg-white rounded-lg shadow-xl cursor-pointer transition-all duration-500 ${
                  activeIndex === 2
                    ? "z-30 brightness-100 scale-105"
                    : "z-10 brightness-90 hover:brightness-95"
                }`}
                style={{
                  transform: `rotate(10deg) ${
                    activeIndex === 2 ? "scale(1.05)" : ""
                  }`,
                  top: "20px",
                  right: "20px",
                }}
                onClick={() => setActiveIndex(2)}
              >
                <div className="w-full p-6 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={storyImages[2].src}
                    alt={storyImages[2].alt}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                {activeIndex === 2 && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-lg pointer-events-none" />
                )}
              </div>

              {/* Indicadores sutiles */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-green-500 w-6" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contenido de Historia */}
          <div className="w-full order-2 lg:order-1">
            <div className="space-y-6">
              {/* Título como imagen */}
              <div className="flex items-center justify-center text-center">
                <img
                  src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752269498/Artboard_6_copy_u0ayeq.png"
                  alt="Historia"
                  className="mx-auto w-60 h-16 md:h-20 lg:h-24  object-contain"
                />
              </div>

              {/* Contenido como texto */}
              <div className="bg-white rounded-2xl p-12 md:p-20 shadow-lg border border-green-100">
                <div className="text-gray-700 leading-relaxed text-base md:text-lg space-y-4">
                  {storyData.content.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className={`${
                        paragraph.includes('"Porque los milagros')
                          ? "text-green-700 font-medium italic text-center border-l-4 border-green-500 pl-4 bg-green-50 py-2 rounded-r-lg"
                          : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
