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

  getInternshipById(id: string): Observable<any>{
    return this.http.get<Internship>(`${this.basePath}/${id}`);
  }

  sendFormData(formData: any): Observable<any> {
    console.log(formData);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.basePath, formData, {headers});
  }

}
