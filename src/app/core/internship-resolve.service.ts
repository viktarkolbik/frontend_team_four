import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {InternshipsService} from './internships.service';
import {Internship} from '../types';
import {catchError} from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class InternshipResolver implements Resolve<Internship> {
  constructor(private internshipservice: InternshipsService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<Internship> {
    return this.internshipservice.getInternshipById(route.params.id)
      .pipe(catchError(err => {
          if (err.status === 404) {
            console.log(`Internship with ${route.params.id} not found`);
            this.router.navigate(['']); // Need change to 404 page or NotFoundComponent
          }
          return EMPTY;
        }
      ));
  }
}
