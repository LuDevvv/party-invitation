export const heroImages = {
  // CARTEL PRINCIPAL DEL NOMBRE
  nameCard: {
    frame:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1752XXXXXX/name-card-frame.png",
    text: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752XXXXXX/benjamin-text.png",
    alt: "Cartel Benjamin",
  },

  // CARTEL DE LA EDAD (se superpone)
  ageCard: {
    frame:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1752XXXXXX/age-card-frame.png",
    text: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752XXXXXX/3-anos-text.png",
    alt: "Cartel 3 años",
  },

  // CARTEL DE FECHA
  dateCard: {
    frame:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1752XXXXXX/date-card-frame.png",
    text: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752XXXXXX/date-text.png",
    alt: "Cartel fecha",
  },

  // CARTEL DE HORA
  timeCard: {
    frame:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1752XXXXXX/time-card-frame.png",
    text: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752XXXXXX/15h-text.png",
    alt: "Cartel hora",
  },

  // CARTEL DE DIRECCIÓN
  addressCard: {
    frame:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1752XXXXXX/address-card-frame.png",
    text: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752XXXXXX/address-text.png",
    alt: "Cartel dirección",
  },
};

// Configuración de tamaños y posiciones
export const heroLayout = {
  nameSection: {
    frameSize: "w-80 md:w-96 lg:w-[500px]",
    textSize: "w-72 md:w-88 lg:w-[460px]",
    position: "relative",
  },
  ageSection: {
    frameSize: "w-48 md:w-56 lg:w-64",
    textSize: "w-40 md:w-48 lg:w-56",
    position: "absolute -bottom-4 -right-8 md:-bottom-6 md:-right-12", // Superpuesto
  },
  dateSection: {
    frameSize: "w-64 md:w-80 lg:w-96",
    textSize: "w-56 md:w-72 lg:w-88",
  },
  timeSection: {
    frameSize: "w-48 md:w-60 lg:w-72",
    textSize: "w-40 md:w-52 lg:w-64",
  },
  addressSection: {
    frameSize: "w-60 md:w-72 lg:w-80",
    textSize: "w-52 md:w-64 lg:w-72",
  },
};

// Configuración de animaciones DE ENTRADA únicamente
export const heroAnimations = {
  nameCard: {
    delay: "delay-100",
    duration: "duration-800",
  },
  ageCard: {
    delay: "delay-400",
    duration: "duration-600",
  },
  dateCard: {
    delay: "delay-700",
    duration: "duration-800",
  },
  timeCard: {
    delay: "delay-900",
    duration: "duration-600",
  },
  addressCard: {
    delay: "delay-1100",
    duration: "duration-700",
  },
};
