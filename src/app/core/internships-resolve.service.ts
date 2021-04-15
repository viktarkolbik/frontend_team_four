import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {InternshipsService} from './internships.service';
import {Internship} from '../types';
import {catchError} from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class InternshipsResolver implements Resolve<Internship[]> {
  constructor(private internshipservice: InternshipsService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<Internship[]> {
    return this.internshipservice.getInternshipList()
      .pipe(catchError(err => {
          // console.log(err)
          switch (err.status){
            case '401':
              console.log('Unauthorized');
              break;
            case '403':
              console.log('Forbidden');
              break;
            case '404':
              console.log('Page Not Found');
              this.router.navigate(['']);
              break;
          }
          return EMPTY;
        }
      ));
  }
}
