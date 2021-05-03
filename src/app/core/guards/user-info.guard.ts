import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {User} from '../../types/user';
import {AuthService} from '../services/auth.service';
import {StorageService} from '../services/storage.service';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoGuard implements CanActivate {
  userInfo = {} as User;
  constructor(
    private auth: AuthService,
    private router: Router,
    private storage: StorageService,
    private userService: UserService,
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    this.auth.getUserInfo().subscribe(data => this.userInfo = data);
    if (this.userInfo.userRole) { return of(true); }
    else {
      const id = this.storage.getUserId();
      if (id === null) {
        return of(false);
      }
      return this.userService.getUserId(id)
        .pipe(
          map(data => {
            this.auth.setUserInfo(data);
            return true;
          }),
          catchError(err => {
              if (err.error.status === 401) {
                console.log(err.error.error);
                this.router.navigate(['/loginpage']);
              } else {
                console.log(err.error);
              }
              return EMPTY;
            }
          )
        );
    }
  }
}
