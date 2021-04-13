import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Internship, Training} from '../types';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InternshipsService {
  basePath = 'http://localhost:8080/api/internships';
  trainings: Training[] = [
    {
      country: 'Belarus',
      city: 'Minsk',
      form: 'Online',
      technology: 'HTML',
      img: 'assets/icons/html.svg',
      date: '25 april 2021',
    },
    {
      country: 'Ukraine',
      city: 'Kiev',
      form: 'Online',
      technology: 'CSS',
      img: 'assets/icons/css.svg',
      date: '15 april 2021',
    },
    {
      country: 'Russia',
      city: 'Moscow',
      form: 'Online',
      technology: 'JavaScript',
      img: 'assets/icons/JS.svg',
      date: '3 april 2021',
    }
  ];
  constructor(private http: HttpClient) {
  }

  getInternshipList(): Observable<Internship[]>{
    return this.http.get<Internship[]>(this.basePath);
  }

  getInternshipById(id: string): Observable<any>{
    return this.http.get<Internship>(`${this.basePath}/${id}`);
  }

  getTrainingsLocal(): Training[]{
    return this.trainings;
  }
}
