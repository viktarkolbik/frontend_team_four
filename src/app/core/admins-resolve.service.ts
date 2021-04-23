import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {LoadingService} from './loading.service';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../types/user';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AdminsResolveService implements Resolve <User[]> {
  constructor(
    private userService: UserService,
    private loadingService: LoadingService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    this.loadingService.setLoadingState(true);
    return this.userService.getUsersRole(route.params.id, 'ADMIN')
      .pipe(
        tap(() => {
          this.loadingService.setLoadingState(false);
        }),
        catchError(err => {
            this.loadingService.setLoadingState(false);
            return of (err);
          }
        )
      );
  }
}
