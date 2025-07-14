import { invitationData } from "@/data/invitation-data";

export const useWhatsApp = () => {
  const sendMessage = (
    guestName: string,
    guestCount: number,
    additionalMessage?: string
  ) => {
    const phoneNumber = "+5491234567890"; // Cambiar por el número real

    let message = `Confirmación de asistencia

Nombre: ${guestName}
Cantidad de invitados: ${guestCount}

Fiesta de ${invitationData.child.name} (${invitationData.child.age} años)
Fecha: ${invitationData.event.day} ${invitationData.event.date} de ${invitationData.event.month}
Hora: ${invitationData.event.time}
Dirección: ${invitationData.event.address}`;

    if (additionalMessage && additionalMessage.trim()) {
      message += `\n\nMensaje adicional:\n${additionalMessage.trim()}`;
    }

    message += `\n\nGracias por confirmar. ¡Te esperamos!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return { sendMessage };
};
