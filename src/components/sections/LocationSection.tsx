"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, MapPin, Play, Navigation } from "lucide-react";
import { LOCATION_DATA } from "@/data/location-data";

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      className="relative py-16 md:py-24 overflow-hidden flex justify-center"
      style={{
        background:
          "linear-gradient(135deg, #f0f9f0 0%, #fff7ed 50%, #f0f9f0 100%)",
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Título principal con marco temático */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <Image
              src="https://res.cloudinary.com/dcuapqoii/image/upload/v1752269500/Artboard_7_zhh9g5.png"
              alt="Marco ubicación"
              width={450}
              height={180}
              className="w-[350px] md:w-[450px] h-auto drop-shadow-xl"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-800 leading-tight text-center">
                📍 Ubicación
              </h2>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mt-6 leading-relaxed font-medium">
            Encuentra el lugar perfecto para nuestra aventura safari
          </p>
        </div>

        {/* Mobile card mejorada */}
        <div className="md:hidden mb-8">
          <div
            className="bg-white shadow-2xl rounded-3xl overflow-hidden border-6 border-amber-700 relative"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.06) 0%, transparent 50%)
              `,
            }}
          >
            {/* Decoraciones de esquinas */}
            <div className="absolute top-3 left-3 w-3 h-3 bg-amber-800 rounded-full opacity-30">
              <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-amber-600 rounded-full"></div>
            </div>
            <div className="absolute top-3 right-3 w-3 h-3 bg-amber-800 rounded-full opacity-30">
              <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-amber-600 rounded-full"></div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-amber-900">
                  {LOCATION_DATA.propertyName}
                </h3>
              </div>

              <div className="flex gap-3">
                <a
                  href={LOCATION_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Google Maps
                </a>

                {LOCATION_DATA.youtubeUrl && (
                  <a
                    href={LOCATION_DATA.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Play size={16} className="mr-2" />
                    Video Tour
                  </a>
                )}
              </div>
            </div>

            <div className="relative h-48 w-full">
              <Image
                src={LOCATION_DATA.buildingImage}
                alt={LOCATION_DATA.propertyName}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Map container mejorado */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-6 border-amber-700">
          {/* Embedded Google Map */}
          <iframe
            src={LOCATION_DATA.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
            title={`${LOCATION_DATA.propertyName} Location`}
          />

          {/* Desktop info card overlay mejorada */}
          <div className="hidden md:block absolute top-8 left-8 w-[400px] z-10">
            <div
              className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl shadow-2xl overflow-hidden border-6 border-amber-700 relative backdrop-blur-sm"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.06) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.06) 0%, transparent 50%)
                `,
              }}
            >
              {/* Decoraciones de esquinas */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-amber-800 rounded-full opacity-30">
                <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-amber-600 rounded-full"></div>
              </div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-amber-800 rounded-full opacity-30">
                <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-amber-600 rounded-full"></div>
              </div>

              {/* Cinta decorativa */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-600 px-4 py-1.5 rounded-full shadow-lg border-3 border-green-800">
                  <span className="text-white font-bold text-sm tracking-wide">
                    LUGAR DEL EVENTO
                  </span>
                </div>
              </div>

              <div className="p-6 pt-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900">
                    {LOCATION_DATA.propertyName}
                  </h3>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-5 border-2 border-amber-200 shadow-sm">
                  <div className="flex items-start">
                    <Navigation
                      className="text-green-600 mr-3 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {LOCATION_DATA.address1}
                      </p>
                      <p className="text-gray-600">{LOCATION_DATA.address2}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={LOCATION_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-blue-800"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Maps
                  </a>

                  {LOCATION_DATA.youtubeUrl && (
                    <a
                      href={LOCATION_DATA.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-red-800"
                    >
                      <Play size={16} className="mr-2" />
                      Video
                    </a>
                  )}
                </div>
              </div>

              <div className="relative h-32 w-full">
                <Image
                  src={LOCATION_DATA.buildingImage}
                  alt={LOCATION_DATA.propertyName}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Floating action button para móvil */}
          <div className="md:hidden absolute bottom-6 right-6">
            <a
              href={LOCATION_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 border-3 border-blue-800"
            >
              <Navigation size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
