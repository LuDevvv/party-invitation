// src/data/location-data.ts

export interface LocationData {
  propertyName: string;
  address1: string;
  address2: string;
  reference: string;
  coordinates: string;
  googleMapsUrl: string;
  mapEmbedUrl: string;
  buildingImage: string;
  youtubeUrl?: string;
}

export const LOCATION_DATA: LocationData = {
  propertyName: "Lugar de la Fiesta Safari",
  address1: "Rua Camudos 402",
  address2: "La Romana, República Dominicana",
  reference: "Cerca del parque central",
  coordinates: "18°27'00.7\"N 69°19'24.0\"W",
  googleMapsUrl:
    "https://www.google.com/maps/place/18%C2%B027'00.7%22N+69%C2%B019'24.0%22W/@18.4506609,-69.3237455,17.61z/data=!4m4!3m3!8m2!3d18.4501944!4d-69.3233333?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2486.5216227206597!2d-69.32374545219207!3d18.45066089388451!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI3JzAwLjciTiA2OcKwMTknMjQuMCJX!5e0!3m2!1sen!2sdo!4v1748022438996!5m2!1sen!2sdo",
  buildingImage:
    "https://res.cloudinary.com/dcuapqoii/image/upload/w_600,q_70,f_auto,c_fill/v1748404986/1_xwydtj.png",
  youtubeUrl:
    "https://www.youtube.com/results?search_query=como+llegar+a+la+romana+republica+dominicana", // URL de YouTube con direcciones
};

export const LOCATION_CONFIG = {
  mapHeight: {
    mobile: "400px",
    desktop: "600px",
  },
  cardWidth: "420px",
  imageHeight: {
    mobile: "200px",
    desktop: "160px",
  },
} as const;
