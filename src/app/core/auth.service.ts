import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Login {
  login: string;
  password: string;
}
export interface Tokens {
  email: string;
  id: string;
  login: string;
  role: Array<string>;
  token: string;
  type: string;
  // password: string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginURL = 'http://192.168.99.100:8080/api/auth/signIn'

  constructor(private http: HttpClient) {
  }

  login(userAuthData: Login): Observable<Tokens> {
    return this.http.post<Tokens>(this.loginURL, userAuthData);
  }
  logout(authData: Login): void {
  }
}
