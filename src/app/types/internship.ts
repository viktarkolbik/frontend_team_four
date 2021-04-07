export interface Internship {
    capacity: number;
    countryList: Location[];
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
    techSkills: string;
    technologyList: string[];
}

  export interface Location {
      city: string;
      country: string;
      id: string;
  }