import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/auth.service';
import {User} from '../../../types/user';
import {ActivatedRoute} from '@angular/router';
import {Candidate} from '../../../types/candidate';

@Component({
  selector: 'ia-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  userInfo = {} as User;
  candidates = [] as Candidate[];
  selectedCandidate!: Candidate;
  admins = [] as User[];
  selectedAdminId?: string;
  techExperts = [] as User [];
  selectedTechExpertId?: string;
  error?: number;
  constructor(auth: AuthService, private route: ActivatedRoute) {
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
  }
  ngOnInit(): void {
  }

}
