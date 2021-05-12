import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of, pipe, Subscription} from 'rxjs';
import {Injectable} from '@angular/core';
import {Candidate} from '../../types/candidate';
import {FormsService} from '../services/forms.service';
import {LoadingService} from '../services/loading.service';
import {catchError, tap} from 'rxjs/operators';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})

export class FormsAdminResolveService implements Resolve <Candidate[]> {
  constructor(
    private formsService: FormsService,
    private loadingService: LoadingService,
    ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Candidate[]> {
    this.loadingService.setLoadingState(true);
    return this.formsService.getCandidatesListByUserId('b64b3afc-b1be-4c7a-9406-d7d14f436332')
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

