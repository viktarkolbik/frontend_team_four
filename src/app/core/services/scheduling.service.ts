import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {
  basePath = `${environment.backendURL}/api/scheduling`;
  constructor(private http: HttpClient) { }
  setInterviewTime(formId: string, interviewTime: any){
    return this.http.post(this.basePath + '/save-interview-time?formId=' + formId, interviewTime);
  }
}
