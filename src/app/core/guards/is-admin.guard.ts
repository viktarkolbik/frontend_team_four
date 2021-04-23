import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {User} from '../../types/user';
import {Observable} from 'rxjs';
import {RoleService} from './role.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  userInfo = {} as User;
  constructor(private role: RoleService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.role.canActivate('ADMIN');
  }
}
