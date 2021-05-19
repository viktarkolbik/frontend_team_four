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
  imgUrles: string[] = [];
  skills: string[] = [];
  constructor(private http: HttpClient) {
  }
  images: { [key: string]: string } = {
    JS: "../../../../assets/icons/js.png",
    JAVA: "../../../../assets/icons/java.png",
    GO: "../../../../assets/icons/go.png",
    QA: "../../../../assets/icons/qa.jpg",
    DEV_OPS: "../../../../assets/icons/devops.png",
    C_PLUS_PLUS: "../../../../assets/icons/c.png",
    C_SHARP: "../../../../assets/icons/csh.png"
  }
  changedSkills: { [key: string]: string } = {
    DEV_OPS: " DevOps",
    C_PLUS_PLUS: " C++",
    C_SHARP: " C#",
    JS: " JavaScript",
    JAVA: " Java",
    GO: " Golang",
    QA: " QA"
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
  getImagesUrl(technology:any) {
    return this.images[technology]
  }
  getChangedSkills(technology:any) {
    return this.changedSkills[technology]
  }
  deleteInternshipById(id: string): Observable<void>{
    return this.http.delete<void>(`${this.basePath}/${id}`);
  }
}
