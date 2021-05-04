import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {User} from '../../../types/user';
import {ActivatedRoute} from '@angular/router';
import {Candidate} from '../../../types/candidate';
import {SchedulingService} from "../../../core/services/scheduling.service";
import {AcceptDialogComponent} from "../../../firstResource/regform/accept-dialog/accept-dialog.component";
import {InterviewDialogComponent} from "./interview-dialog/interview-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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
  selectedAdminId = '';
  techExperts = [] as User [];
  selectedTechExpertId?: string;
  error?: number;
  constructor(
    auth: AuthService,
    private route: ActivatedRoute,
    private schedulingService: SchedulingService,
    private dialog: MatDialog
    ) {
    auth.getUserInfo().subscribe(data => this.userInfo = data);
    this.route.data.subscribe(
      (data) => {
        console.log(data);
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
  openInterviewDialog(users: User[], role: string){
    const dialogRef = this.dialog.open(InterviewDialogComponent, {data: {users, role}});
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  ngOnInit(): void {
  }

}
