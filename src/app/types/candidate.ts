export interface Candidate {
  city: string;
  country: string;
  education: string;
  email: string;
  englishLevel: string;
  experience?: string;
  filePath?: string;
  firstName: string;
  formStatus?: string;
  id: string;
  interview?: Interview;
  lastName: string;
  middleName: string;
  phoneNumber: string;
  primarySkill: string;
  skype: string;
  timeForCallList: ConvenientTime[];

}

export interface Interview {
  admin: string;
  adminFeedback: string;
  adminInterviewDate?: string;
  id: string;
  techFeedback: string;
  techSpecialist: string;
  techInterviewDate?: string;
}

export interface Interviews {
  id: string;
  userId: string;
  userInterviewDate: string;
}

export interface ConvenientTime {
  endHour: number;
  startHour: number;
  formId?: string;
  id?: string;
}
