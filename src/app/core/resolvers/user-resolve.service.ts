import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '../../types/user';
import {UserService} from '../services/user.service';
import {EMPTY, Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {StorageService} from '../services/storage.service';
import {AuthService} from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class UserResolveService implements Resolve<boolean> {
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
    state: RouterStateSnapshot): boolean {
    if(state.url === '/adminpage'){
      if(this.userInfo.userRole === 'ADMIN' || this.userInfo.userRole === 'SUPER_ADMIN'){
        this.router.navigate(['/adminpage/internships']);
      }
      else if(this.userInfo.userRole === 'TECH_EXPERT'){
        this.router.navigate(['/adminpage/techexpert']);
      }
    }
    return true;
  }
}
