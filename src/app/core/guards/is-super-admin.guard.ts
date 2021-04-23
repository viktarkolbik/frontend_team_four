import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {RoleService} from './role.service';

@Injectable({
  providedIn: 'root'
})
export class IsSuperAdminGuard implements CanActivate {
  constructor(private role: RoleService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.role.isRole('SUPER_ADMIN');
  }
}
