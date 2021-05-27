import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';
import { InternshipsService } from '../services/internships.service';

@Injectable({ providedIn: 'root' })
export class SkillsResolveService implements Resolve<[string]> {
  constructor(
    private internshipsService: InternshipsService,
    private loadingService: LoadingService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<[string]> {
    this.loadingService.setLoadingState(true);
    return this.internshipsService.getSkills().pipe(
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
