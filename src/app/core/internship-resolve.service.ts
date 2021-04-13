import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {InternshipsService} from './internships.service';
import {Internship} from '../types';


@Injectable({ providedIn: 'root' })
export class InternshipResolver implements Resolve<Internship> {
  constructor(private internshipservice: InternshipsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<Internship> {
    return this.internshipservice.getInternshipById(route.params.id);
  }
}
