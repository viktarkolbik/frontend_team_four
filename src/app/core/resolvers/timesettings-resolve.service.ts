import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, switchMap, take, tap} from 'rxjs/operators';
import {LoadingService} from '../services/loading.service';
import {AuthService} from '../services/auth.service';
import {User} from '../../types/user';
import {InterviewService} from '../services/interview.service';
import {Interview} from '../../types/candidate';


@Injectable({ providedIn: 'root' })
export class TimesettingsResolver implements Resolve<Interview[]> {
  userInfo = {} as User;
  constructor(
    private interview: InterviewService,
    private loadingService: LoadingService,
    private auth: AuthService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<Interview[]> {
    this.loadingService.setLoadingState(true);
    return this.auth.getUserInfo()
      .pipe(
        take(1),
        switchMap((data) => this.interview.getInterview(data.id, data.userRole)),
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
