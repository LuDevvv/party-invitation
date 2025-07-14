export interface Child {
  name: string;
  age: string;
  photo: string;
}

export interface Event {
  date: string;
  day: string;
  month: string;
  time: string;
  address: string;
}

export interface Story {
  title: string;
  content: string;
}

export interface RSVPData {
  guestName: string;
  guestCount: number;
  phone?: string;
}

export interface InvitationData {
  child: Child;
  event: Event;
  story: Story;
}

export interface WhatsAppMessage {
  phone: string;
  message: string;
}

export interface ThemeColors {
  jungle: {
    primary: string;
    secondary: string;
    dark: string;
  };
  safari: {
    primary: string;
    secondary: string;
    dark: string;
  };
  sunset: {
    primary: string;
    secondary: string;
    dark: string;
  };
}

export interface AnimationSettings {
  videoDuration: number;
  autoplayAudio: boolean;
  floatDuration: number;
  swayDuration: number;
}
