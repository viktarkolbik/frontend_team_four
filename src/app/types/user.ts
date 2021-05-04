export interface User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  login: string;
  password: string;
  skills: string[];
  userRole: string;
  timeForCall: Time[];
}

export interface Time {
  startHour: string;
  endHour: string;
  id?: string;
  userId?: string;
}
