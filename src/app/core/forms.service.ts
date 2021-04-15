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
      country: 'Belatus',
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
