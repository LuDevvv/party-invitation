import { invitationData } from "@/data/invitation-data";

export const useWhatsApp = () => {
  const sendMessage = (guestName: string, guestCount: number) => {
    const phoneNumber = "+5491234567890";
    const message = `🎉 ¡Confirmación de asistencia! 🦁

👤 Nombre: ${guestName}
👥 Cantidad de invitados: ${guestCount}

🎂 Fiesta de ${invitationData.child.name} (${invitationData.child.age})
📅 ${invitationData.event.day} ${invitationData.event.date} de ${invitationData.event.month}
⏰ ${invitationData.event.time}
📍 ${invitationData.event.address}

¡Nos vemos en la aventura safari! 🦒🐵`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return { sendMessage };
};
