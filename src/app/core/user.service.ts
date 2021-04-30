import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../types/user";
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath = `${environment.backendURL}/api/users`;
  constructor(private http: HttpClient) { }
  getUserId(id: string): Observable<User>{
    return this.http.get<User>(this.basePath + '/' + id);
  }
  getUsersRole(idIntenship: string, role: string): Observable<User[]>{
    return this.http.get<User[]>(this.basePath + '?internshipId=' + idIntenship + '&role=' + role);
  }
}
