import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ParseTime, UserParseDate} from '../../../../types/user';
import {FormControl} from '@angular/forms';
import {Interviews} from '../../../../types/candidate';

@Component({
  selector: 'ia-interview-dialog',
  templateUrl: 'interview-dialog.component.html',
  styleUrls: ['interview-dialog.component.scss']
})
export class InterviewDialogComponent {
  users: UserParseDate[];
  usersForSelect: UserParseDate[];
  userDaysSet: Set<string> = new Set();
  usersTime: string[] = [];
  datePicker: FormControl = new FormControl('');
  timezone: string;
  selectedUser = {} as UserParseDate;
  selectedTime = '';
  interview = {} as Interviews;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {users: UserParseDate[]; role: string}) {
    this.users = data.users;
    this.usersForSelect = data.users;
    this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.updateUserDayList(this.usersForSelect);
    this.updateUsersTimeList(this.usersForSelect);
  }
  updateUserDayList(users: UserParseDate[]){
    this.userDaysSet.clear();
    users.forEach(user =>
      user.userTimeSlots.forEach(timeSlot => {
        const date = timeSlot.startDate.toLocaleDateString();
        this.userDaysSet.add(date);
      })
    );
  }
  updateUsersTimeList(users: UserParseDate[]){
    const usersTimeSet: Set<string> = new Set();
    usersTimeSet.clear();
    users.forEach(user => user.userTimeSlots.forEach(timeSlot => {
      if(this.datePicker.value){
        if(
          this.equalDate(timeSlot.startDate, this.datePicker.value)
        ) {
          const time = this.getDateTimeStr(timeSlot.startDate);
          usersTimeSet.add(time);
        }
      }
      else {
        const time = this.getDateTimeStr(timeSlot.startDate);
        usersTimeSet.add(time);
      }
    }));
    this.usersTime = Array.from(usersTimeSet).sort();
  }
  dateFilter = (d: Date | null): boolean => {
    if(d == null){
      return false;
    }
    const date = d.toLocaleDateString();
    return this.userDaysSet.has(date);
  };
  filterUsers(): void {
    this.users = this.data.users;
    if(this.datePicker.value){
      this.users = this.users.filter(user =>
        this.userHaveDate(this.datePicker.value, user)
      );
      this.usersForSelect = this.users;
    }
    if(this.selectedTime){
      this.users = this.users.filter(user =>
        user.userTimeSlots.some(timeSlot =>
          (
            ((this.datePicker.value) ? this.equalDate(this.datePicker.value, timeSlot.startDate) : true)
            && this.getDateTimeStr(timeSlot.startDate) === this.selectedTime
          )
        )
      );
      this.updateUserDayList(this.users);
      this.usersForSelect = this.users;
    }
    if(this.selectedUser.id){
      this.users = [this.selectedUser];
      this.updateUserDayList(this.users);
    }
    this.updateUsersTimeList(this.users);
  }
  userHaveDate(date: Date, user: UserParseDate): boolean {
    if(!date){return false;}
    return user.userTimeSlots.some(timeSlot =>
      this.equalDate(date, timeSlot.startDate)
    );
  }
  getDateTimeStr(date: Date): string {
    return date.toLocaleTimeString().slice(0, 5);
  }
  equalDate(dateOne: Date, dateTwo: Date){
    return dateOne.toDateString() === dateTwo.toDateString();
  }
  setInterview(timeSlot: ParseTime, user: UserParseDate){
    this.interview.userId = user.id;
    this.interview.userInterviewDate = timeSlot.startDate.toISOString();
  }
  submit(){
    this.selectedUser.userTimeSlots.forEach(timeSlot => {
      if(
        this.equalDate(timeSlot.startDate, this.datePicker.value)
        && this.getDateTimeStr(timeSlot.startDate) === this.selectedTime
      ) {
        this.setInterview(timeSlot, this.selectedUser);
      }
    });
  }
}
