import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {User} from "../types/user";
import {UserService} from "./user.service";
import {EMPTY, Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {StorageService} from "./storage.service";
import {AuthService} from "./auth.service";

@Injectable({providedIn: 'root'})
export class UserResolveService implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
    private storage: StorageService,
    private auth: AuthService
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<User> {
    const id = this.storage.getUserId();
    if (!this.auth.isAuth() || id === null) {
      this.router.navigate(['/loginpage']);
      return EMPTY;
    }
    return this.userService.getUserId(id)
      .pipe(
        tap(data => {
            this.auth.setUserInfo(data);
          }
        ),
        catchError(err => {
            if(err.error.status === 401) {
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
