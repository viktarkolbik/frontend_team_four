import {AuthService} from '../auth.service';
import {User} from '../../types/user';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {StorageService} from '../storage.service';
import {UserService} from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  userInfo = {} as User;
  constructor(
    private auth: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    private storage: StorageService,
    private userService: UserService,
    ) {
  }
  canActivate(...roles: string[]): Observable<boolean>{
    this.auth.getUserInfo().subscribe(data => this.userInfo = data);
    if(this.userInfo.userRole){
      return of(this.isRole(...roles));
    }
    else {
      const id = this.storage.getUserId();
      if (id === null) {
        return of(false);
      }
      return this.userService.getUserId(id)
        .pipe(
          map(data => {
            this.auth.setUserInfo(data);
            return this.isRole(...roles);
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
  isRole(...roles: string[]): boolean {
    this.auth.getUserInfo().subscribe(data => this.userInfo = data);
    const isRole = roles.some(role => this.userInfo.userRole === role ? true : false);
    if (isRole) {
      return true;
    }
    const message = 'You are not authorized to access this page.';
    this.openSnackbar(message, 'Ok');
    return false;
  }
  openSnackbar(message: string, action: string): void{
    const snackBarRef = this.snackBar.open(message, action);
    snackBarRef.afterDismissed().subscribe(() => {
      this.router.navigate(['/adminpage']);
    });
  }
}
