import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Interview } from 'src/app/types/candidate';

@Injectable({
  providedIn: 'root'
})

export class InterviewService {
  basePath = `${environment.backendURL}/api/interviews`;
  constructor(private http: HttpClient) {
  }

  getInterviewList(userId: string, userRole: string): Observable<Interview[]>{
    return this.http.get<Interview[]>(`${this.basePath}?userId=${userId}&userRole=${userRole}`);
  }
}