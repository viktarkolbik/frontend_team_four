import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  basePath = 'http://localhost:8080/api/forms';
  constructor(private http: HttpClient) { }
  sendFormData(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
    });
    return this.http.post(this.basePath, formData, {headers});
  }
}