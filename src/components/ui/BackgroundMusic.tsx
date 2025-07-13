"use client";

import React, { useState, useRef, useEffect } from "react";
import { Music, VolumeX, Play } from "lucide-react";

interface BackgroundMusicProps {
  audioUrl: string;
  defaultVolume?: number;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  audioUrl,
  defaultVolume = 0.3,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canAutoplay, setCanAutoplay] = useState(true);

  // Manejar la carga inicial del audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = async () => {
      audio.volume = defaultVolume;

      // Intentar reproducir automáticamente
      try {
        await audio.play();
        setIsPlaying(true);
        setCanAutoplay(true);
      } catch {
        // Si falla el autoplay, marcar que no puede reproducir automáticamente
        setCanAutoplay(false);
        setIsPlaying(false);
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      // Reiniciar la canción cuando termine (loop)
      audio.currentTime = 0;
      if (!isMuted && canAutoplay) {
        audio.play().catch(() => {});
      }
    };

    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [defaultVolume, isMuted, canAutoplay]);

  const handleButtonClick = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Si no puede hacer autoplay y no está reproduciendo, iniciar música
    if (!canAutoplay && !isPlaying) {
      try {
        await audio.play();
        setCanAutoplay(true);
        setIsPlaying(true);
        setIsMuted(false);
      } catch {
        console.log("Error al reproducir");
      }
      return;
    }

    // Toggle normal mute/unmute
    if (isMuted) {
      // Activar sonido
      audio.volume = defaultVolume;
      setIsMuted(false);
      try {
        await audio.play();
      } catch {
        console.log("Error al reproducir");
      }
    } else {
      // Silenciar
      audio.pause();
      setIsMuted(true);
    }
  };

  // Determinar el estado visual del botón
  const getButtonState = () => {
    if (!canAutoplay && !isPlaying) {
      return {
        bgColor:
          "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 border-yellow-600",
        icon: <Play className="text-white" size={24} />,
        title: "Click para iniciar música safari",
        animate: "animate-pulse",
      };
    }

    if (isMuted) {
      return {
        bgColor:
          "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 border-gray-700",
        icon: <VolumeX className="text-white" size={24} />,
        title: "Activar música safari",
        animate: "",
      };
    }

    return {
      bgColor:
        "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 border-green-800",
      icon: <Music className="text-white" size={24} />,
      title: "Silenciar música",
      animate: "",
    };
  };

  const buttonState = getButtonState();

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} src={audioUrl} preload="auto" loop playsInline />

      {/* Floating music control */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleButtonClick}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 border-4 ${buttonState.bgColor} ${buttonState.animate}`}
          title={buttonState.title}
        >
          {buttonState.icon}
        </button>

        {/* Indicador de estado activo */}
        {isPlaying && !isMuted && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white animate-pulse"></div>
        )}

        {/* Indicador de "necesita click" */}
        {!canAutoplay && !isPlaying && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        )}
      </div>
    </>
  );
};
