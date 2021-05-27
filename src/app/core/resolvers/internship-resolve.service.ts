import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { InternshipsService } from '../services/internships.service';
import { Internship } from '../../types';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable({ providedIn: 'root' })
export class InternshipResolver implements Resolve<Internship> {
  constructor(
    private internshipservice: InternshipsService,
    private loadingService: LoadingService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Internship> {
    this.loadingService.setLoadingState(true);
    return this.internshipservice.getInternshipById(route.params.id).pipe(
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
