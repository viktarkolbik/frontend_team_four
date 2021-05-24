import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/types/candidate';
import {User} from '../../../types/user';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'ia-internlist',
  templateUrl: './internlist.component.html',
  styleUrls: ['./internlist.component.scss']
})

export class InternlistComponent implements  OnInit {
  error?: number;
  interns =  [] as Candidate[];
  user!: User

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService
  ) {
    this.route.data.subscribe(
      (data) => {
        if (data.interns.error) {
          this.error = data.interns.status;
        } else {
          this.interns = data.interns;
        }
      }
    );
    auth.getUserInfo().subscribe(data => this.user = data)
  }

  ngOnInit() {
  }

}


