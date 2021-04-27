export interface Internship {
  capacity: number;
  countryList: Location[] | undefined;
  description: string;
  endDate: string;
  id: string;
  internshipFormat: string;
  name: string;
  publicationDate: string;
  registrationEndDate: string;
  registrationStartDate: string;
  requirements: string;
  startDate: string;
  skills: string[] | undefined;
  techSkills: string;
}

export interface Location {
  city: string;
  country: string;
  id: string;
}

export interface Training {
  id?: string;
  country: string;
  city: string;
  form: string;
  technology: string;
  img: string;
  date?: string;
}

export interface Filter {
  field: string;
  isChecked: boolean;
  criteria: {[key: string]: Criterion};
}
export interface Criterion {
  value: string;
  isChecked: boolean;
}
