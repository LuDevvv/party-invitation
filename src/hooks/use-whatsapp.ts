import { invitationData } from "@/data/invitation-data";

export const useWhatsApp = () => {
  const sendMessage = (
    guestName: string,
    guestCount: number,
    additionalMessage?: string
  ) => {
    const phoneNumber = "+5491234567890"; // Cambiar por el número real

    let message = `🎉 ¡Confirmación de asistencia! 🦁

👤 Nombre: ${guestName}
👥 Cantidad de invitados: ${guestCount}

🎂 Fiesta de ${invitationData.child.name} (${invitationData.child.age})
📅 ${invitationData.event.day} ${invitationData.event.date} de ${invitationData.event.month}
⏰ ${invitationData.event.time}
📍 ${invitationData.event.address}`;

    // Agregar mensaje adicional si existe
    if (additionalMessage && additionalMessage.trim()) {
      message += `\n\n💬 Mensaje adicional:\n${additionalMessage.trim()}`;
    }

    message += `\n\n¡Nos vemos en la aventura safari! 🦒🐵`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return { sendMessage };
};
