"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RSVPModal } from "@/components/rsvp/RSVPModal";
import { ATTENDANCE_TITLE_IMAGE } from "@/data/story-data";

export const RSVPSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        id="rsvp"
        className="relative min-h-screen flex items-center justify-center py-10 px-8 overflow-hidden"
      >
        {/* Container principal centrado */}
        <div className="w-full max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center text-center space-y-12">
            {/* Título como imagen optimizada con marco */}
            <div className="flex flex-col items-center justify-center text-center mb-6">
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
                      src={ATTENDANCE_TITLE_IMAGE.src}
                      alt={ATTENDANCE_TITLE_IMAGE.alt}
                      width={300}
                      height={60}
                      className="w-64 h-auto"
                      priority={false}
                      sizes="(max-width: 768px) 192px, (max-width: 1024px) 240px, 288px"
                    />
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed font-medium">
                No te pierdas esta increíble aventura safari.
              </p>
            </div>

            {/* Cartel principal creativo */}
            <div className="animate-scale-in w-full max-w-6xl">
              <div
                className="relative bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 rounded-3xl shadow-2xl border-8 border-amber-800 p-6 md:p-8 lg:p-12 overflow-hidden"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(160, 82, 45, 0.08) 0%, transparent 50%),
                    linear-gradient(45deg, rgba(101, 67, 33, 0.03) 25%, transparent 25%),
                    linear-gradient(-45deg, rgba(101, 67, 33, 0.03) 25%, transparent 25%)
                  `,
                  backgroundSize: "100% 100%, 100% 100%, 30px 30px, 30px 30px",
                }}
              >
                {/* Marco interior decorativo */}
                <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-white/30 rounded-2xl pointer-events-none"></div>

                {/* Decoraciones de esquinas de madera */}
                <div className="absolute top-6 left-6 w-4 h-4 bg-amber-800 rounded-full opacity-40">
                  <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-amber-600 rounded-full"></div>
                </div>
                <div className="absolute top-6 right-6 w-4 h-4 bg-amber-800 rounded-full opacity-40">
                  <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-amber-600 rounded-full"></div>
                </div>
                <div className="absolute bottom-6 left-6 w-4 h-4 bg-amber-800 rounded-full opacity-40">
                  <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-amber-600 rounded-full"></div>
                </div>
                <div className="absolute bottom-6 right-6 w-4 h-4 bg-amber-800 rounded-full opacity-40">
                  <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-amber-600 rounded-full"></div>
                </div>

                {/* Pregunta central con diseño creativo */}
                <div className="text-center mb-12 mt-4">
                  <div className="relative">
                    {/* Fondo decorativo para el texto */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/50 to-transparent rounded-3xl transform -skew-y-1"></div>

                    <h3 className="relative text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-900 mb-2 py-6">
                      <span className="block mb-3">
                        <span className="inline-block animate-bounce mr-3 text-3xl md:text-4xl lg:text-5xl">
                          🦁
                        </span>
                        <span className="bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent">
                          ¿Vienes a la
                        </span>
                        <span className="inline-block animate-float ml-3 text-3xl md:text-4xl lg:text-5xl">
                          🐘
                        </span>
                      </span>
                      <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-green-700 drop-shadow-lg">
                        aventura safari?
                      </span>
                    </h3>

                    {/* Líneas decorativas */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-amber-400 rounded-full max-w-16"></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      <div
                        className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                      <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-amber-400 rounded-full max-w-16"></div>
                    </div>
                  </div>
                </div>

                {/* Botón principal simple */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    {/* Efecto de resplandor */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-400 rounded-2xl opacity-20 animate-pulse blur-lg scale-110"></div>

                    <button
                      onClick={openModal}
                      className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white font-bold text-xl md:text-2xl lg:text-3xl px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-green-800 hover:border-green-900"
                    >
                      <span className="flex items-center gap-3">
                        ¡CONFIRMAR!
                      </span>

                      {/* Efecto brillante */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </button>

                    {/* Partículas flotantes */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-70"></div>
                    <div
                      className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-70"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="text-center">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-amber-200 max-w-md mx-auto">
                    <p className="text-base md:text-lg text-amber-800 font-semibold">
                      Tu confirmación será enviada por WhatsApp
                    </p>
                    <div className="mt-2 flex justify-center gap-1">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <RSVPModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
