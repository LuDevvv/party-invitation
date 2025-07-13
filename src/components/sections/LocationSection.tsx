"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import { LOCATION_DATA } from "@/data/location-data";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título simple y centrado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-gray-900 mb-2">
            Find Us Here
          </h2>
        </div>

        {/* Contenedor del mapa */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
          {/* Mapa embebido */}
          <iframe
            src={LOCATION_DATA.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location"
          />

          {/* Tarjeta de información - Solo desktop */}
          <div className="hidden md:block absolute top-6 left-6 w-[320px] z-10">
            <div className="bg-white rounded-lg shadow-lg border border-gray-100">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Lugar de la Fiesta Safari
                </h3>

                <div className="text-gray-600 text-sm mb-4">
                  <p className="font-medium">{LOCATION_DATA.address1}</p>
                  <p>{LOCATION_DATA.address2}</p>
                </div>

                <div className="flex gap-2 mb-4">
                  <a
                    href={LOCATION_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Open in Maps
                  </a>
                </div>
              </div>

              {/* Imagen del lugar */}
              <div className="relative h-[120px] w-full">
                <Image
                  src={LOCATION_DATA.buildingImage}
                  alt="Location"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Información móvil */}
        <div className="md:hidden mt-6">
          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Lugar de la Fiesta Safari
            </h3>

            <div className="text-gray-600 text-sm mb-4">
              <p className="font-medium">{LOCATION_DATA.address1}</p>
              <p>{LOCATION_DATA.address2}</p>
            </div>

            <div className="flex gap-3">
              <a
                href={LOCATION_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                Google Maps
              </a>

              {LOCATION_DATA.youtubeUrl && (
                <a
                  href={LOCATION_DATA.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Play size={16} className="mr-2" />
                  YouTube
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
