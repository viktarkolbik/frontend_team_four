import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Login, Token} from '../types/authentication';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginURL = 'http://192.168.99.100:8080/api/auth/signIn'

  constructor(private http: HttpClient, private storage: StorageService) {
  }

  login(userAuthData: Login): Observable<Token> {
    return this.http.post<Token>(this.loginURL, userAuthData);
  }
  isAuth(): boolean {
    return !!this.storage.getAuthToken()
  }
}
