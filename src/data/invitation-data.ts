import { InvitationData } from "@/types/invitation";

export const invitationData: InvitationData = {
  child: {
    name: "Ian",
    age: "1 AÑO",
    photo:
      "https://res.cloudinary.com/dcuapqoii/image/upload/v1752270346/WhatsApp_Image_2025-07-11_at_15.53.22_orzl9h.jpg",
  },
  event: {
    date: "3",
    day: "Domingo",
    month: "Agosto",
    time: "2:30 PM",
    address: "Rua Camudos 402",
  },
  story: {
    title: "El regalo llamado Ian",
    content: `Había una vez un corazón lleno de ambición. Durante años, ese corazón soñaba con un pequeño milagro: un bebé. No era un deseo cualquiera, era un clamor profundo, acompañado de lágrimas, visitas a médicos, oraciones al cielo y silencios dolorosos.

La vida no era fácil en ese entonces. La salud flaqueaba, los días eran pesados y los hospitales se volvían rutina. Había momentos en los que parecía que la esperanza se apagaba lentamente…

Pero justo cuando todo parecía perdido, cuando ya no quedaban fuerzas ni motivos para seguir, sucedió algo inesperado: ese corazón cansado decidió entrar a una iglesia. No sabía qué buscaba exactamente, pero allí, en medio del silencio y la fe, recibió una promesa de parte de Dios.

Semanas después, como si el cielo hablara a través de los sueños, apareció él. Un bebé, con una carita dulce, con una paz inexplicable... Era el mismo bebé que tanto se había esperado, y en ese mismo sueño, Dios le dio su nombre: Ian, que significa "Aquel dado por Dios".

Así fue como Ian llegó. En el momento justo, como respuesta divina, como luz en medio de la oscuridad. Un bebé esperado, deseado y profundamente amado desde antes de existir.

"Porque los milagros no siempre llegan cuando uno quiere… pero siempre llegan cuando uno más los necesita".`,
  },
};

// WhatsApp Configuration
export const whatsappConfig = {
  phoneNumber: "+1234567890", // Cambiar por el número real
  messageTemplate: (guestName: string, guestCount: number) =>
    `🎉 ¡Confirmación de asistencia! 🦁

👤 Nombre: ${guestName}
👥 Cantidad de invitados: ${guestCount}

🎂 Fiesta de Ian (1 año)
📅 ${invitationData.event.day} ${invitationData.event.date} de ${invitationData.event.month}
⏰ ${invitationData.event.time}
📍 ${invitationData.event.address}

¡Nos vemos en la aventura safari! 🦒🐵`,
};

// Safari Theme Colors
export const themeColors = {
  jungle: {
    primary: "#369c36",
    secondary: "#5ab85a",
    dark: "#1a411a",
  },
  safari: {
    primary: "#e2852f",
    secondary: "#f0c086",
    dark: "#72371d",
  },
  sunset: {
    primary: "#f97316",
    secondary: "#fdba74",
    dark: "#7c2d12",
  },
};

// Animation Settings
export const animationSettings = {
  videoDuration: 120, // 2 minutos en segundos
  autoplayAudio: false,
  floatDuration: 3,
  swayDuration: 4,
};
