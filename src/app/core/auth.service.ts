import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, map} from 'rxjs/operators';

export interface Tokens {
  token: number;
  type: string;
  login: string;
  email: string;
  role: Array<string>
}
export interface Login {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginURL = 'http://localhost:8080//api/auth/signIn'

  constructor(private http: HttpClient) { }

  // getAuthData(): Observable<Tokens> {
  //   return this.http.get<Tokens>(this.loginURL);
  // }

  sendAuthData(authData: Login): Observable<Login> {
    const headers = new HttpHeaders({
      customHeader: Math.random().toString()});
    return this.http.post<Login>( 'http://localhost:8080//api/auth/signIn', authData, {
      headers
    });
  }

}


