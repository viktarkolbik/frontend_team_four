export interface Candidate {
    city: string;
    country: string;
    education: string;
    email: string;
    englishLevel: string;
    experience: string;
    filePath: string;
    firstName: string;
    formStatus: string;
    id: string;
    interview: Interview;
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
    id: string;
    techFeedback: string;
    techSpecialist: string;
}

export interface ConvenientTime {
    endHour: number;
    formId: string;
    id: string;
    startHour: number
}
