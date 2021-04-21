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
  error: number | undefined;
  errorMessage: string | undefined;
  constructor(auth: AuthService, private route: ActivatedRoute) {
    auth.getUserInfo().subscribe(data => this.userInfo = data);
    this.route.data.subscribe(
      (data) => {
        console.log(data);
        if (data.candidates.error) {
          this.error = data.candidates.status;
          this.errorMessage = 'Что то пошло не так попробуйте обновить страницу';
        } else {
          this.candidates = data.candidates;
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
