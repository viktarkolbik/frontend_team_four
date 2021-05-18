import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Interview} from '../../types/candidate';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  basePath = `${environment.backendURL}/api/interviews`;
  constructor(private http: HttpClient) { }
  setInterviewTime(formId: string, interviewTime: Interview){
    return this.http.post(this.basePath + '/save-interview-time?formId=' + formId, interviewTime);
  }
}
