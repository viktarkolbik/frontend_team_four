import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {User} from '../../../types/user';
import {ActivatedRoute} from '@angular/router';
import {Candidate} from '../../../types/candidate';
import {FormsService} from '../../../core/services/forms.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'ia-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  userInfo = {} as User;
  candidates = [] as Candidate[];
  selectedCandidate!: Candidate;
  selectedCandidateID: string | null = null;
  admins = [] as User[];
  selectedAdminId = '';
  techExperts = [] as User [];
  selectedTechExpertId?: string;
  error?: number;
  constructor(auth: AuthService, private formsService:FormsService, private route: ActivatedRoute) {
    auth.getUserInfo().subscribe(data => this.userInfo = data);
    this.route.data.subscribe(
      (data) => {
        if (data.candidates.error || data.admins.error || data.techExperts.error) {
          this.error = data.candidates.error || data.admins.error || data.techExperts.error;
        } else {
          this.candidates = data.candidates;
          this.admins = data.admins;
          this.techExperts = data.techExperts;
        }
      }
    );
  }
  updateSelectedCandidate(candidate: Candidate){
    this.selectedCandidate = candidate;
    this.selectedCandidateID = candidate && candidate.id;
  }
  ngOnInit(): void {
  }

  updateStatus(id: string, status: string): void {
    this.formsService.updateStatusCandidate(id, status)
      .pipe(switchMap(() => this.route.params))
      .pipe(switchMap((data) => this.formsService.getCandidatesList(data.id)))
      .subscribe(data => this.candidates = data);
    }

}
