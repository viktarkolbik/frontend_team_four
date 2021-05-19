export interface User {
  userTimeSlots: [];
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  login: string;
  password: string;
  skills: string[];
  userRole: string;
  interviewTime: number;
  userTimeSlots: Time[];
}

export interface Time {
  startDate: string | Date;
  endDate: string | Date;
  roundUp?: boolean;
  id?: string;
  userId?: string;
}

export interface UserParseDate {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  login: string;
  password: string;
  skills: string[];
  userRole: string;
  userTimeSlots: ParseTime[];
}

export interface ParseTime {
  startDate: Date;
  endDate: Date;
  roundUp?: boolean;
  id: string;
  userId?: string;
}


