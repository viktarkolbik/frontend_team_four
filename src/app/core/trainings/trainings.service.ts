import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Training {
  id?: string;
  country: string;
  city: string;
  form: string;
  technology: string;
  img: string;
  data: any;
}

@Injectable({providedIn: 'root'})
export class TrainingsService {
  trainings: Training[] = [
    {
      country: 'Belarus',
      city: 'Minsk',
      form: 'Online',
      technology: 'HTML',
      img: 'assets/icons/html.svg',
      data: '25 april 2021',
    },
    {
      country: 'Ukraine',
      city: 'Kiev',
      form: 'Online',
      technology: 'CSS',
      img: 'assets/icons/css.svg',
      data: '15 april 2021',
    },
    {
      country: 'Russia',
      city: 'Moscow',
      form: 'Online',
      technology: 'JavaScript',
      img: 'assets/icons/JS.svg',
      data: '3 april 2021',
    }
  ];
  constructor(private http: HttpClient) { }
  getTrainingsLocal(){
    return this.trainings;
  }
  getTrainings(): Observable<any> {
    return this.http.get('http://localhost:8080/api/internships');
  }
}
