import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Candidate, Interview} from '../../types/candidate';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FormsService {
  basePath = `${environment.backendURL}/api/forms`;
  constructor(private http: HttpClient) {}

  getCandidatesListByUserId(id: string | null): Observable<Candidate[]>{
    return this.http.get<Candidate[]>(this.basePath + '?userId=' + id);
  }
  getCandidatesList(id: string): Observable<Candidate[]>{
    return this.http.get<Candidate[]>(this.basePath + '?internshipId=' + id);
  }
  sendFormData(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
    });
    return this.http.post(this.basePath, formData, {headers});
  }
  updateStatusCandidate(id: string, status: string): Observable<any> {
    return this.http.put(
      `${this.basePath}/updateStatus`,
      "",
      {params: {formId:id, status}}
    );
  }
  setInterviewTime(formId: string, interview: Interview){
    return this.http.post(this.basePath + '/' + formId + '/interviews', interview);
  }
  putInterviewTime(formId: string, interview: Interview, interviewId: string){
    return this.http.put(this.basePath + '/' + formId + '/interviews/' + interviewId, interview);
  }
}
