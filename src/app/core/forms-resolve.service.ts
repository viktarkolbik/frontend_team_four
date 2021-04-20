import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Candidate } from '../types/candidate';
import { FormsService } from './forms.service';

@Injectable({
    providedIn: 'root'
})

export class FormsResolver implements Resolve <Candidate[]> {
    constructor(private formsService: FormsService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Candidate[]>{
        return this.formsService.getCandidatesList();
    }
}



