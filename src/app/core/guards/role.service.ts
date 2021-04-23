import {AuthService} from '../auth.service';
import {User} from '../../types/user';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  userInfo = {} as User;
  constructor(
    private auth: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    ) {
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
