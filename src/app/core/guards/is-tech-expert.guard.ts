import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {User} from '../../types/user';
import {AuthService} from '../auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class IsTechExpertGuard implements CanActivate {
  userInfo = {} as User;
  constructor(auth: AuthService, private snackBar: MatSnackBar, private router: Router) {
    auth.getUserInfo().subscribe(data => this.userInfo = data);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.userInfo.userRole && this.userInfo.userRole === 'TECH_EXPERT') {
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
