import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidate, Interview } from '../../types/candidate';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  basePath = `${environment.backendURL}/api/forms`;
  constructor(private http: HttpClient) {}
  getFile(id: string) {
    const headers = new HttpHeaders({
      'accept': "*/*",
    });
    return this.http.get(`${this.basePath}/${id}/file`, {

      observe: 'response',
      responseType: 'blob'
    });
  }
  getCandidatesListByUserId(id: string | null): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.basePath + '?userId=' + id);
  }
  getCandidatesList(id: string): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.basePath + '?internshipId=' + id);
  }
  sendFormData(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({});
    return this.http.post(this.basePath, formData, { headers });
  }
  updateStatusCandidate(id: string, status: string): Observable<any> {
    return this.http.put(`${this.basePath}/updateStatus`, '', {
      params: { formId: id, status }
    });
  }
  setInterviewTime(formId: string, interview: Interview) {
    return this.http.post(
      this.basePath + '/' + formId + '/interviews',
      interview
    );
  }
  putInterviewTime(formId: string, interview: Interview, interviewId: string) {
    return this.http.put(
      this.basePath + '/' + formId + '/interviews/' + interviewId,
      interview
    );
  }
  putFeedback(
    formID: string,
    feedback: { feedback: string; userId: string }
  ): Observable<void> {
    return this.http.put<void>(`${this.basePath}/${formID}/feedback`, feedback);
  }
}
