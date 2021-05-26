import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {ParseTime, User, UserParseDate} from '../../../types/user';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {Candidate} from '../../../types/candidate';
import {FormsService} from '../../../core/services/forms.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {InterviewService} from '../../../core/services/interview.service';
import {InterviewDialogComponent} from './interview-dialog/interview-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {of} from 'rxjs';
import {UserService} from "../../../core/services/user.service";

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
  admins = [] as UserParseDate[];
  techExperts = [] as UserParseDate[];
  error?: number;
  constructor(
    auth: AuthService,
    private formsService: FormsService,
    private route: ActivatedRoute,
    private interviewService: InterviewService,
    private dialog: MatDialog,
    private userService: UserService
    ) {
    auth.getUserInfo().subscribe(data => this.userInfo = data);
    this.route.data.subscribe(
      (data) => {
        if (data.candidates.error || data.admins.error || data.techExperts.error) {
          this.error = data.candidates.error || data.admins.error || data.techExperts.error;
        } else {
          this.candidates = data.candidates;
          this.admins = this.usersParseDate(data.admins);
          this.techExperts = this.usersParseDate(data.techExperts);
        }
      }
    );
  }
  updateSelectedCandidate(candidate: Candidate){
    this.selectedCandidate = candidate;
    this.selectedCandidateID = candidate && candidate.id;
  }
  usersParseDate(users: User[]): UserParseDate[]{
    return users.map<UserParseDate>(user => {
      const userParseDate = {...user} as UserParseDate;
      userParseDate.userTimeSlots = user.userTimeSlots.map<ParseTime>(timeSlot => {
        const timeSlotParseTime = {...timeSlot} as ParseTime;
        timeSlotParseTime.startDate = new Date(timeSlot.startDate + 'Z');
        timeSlotParseTime.endDate = new Date(timeSlot.endDate + 'Z');
        return timeSlotParseTime;
      });
      return userParseDate;
    });
  }
  openInterviewDialog(users: User[], role: string){
    let internshipId = '';
    const dialogRef = this.dialog.open(InterviewDialogComponent, {data: {users, role}});
    dialogRef.afterClosed()
      .pipe(
        switchMap(interview => {
          if(interview){
            if(this.selectedCandidate.interview?.adminInterviewDate && role === 'ADMIN'){
              return this.formsService.putInterviewTime(
                this.selectedCandidate.id, interview, this.selectedCandidate.interview.id
              );
            }
            else if(this.selectedCandidate.interview && role === 'TECH_EXPERT'){
              return this.formsService.putInterviewTime(
                this.selectedCandidate.id, interview, this.selectedCandidate.interview.id
              );
            }
            else {
              return this.formsService.setInterviewTime(this.selectedCandidate.id, interview);
            }
          }
          else {
            return of(new Error('Cancel'));
          }
        }),
        switchMap(() => this.route.params),
        switchMap((data) => {
          internshipId = data.id;
          return this.formsService.getCandidatesList(data.id);
        }),
        switchMap((candidates) => {
          this.candidates = candidates;
          return this.userService.getUsersRole(internshipId, 'ADMIN');
        }),
        switchMap((admins) => {
          this.admins = this.usersParseDate(admins);
          return this.userService.getUsersRole(internshipId, 'TECH_EXPERT');
        })
      ).subscribe( techExpert => {
          this.techExperts = this.usersParseDate(techExpert);
        },
        error => {
          console.log(error);
        }
      );
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
