import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidate } from '../types/candidate';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FormsService {
  basePath = `${environment.backendURL}/api/forms`;
  constructor(private http: HttpClient) {}

  getCandidatesList(id: string): Observable<Candidate[]>{
    return this.http.get<Candidate[]>(this.basePath + '?internshipId=' + id);
  }
  sendFormData(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
    });
    return this.http.post(this.basePath, formData, {headers});
  }
}
