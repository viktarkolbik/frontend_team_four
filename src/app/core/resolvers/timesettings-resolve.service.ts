import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {LoadingService} from '../services/loading.service';
import {AuthService} from '../services/auth.service';
import {User} from '../../types/user';
import {InterviewService} from '../services/interview.service';


@Injectable({ providedIn: 'root' })
export class TimesettingsResolver implements Resolve<User> {
  userInfo = {} as User;
  constructor(
    private interview: InterviewService,
    private loadingService: LoadingService,
    private auth: AuthService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<any> {
    this.loadingService.setLoadingState(true);
    /*
    return this.auth.getUserInfo()
      .pipe(switchMap((data) => this.interview.getInterview(data.id, data.userRole)))
      .pipe(
        tap(() => {
          this.loadingService.setLoadingState(false);
        }),
        catchError(err => {
            this.loadingService.setLoadingState(false);
            return of (err);
          }
        ));
    */
    this.auth.getUserInfo().subscribe(data => this.userInfo = data)
    //this.interview.getInterview(this.userInfo.id, this.userInfo.userRole).subscribe(data => console.log(data))
    return this.interview.getInterview(this.userInfo.id, this.userInfo.userRole)
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
