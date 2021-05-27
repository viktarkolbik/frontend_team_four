import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root'
})
export class IsTechExpertGuard implements CanActivate {
  constructor(private role: RoleService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.role.isRole('TECH_EXPERT');
  }
}
