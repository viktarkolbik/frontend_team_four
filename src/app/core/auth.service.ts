import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

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

export class StorageService {
  private storage: Storage = window.localStorage;
  constructor() { }
  getAuthToken(): string | null {
    return this.storage.getItem('AuthToken');
  }

  setAuthToken(value: string): void {
    this.storage.setItem('AuthToken', value);
  }
}

export class AuthService {
  private loginURL = 'http://192.168.99.100:8080/api/auth/signIn'
  get token(): string {
    return ''
  }
  // 192.168.99.100
  constructor(private http: HttpClient) { }

  login(userAuthData: Login): Observable<Login> {
    return this.http.post<Login>(this.loginURL, userAuthData)
      .pipe(
        tap(this.setToken)
      );
  }
  logout(authData: Login): void {
  }
  submitLogin(): boolean {
    return !!this.token
  }
  private setToken(response: any) {
    console.log(response);
  }
}


