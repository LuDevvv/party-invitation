export interface StoryImage {
  src: string;
  alt: string;
}

export interface StoryContent {
  title: string;
  paragraphs: string[];
  quote: string;
}

export const STORY_IMAGES: StoryImage[] = [
  {
    src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752270346/WhatsApp_Image_2025-07-11_at_15.53.22_orzl9h.jpg",
    alt: "Momento especial 1",
  },
  {
    src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752465650/WhatsApp_Image_2025-07-13_at_23.47.22_pxgxki.jpg",
    alt: "Momento especial 2",
  },
  {
    src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752465650/WhatsApp_Image_2025-07-13_at_23.45.55_cjm6kh.jpg",
    alt: "Momento especial 3",
  },
];

export const STORY_CONTENT: StoryContent = {
  title: "Historia",
  paragraphs: [
    "Había una vez un corazón lleno de ambición. Durante años, ese corazón soñaba con un pequeño milagro: un bebé. No era un deseo cualquiera, era un clamor profundo, acompañado de lágrimas, visitas a médicos, oraciones al cielo y silencios dolorosos.",
    "La vida no era fácil en ese entonces. La salud flaqueaba, los días eran pesados y los hospitales se volvían rutina. Había momentos en los que parecía que la esperanza se apagaba lentamente…",
    "Pero justo cuando todo parecía perdido, cuando ya no quedaban fuerzas ni motivos para seguir, sucedió algo inesperado: ese corazón cansado decidió entrar a una iglesia. No sabía qué buscaba exactamente, pero allí, en medio del silencio y la fe, recibió una promesa de parte de Dios.",
    "Semanas después, como si el cielo hablara a través de los sueños, apareció él. Un bebé, con una carita dulce, con una paz inexplicable... Era el mismo bebé que tanto se había esperado, y en ese mismo sueño, Dios le dio su nombre: Ian, que significa &ldquo;Aquel dado por Dios&rdquo;.",
    "Así fue como Ian llegó. En el momento justo, como respuesta divina, como luz en medio de la oscuridad. Un bebé esperado, deseado y profundamente amado desde antes de existir.",
  ],
  quote:
    "&ldquo;Porque los milagros no siempre llegan cuando uno quiere… pero siempre llegan cuando uno más los necesita&rdquo;.",
};

export const SAFARI_DIVIDER_IMAGE = {
  src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752268495/Artboard_2_copy_3_hnzrbl.png",
  alt: "Safari Divider",
};

export const STORY_TITLE_IMAGE = {
  src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752269498/Artboard_6_copy_u0ayeq.png",
  alt: "Historia",
};

export const LOCATION_TITLE_IMAGE = {
  src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752465636/Artboard_6_copy_4_lrmpli.png",
  alt: "Ubicación",
};

export const ATTENDANCE_TITLE_IMAGE = {
  src: "https://res.cloudinary.com/dcuapqoii/image/upload/v1752465636/Artboard_6_copy_3_iaekk0.png",
  alt: "Asistencia",
};

export const STORY_CONFIG = {
  autoRotateInterval: 4000, // 4 segundos
  polaroidAnimationDuration: 500,
  maxImages: 3,
} as const;
