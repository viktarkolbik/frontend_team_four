import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {StorageService} from '../storage.service';
import {UserService} from '../user.service';
import {User} from '../../types/user';

@Injectable({
  providedIn: 'root'
})
export class IsAuthorizedGuard implements CanActivate {
  userInfo = {} as User;
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if(this.auth.isAuth()){ return true; }
    this.router.navigate(['/loginpage']);
    return false;
  }
}
