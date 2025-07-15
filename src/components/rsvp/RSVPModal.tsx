"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useWhatsApp } from "@/hooks/use-whatsapp";

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  guestName: string;
  guestCount: number;
  additionalMessage: string;
}

interface FormErrors {
  guestName?: string;
  guestCount?: string;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const { sendMessage } = useWhatsApp();
  const [formData, setFormData] = useState<FormData>({
    guestName: "",
    guestCount: 1,
    additionalMessage: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        guestName: "",
        guestCount: 1,
        additionalMessage: "",
      });
      setErrors({});
      setShowSuccess(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.guestName.trim()) {
      newErrors.guestName = "El nombre es obligatorio";
    } else if (formData.guestName.trim().length < 2) {
      newErrors.guestName = "El nombre debe tener al menos 2 caracteres";
    }

    if (formData.guestCount < 1) {
      newErrors.guestCount = "Debe haber al menos 1 asistente";
    } else if (formData.guestCount > 10) {
      newErrors.guestCount = "Máximo 10 asistentes";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      sendMessage(
        formData.guestName,
        formData.guestCount,
      );

      setShowSuccess(true);

      setTimeout(() => {
        onClose();
      }, 6000);
    } catch (error) {
      console.error("Error sending confirmation:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guestCount" ? parseInt(value) || 1 : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const incrementGuests = () => {
    if (formData.guestCount < 10) {
      setFormData((prev) => ({ ...prev, guestCount: prev.guestCount + 1 }));
    }
  };

  const decrementGuests = () => {
    if (formData.guestCount > 1) {
      setFormData((prev) => ({ ...prev, guestCount: prev.guestCount - 1 }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop mejorado */}
      <div className="safari-modal-backdrop fixed inset-0" onClick={onClose} />

      {/* Modal Container - centrado perfecto */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-xl transform overflow-hidden">
          {/* Success State - diseño profesional */}
          {showSuccess && (
            <div className="safari-success rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white z-10 p-20">
              <div className="text-8xl mb-8 animate-bounce">🎉</div>
              <h3 className="text-4xl font-bold mb-8 text-center">
                ¡Confirmación Enviada!
              </h3>
              <p className="text-center text-xl opacity-95 leading-relaxed mb-12 max-w-sm">
                Se abrirá WhatsApp con tu confirmación lista para enviar
              </p>

              <div className="flex gap-8 text-5xl">
                <span
                  className="animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                >
                  🦁
                </span>
                <span
                  className="animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                >
                  🐘
                </span>
                <span
                  className="animate-bounce"
                  style={{ animationDelay: "0.3s" }}
                >
                  🦒
                </span>
              </div>
            </div>
          )}

          {/* Modal principal */}
          {!showSuccess && (
            <div className="safari-modal">
              {/* Decoraciones de esquinas de madera */}
              <div className="wood-corners top-8 left-8"></div>
              <div className="wood-corners top-8 right-8"></div>
              <div className="wood-corners bottom-8 left-8"></div>
              <div className="wood-corners bottom-8 right-8"></div>

              {/* Header mejorado */}
              <div className="safari-modal-header">
                <div className="flex items-center justify-end">
                  <button
                    onClick={onClose}
                    className="text-white hover:text-yellow-200 transition-colors p-2 mr-3 hover:bg-white/10 rounded-full"
                    disabled={isSubmitting}
                  >
                    <X size={32} strokeWidth={3} />
                  </button>
                </div>
              </div>

              {/* Form Content - espaciado profesional mejorado */}
              <div className="p-2 md:p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Guest Name */}
                  <div>
                    <label className="block text-xl font-bold text-amber-900">
                      <div className="text-sm flex items-center gap-1 mb-1">
                        <span>Nombre</span>
                        <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      name="guestName"
                      value={formData.guestName}
                      onChange={handleInputChange}
                      className={`safari-input w-full text-lg ${
                        errors.guestName ? "error" : ""
                      }`}
                      placeholder="Escribe tu nombre completo"
                      disabled={isSubmitting}
                    />
                    {errors.guestName && (
                      <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                        <p className="text-red-700 font-semibold flex items-center gap-2">
                          <span className="text-red-500">⚠</span>{" "}
                          {errors.guestName}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label className="block text-xl font-bold text-amber-900">
                      <div className="text-sm flex items-center gap-1 mb-1">
                        <span>Total de asistentes (incluyéndote)</span>
                      </div>
                    </label>
                    <div className="safari-counter">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          type="button"
                          onClick={decrementGuests}
                          disabled={formData.guestCount <= 1 || isSubmitting}
                          className="safari-counter-btn decrement"
                        >
                          −
                        </button>

                        <div className="text-center min-w-[140px]">
                          <div className="text-5xl font-bold text-amber-900">
                            {formData.guestCount}
                          </div>
                          <p className="text-md text-amber-700 font-semibold">
                            {formData.guestCount === 1
                              ? "Solo tú"
                              : `${formData.guestCount} personas`}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={incrementGuests}
                          disabled={formData.guestCount >= 10 || isSubmitting}
                          className="safari-counter-btn increment"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {errors.guestCount && (
                      <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                        <p className="text-red-700 font-semibold flex items-center gap-2">
                          <span className="text-red-500">⚠</span>{" "}
                          {errors.guestCount}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-safari w-full py-4 text-1xl flex items-center justify-center gap-4 ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="safari-spinner w-8 h-8" />
                          <span>Enviando confirmación...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirmar Asistencia</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
