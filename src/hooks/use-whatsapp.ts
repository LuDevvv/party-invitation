import { invitationData } from "@/data/invitation-data";

export const useWhatsApp = () => {
  const sendMessage = (guestName: string, guestCount: number) => {
    const phoneNumber = "+5491234567890"; // Cambiar por el número real

    let message = `Confirmación de asistencia

Nombre: ${guestName}
Cantidad de invitados: ${guestCount}

Fiesta de ${invitationData.child.name} (${invitationData.child.age})
Fecha: ${invitationData.event.day} ${invitationData.event.date} de ${invitationData.event.month}
Hora: ${invitationData.event.time}
Dirección: ${invitationData.event.address}

Google Maps: https://short-link.me/13kfL
Cómo llegar: https://short-link.me/17A3s`;

    message += `\n\nGracias por confirmar. ¡Te esperamos!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return { sendMessage };
};
