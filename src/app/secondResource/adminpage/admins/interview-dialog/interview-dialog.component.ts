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
  datePicker: FormControl = new FormControl('');
  selectedUser = {} as UserParseDate;
  interview = {} as Interviews;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {users: UserParseDate[]; role: string}) {
    this.users = data.users;
    this.usersForSelect = data.users;
    this.updateUserDayList(this.usersForSelect);
  }
  updateUserDayList(users: UserParseDate[]){
    this.userDaysSet.clear();
    users.forEach(user =>
      user.userTimeSlots.forEach(timeSlot => {
        const year = timeSlot.startDate.getFullYear();
        const month = timeSlot.startDate.getMonth();
        const day = timeSlot.startDate.getDate();
        const date = `${year}-${month}-${day}`;
        this.userDaysSet.add(date);
      })
    );
  }
  dateFilter = (d: Date | null): boolean => {
    if(d == null){
      return false;
    }
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const date = `${year}-${month}-${day}`;
    return this.userDaysSet.has(date);
  };
  filterUsers(): void {
    if(this.selectedUser.id){
      this.users = [this.selectedUser];
      this.updateUserDayList(this.users);
    }
    if(this.datePicker.value){
      this.users = this.data.users.filter(user =>
        this.usersHaveDate(this.datePicker.value, user)
      );
      this.usersForSelect = this.users;
    }
  }
  usersHaveDate(date: Date, user: UserParseDate): boolean {
    if(!date){return false;}
    return user.userTimeSlots.some(timeSlot =>
      this.userHaveTimeSlot(date, timeSlot)
    );
  }
  userHaveTimeSlot(date: Date, timeSlot: ParseTime): boolean {
    if(!date){return false;}
    return (
      timeSlot.startDate.getFullYear() === date.getFullYear()
      && timeSlot.startDate.getMonth() === date.getMonth()
      && timeSlot.startDate.getDate() === date.getDate()
    );
  }
  onTimeSelect(event: any){
    this.setInterview(event.value, this.selectedUser);
  }
  setInterview(timeSlot: ParseTime, user: UserParseDate){
    this.interview.id = timeSlot.id;
    this.interview.userId = user.id;
    this.interview.userInterviewDate = timeSlot.startDate.toJSON();
  }
}
