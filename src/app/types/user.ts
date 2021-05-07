export interface User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  login: string;
  password: string;
  skills: string[];
  userRole: string;
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
