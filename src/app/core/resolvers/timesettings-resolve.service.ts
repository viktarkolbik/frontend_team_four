import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {LoadingService} from '../services/loading.service';
import {AuthService} from '../services/auth.service';


@Injectable({ providedIn: 'root' })
export class TimesettingsResolver implements Resolve<any> {
  constructor(private auth: AuthService, private loadingService: LoadingService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<any> {
    this.loadingService.setLoadingState(true);
    return this.auth.getUserInfo()
      .pipe(
        tap(() => {
          this.loadingService.setLoadingState(false);
        }),
        catchError(err => {
            this.loadingService.setLoadingState(false);
            return of (err);
          }
        ));
  }
}
