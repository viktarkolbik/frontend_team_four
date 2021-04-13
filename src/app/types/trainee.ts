interface ConvenientTime {
  from?: number;
  to?: number;
}

export interface Trainee {
  id?: string;
  idInternship?: string;
  country: string;
  convenientTime: ConvenientTime[];
  city: string;
  education: string;
  email: string;
  englishLevel: string;
  experience: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phoneNumber: string;
  primarySkill: string;
  skype: string;
}
