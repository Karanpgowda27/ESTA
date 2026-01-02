
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: number;
  // Recruitment specifics
  experience?: string;
  city?: string;
  education?: string;
}

export enum ServiceType {
  TRAINING = 'Training',
  CERTIFICATES = 'Training Certificates',
  MOU = 'MOUs',
  SPECIALIZED = 'Specialized Security Training'
}

export interface Trainer {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  badges: string[];
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  manager: string;
  isHeadOffice?: boolean;
}
