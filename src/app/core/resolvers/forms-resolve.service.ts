import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of, Subscription} from 'rxjs';
import {Injectable} from '@angular/core';
import {Candidate} from '../../types/candidate';
import {FormsService} from '../services/forms.service';
import {LoadingService} from '../services/loading.service';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FormsResolveService implements Resolve <Candidate[]> {
  constructor(
    private formsService: FormsService,
    private loadingService: LoadingService,
    ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Candidate[]> {
    this.loadingService.setLoadingState(true);
    return this.formsService.getCandidatesList(route.params.id)
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



