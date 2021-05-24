import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';
import { LocationService } from '../services/location.service';

@Injectable({ providedIn: 'root' })
export class LocationResolver implements Resolve<Location> {
  constructor(
    private locationService: LocationService,
    private loadingService: LoadingService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Location> {
    this.loadingService.setLoadingState(true);
    return this.locationService.getCountries().pipe(
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
