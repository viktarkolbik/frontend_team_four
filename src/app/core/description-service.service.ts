import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Internship, Training} from '../types';

@Injectable({
  providedIn: 'root'
})

export class DescriptionService {
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

  getInternshipList(){
    return this.http.get<Internship[]>(this.basePath);
  }

  getInternshipById(id: string){
    return this.http.get<Internship>(`${this.basePath}/${id}`);
  }

  getTrainingsLocal(){
    return this.trainings;
  }
}
