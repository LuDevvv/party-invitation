// src/types/rsvp.ts
export interface RSVPFormData {
  guestName: string;
  guestCount: number;
  additionalMessage?: string;
  phone?: string;
  email?: string;
}

export interface RSVPFormErrors {
  guestName?: string;
  guestCount?: string;
  phone?: string;
  email?: string;
}

export interface RSVPResponse {
  success: boolean;
  message: string;
  data?: RSVPFormData;
}

export interface RSVPValidationRules {
  guestName: {
    required: boolean;
    minLength: number;
    maxLength: number;
  };
  guestCount: {
    min: number;
    max: number;
  };
  additionalMessage: {
    maxLength: number;
  };
}
