import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../types/candidate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FormsService {
  basePath = 'http://localhost:8080/api/forms';
  candidatesList: Candidate[] = [
    {
      city: 'Minsk',
      country: 'Belarus',
      education: 'Higher',
      email: 'itform@mail.ru',
      englishLevel: 'A2',
      experience: 'none',
      filePath: 'none',
      firstName: 'Maksim',
      formStatus: 'APPROVED',
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      interview: {
        admin: 'Alexey Sokolov',
        adminFeedback: 'none',
        id: '7fa85f64-5717-4562-b3fc-2c963f66afj9',
        techFeedback: 'none',
        techSpecialist: 'Dmitriy Lebedev'
      },
      lastName: 'Goreckiy',
      middleName: 'Ivanovich',
      phoneNumber: '+375297325448',
      primarySkill: 'Python',
      skype: 'maks4192',
      timeForCallList: [{
        endHour: 17,
        formId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        id: 'kl985f64-5717-4562-b3fc-2c963f66af48',
        startHour: 11 
      }]
    },
    {
      city: 'Kiev',
      country: 'Ukraine',
      education: 'Higher',
      email: 'manit@mail.ru',
      englishLevel: 'B1',
      experience: 'none',
      filePath: 'none',
      firstName: 'Oleg',
      formStatus: 'APPROVED',
      id: '3fa85f64-5717-4562-b3fc-2c963f66af24',
      interview: {
        admin: 'Vladimir Cherkas',
        adminFeedback: 'none',
        id: '7fa85f64-5717-4562-b3fc-2c963f66ahyj',
        techFeedback: 'none',
        techSpecialist: 'Dmitriy Lobanov'
      },
      lastName: 'Kislov',
      middleName: 'Anatolievich',
      phoneNumber: 'none',
      primarySkill: 'Java',
      skype: 'oleg0992',
      timeForCallList: [{
        endHour: 18,
        formId: '3fa85f64-5717-4562-a4io-2c963f66afa6',
        id: 'kl985f64-5717-4562-opu9-2c963f66af48',
        startHour: 9 
      }]
    },
    {
      city: 'Moscow',
      country: 'Russia',
      education: 'Higher',
      email: 'itgid@rambler.ru',
      englishLevel: 'B2',
      experience: 'none',
      filePath: 'none',
      firstName: 'Gleb',
      formStatus: 'APPROVED',
      id: '3fa85f64-5717-4562-b3fc-2c963f66uio6',
      interview: {
        admin: 'Oleg Menshov',
        adminFeedback: 'none',
        id: '9op85f64-5717-4562-b3fc-2c963f66afj9',
        techFeedback: 'none',
        techSpecialist: 'Alexander Grizlov'
      },
      lastName: 'Zharov',
      middleName: 'Andreevich',
      phoneNumber: 'none',
      primarySkill: 'Javascript',
      skype: 'gleb1404',
      timeForCallList: [{
        endHour: 20,
        formId: '3fa85f64-5717-4562-b3fc-2c963f660843',
        id: 'kl985f64-5717-4562-b3fc-2c963f66a07yt',
        startHour: 12
      }]
    }
  ];

  constructor(private http: HttpClient) {}

  getCandidatesList(): Observable<Candidate[]>{
    return this.http.get<Candidate[]>(this.basePath);
  }

  getCandidatesListLocal(): Candidate[] {
    return this.candidatesList;
  }
}
