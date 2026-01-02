
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: number;
  experience?: string;
  city?: string;
  education?: string;
  iqScore?: number;
}

export enum ServiceType {
  TRAINING = 'Training',
  CERTIFICATES = 'Training Certificates',
  MOU = 'MOUs',
  SPECIALIZED = 'Specialized Security Training'
}

export type Language = 'en' | 'kn' | 'ta' | 'te';

export interface QuizScenario {
  id: number;
  question: string;
  options: { text: string; points: number; feedback: string }[];
  image: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  manager: string;
  isHeadOffice?: boolean;
}
