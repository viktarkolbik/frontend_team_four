import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Internship } from '../types';

@Injectable({
  providedIn: 'root'
})

export class DescriptionService {
  basePath = 'http://localhost:8080/api/internships';
  constructor(private http: HttpClient) { 

  }

  getInternshipList(){
    return this.http.get<Internship[]>(this.basePath);
  }

  getInternshipById(id: string){
    return this.http.get<Internship>(`${this.basePath}/${id}`);
  }
}
