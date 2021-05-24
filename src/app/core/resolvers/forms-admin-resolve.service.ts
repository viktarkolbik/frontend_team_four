import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Candidate } from '../../types/candidate';
import { FormsService } from '../services/forms.service';
import { LoadingService } from '../services/loading.service';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class FormsAdminResolveService implements Resolve<Candidate[]> {
  userInfo = {} as User;
  constructor(
    private formsService: FormsService,
    private loadingService: LoadingService,
    private auth: AuthService
  ) {
    this.auth.getUserInfo().subscribe(data => (this.userInfo = data));
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Candidate[]> {
    this.loadingService.setLoadingState(true);
    return this.formsService.getCandidatesListByUserId(this.userInfo.id).pipe(
      tap(() => {
        this.loadingService.setLoadingState(false);
      }),
      catchError(err => {
        this.loadingService.setLoadingState(false);
        return of(err);
      })
    );
  }
}
