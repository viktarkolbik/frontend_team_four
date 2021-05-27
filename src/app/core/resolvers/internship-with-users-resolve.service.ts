import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { InternshipsService } from '../services/internships.service';
import { Internship } from '../../types';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';
import { UserService } from '../services/user.service';
import { User } from '../../types/user';

@Injectable({ providedIn: 'root' })
export class InternshipWithUsersResolveService implements Resolve<Internship> {
  internship = {} as Internship;
  techExpert = [] as User[];
  assignedAdmins = [] as User[];
  constructor(
    private internshipService: InternshipsService,
    private loadingService: LoadingService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Internship> {
    this.loadingService.setLoadingState(true);
    return this.internshipService.getInternshipById(route.params.id).pipe(
      switchMap(internship => {
        this.internship = internship;
        return this.userService.getUsersRole(internship.id, 'ADMIN');
      }),
      switchMap(assignedAdmins => {
        this.assignedAdmins = assignedAdmins;
        return this.userService.getUsersSkills(this.internship.skills);
      }),
      switchMap(techExperts => {
        this.techExpert = techExperts;
        return this.userService.getUsersRole(route.params.id, 'TECH_EXPERT');
      }),
      switchMap(assignedTechExpert => {
        this.loadingService.setLoadingState(false);
        return of({
          internship: this.internship,
          techExperts: this.techExpert,
          assignedAdmins: this.assignedAdmins,
          assignedTechExpert
        });
      }),
      catchError(err => {
        this.loadingService.setLoadingState(false);
        return of(err);
      })
    );
  }
}
