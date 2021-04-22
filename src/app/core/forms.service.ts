import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidate } from '../types/candidate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FormsService {
  basePath = 'http://192.168.99.100:8080/api/forms';

  constructor(private http: HttpClient) {}

  getCandidatesList(): Observable<Candidate[]>{
    return this.http.get<Candidate[]>(this.basePath);
  }
  sendFormData(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
    });
    return this.http.post(this.basePath, formData, {headers});
  }
}
