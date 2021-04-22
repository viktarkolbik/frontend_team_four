import {Injectable, OnInit} from '@angular/core';
import {StorageService} from './storage.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Login, Token} from '../types/authentication';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginURL = `${environment.backendURL}/api/auth/login`;
  constructor(private http: HttpClient, private storage: StorageService) {
  }

  login(userAuthData: Login): Observable<Token> {
    return this.http.post<Token>(this.loginURL, userAuthData)
      .pipe(
        catchError(err => {
          // console.log(err.error.message); // View error message
          return throwError(err);
        })
      );
  }
  isAuth(): boolean {
    return !!this.storage.getAuthToken();
  }
}
