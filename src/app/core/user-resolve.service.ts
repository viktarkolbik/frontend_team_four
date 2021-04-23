import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '../types/user';
import {UserService} from './user.service';
import {EMPTY, Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {StorageService} from './storage.service';
import {AuthService} from './auth.service';

@Injectable({providedIn: 'root'})
export class UserResolveService implements Resolve<User> {
  userInfo = {} as User;
  constructor(
    private userService: UserService,
    private router: Router,
    private storage: StorageService,
    private auth: AuthService
  ) {
    auth.getUserInfo().subscribe(data => this.userInfo = data);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<User> {
    const id = this.storage.getUserId();
    if (id === null) { return EMPTY;}
    if(this.userInfo.id === id){return of(this.userInfo);}
    return this.userService.getUserId(id)
      .pipe(
        tap(data => {
          this.auth.setUserInfo(data);
        }),
        catchError(err => {
            if (err.error.status === 401) {
              console.log(err.error.error);
              this.router.navigate(['/loginpage']);
              return EMPTY;
            }
            console.log(err.error);
            return EMPTY;
          }
        ));
  }
}
