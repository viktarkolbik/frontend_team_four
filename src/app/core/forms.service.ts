import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FormsService {
  basePath = 'http://localhost:8080/api/forms';

  constructor(private http: HttpClient) {}

  getCandidatesList(){
    return this.http.get(this.basePath);
  }

  getCandidatesListLocal(){

  }
}
