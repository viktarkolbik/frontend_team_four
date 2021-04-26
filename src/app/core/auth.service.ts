import {Injectable, OnInit} from '@angular/core';
import {StorageService} from './storage.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Login, Token} from '../types/authentication';
import {environment} from '../../environments/environment';
import {User} from '../types/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginURL = `${environment.backendURL}/api/auth/login`;
  private userInfo$ = new BehaviorSubject({} as User);
  constructor(private http: HttpClient, private storage: StorageService) {
  }
  setUserInfo(userInfo: User){
    this.userInfo$.next(userInfo);
  }
  getUserInfo(){
    return this.userInfo$.asObservable();
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
    return !!this.storage.getAuthToken() && this.storage.getUserId() !== null;
  }
  logOut() {
    this.storage.setAuthToken('');
    this.storage.setUserId('');
  }
}
