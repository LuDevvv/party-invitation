"use client";
import { useState, useEffect, useCallback } from "react";
import { STORY_CONFIG } from "@/data/story-data";

export interface UseStoryGalleryReturn {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  nextImage: () => void;
  prevImage: () => void;
  pauseAutoRotation: () => void;
  resumeAutoRotation: () => void;
  isAutoRotationPaused: boolean;
}

export const useStoryGallery = (totalImages: number): UseStoryGalleryReturn => {
  const [activeIndex, setActiveIndex] = useState(1); // Imagen central por defecto
  const [isAutoRotationPaused, setIsAutoRotationPaused] = useState(false);

  // Función para avanzar a la siguiente imagen
  const nextImage = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  // Función para retroceder a la imagen anterior
  const prevImage = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  // Pausar auto-rotación
  const pauseAutoRotation = useCallback(() => {
    setIsAutoRotationPaused(true);
  }, []);

  // Reanudar auto-rotación
  const resumeAutoRotation = useCallback(() => {
    setIsAutoRotationPaused(false);
  }, []);

  // Control de auto-rotación mejorado
  const handleSetActiveIndex = useCallback((index: number) => {
    setActiveIndex(index);
    setIsAutoRotationPaused(true);
  }, []);

  // Auto-rotación con pausa
  useEffect(() => {
    if (isAutoRotationPaused) return;

    const interval = setInterval(() => {
      nextImage();
    }, STORY_CONFIG.autoRotateInterval);

    return () => clearInterval(interval);
  }, [nextImage, isAutoRotationPaused]);

  // Pausar cuando el usuario interactúa y reanudar después de un tiempo
  useEffect(() => {
    if (isAutoRotationPaused) {
      const timer = setTimeout(() => {
        setIsAutoRotationPaused(false);
      }, STORY_CONFIG.autoRotateInterval * 2); // Pausa por 8 segundos

      return () => clearTimeout(timer);
    }
  }, [isAutoRotationPaused]);

  return {
    activeIndex,
    setActiveIndex: handleSetActiveIndex,
    nextImage,
    prevImage,
    pauseAutoRotation,
    resumeAutoRotation,
    isAutoRotationPaused,
  };
};
