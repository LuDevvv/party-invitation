// src/lib/utils.ts

/**
 * Combina clases de CSS (versión simplificada sin dependencias)
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Formatea un número de teléfono para WhatsApp
 */
export function formatPhoneForWhatsApp(phone: string): string {
  // Remover todos los caracteres no numéricos
  const numbersOnly = phone.replace(/\D/g, "");

  // Si no tiene código de país, agregar el de Argentina por defecto
  if (numbersOnly.length === 10) {
    return `549${numbersOnly}`;
  }

  // Si ya tiene código de país, devolverlo
  return numbersOnly;
}

/**
 * Genera una URL de WhatsApp con mensaje pre-formateado
 */
export function generateWhatsAppURL(phone: string, message: string): string {
  const formattedPhone = formatPhoneForWhatsApp(phone);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}

/**
 * Valida si una cadena es un email válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida si una cadena es un número de teléfono válido
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  const numbersOnly = phone.replace(/\D/g, "");
  return phoneRegex.test(numbersOnly) && numbersOnly.length >= 8;
}

/**
 * Formatea una fecha para mostrar
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/**
 * Convierte texto a formato de slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remover acentos
    .replace(/[^a-z0-9 -]/g, "") // Remover caracteres especiales
    .replace(/\s+/g, "-") // Espacios a guiones
    .replace(/-+/g, "-") // Múltiples guiones a uno
    .trim();
}

/**
 * Debounce function para optimizar búsquedas
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Genera un ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Copia texto al portapapeles
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback para navegadores más antiguos
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      document.body.removeChild(textArea);
      return true;
    } catch {
      document.body.removeChild(textArea);
      return false;
    }
  }
}

/**
 * Verifica si el dispositivo es móvil
 */
export function isMobile(): boolean {
  if (typeof window === "undefined") return false;

  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Obtiene el tipo de conexión de red
 */
export function getConnectionType(): string {
  if (typeof navigator === "undefined") return "unknown";

  interface NavigatorWithConnection extends Navigator {
    connection?: {
      effectiveType?: string;
    };
    mozConnection?: {
      effectiveType?: string;
    };
    webkitConnection?: {
      effectiveType?: string;
    };
  }

  const nav = navigator as NavigatorWithConnection;
  const connection =
    nav.connection || nav.mozConnection || nav.webkitConnection;

  return connection?.effectiveType || "unknown";
}

/**
 * Verifica si la conexión es lenta
 */
export function isSlowConnection(): boolean {
  const connectionType = getConnectionType();
  return ["slow-2g", "2g"].includes(connectionType);
}

/**
 * Optimiza URLs de imágenes para diferentes dispositivos
 */
export function optimizeImageUrl(
  src: string,
  width?: number,
  quality?: number
): string {
  // Si es una URL externa, devolverla tal como está
  if (src.startsWith("http")) {
    return src;
  }

  // Para imágenes locales, se pueden agregar parámetros de optimización
  // Esto dependería del servicio de optimización de imágenes que uses
  const params = new URLSearchParams();

  if (width) {
    params.append("w", width.toString());
  }

  if (quality) {
    params.append("q", quality.toString());
  }

  const queryString = params.toString();
  return queryString ? `${src}?${queryString}` : src;
}

/**
 * Maneja errores de carga de imágenes
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement>,
  fallbackSrc?: string
): void {
  const img = event.currentTarget;

  if (fallbackSrc && img.src !== fallbackSrc) {
    img.src = fallbackSrc;
  } else {
    // Imagen de fallback por defecto
    img.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4=";
  }
}
