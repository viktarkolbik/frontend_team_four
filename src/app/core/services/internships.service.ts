import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Internship} from '../../types';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InternshipsService {
  basePath = `${environment.backendURL}/api/internships`;
  constructor(private http: HttpClient) {
  }

  getInternshipList(): Observable<Internship[]>{
    return this.http.get<Internship[]>(this.basePath);
  }

  getInternshipById(id: string, fullRepresentation: boolean = true): Observable<any>{
    return this.http.get<Internship>(`${this.basePath}/${id}?fullRepresentation=${fullRepresentation}`);
  }

  getSkills(): Observable<[string]> {
    return this.http.get<[string]>(`${this.basePath}/skills`);
  }

  sendFormData(formData: any): Observable<Internship> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Internship>(this.basePath, formData, {headers});
  }

  updateInternship(formData: any, id: string): Observable<Internship>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<Internship>(`${this.basePath}/${id}`, formData, {headers});
  }

}
