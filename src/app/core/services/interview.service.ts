import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Interview } from '../../types/candidate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  basePath = `${environment.backendURL}/api/interviews`;
  constructor(private http: HttpClient) {}
  setInterviewTime(formId: string, interviewTime: Interview) {
    return this.http.post(
      this.basePath + '/save-interview-time?formId=' + formId,
      interviewTime
    );
  }
  getInterview(formId: string, userRole: string): Observable<Interview[]> {
    return this.http.get<Interview[]>(this.basePath, {
      params: { userId: formId, userRole }
    });
  }
}
