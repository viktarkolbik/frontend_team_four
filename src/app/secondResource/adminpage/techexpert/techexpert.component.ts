import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/types/candidate';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../types/user';

@Component({
  selector: 'ia-techexpert',
  templateUrl: './techexpert.component.html',
  styleUrls: ['./techexpert.component.scss']
})
export class TechexpertComponent implements OnInit {
  error?: number;
  interns = [] as Candidate[];
  user!: User;
  constructor(private route: ActivatedRoute, private auth: AuthService) {
    this.route.data.subscribe(data => {
      if (data.interns.error) {
        this.error = data.interns.status;
      } else {
        this.interns = data.interns;
      }
    });
    auth.getUserInfo().subscribe(data => (this.user = data));
  }

  ngOnInit(): void {}
}
