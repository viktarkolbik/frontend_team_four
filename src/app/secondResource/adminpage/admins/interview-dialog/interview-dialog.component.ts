import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {User} from '../../../../types/user';

@Component({
  selector: 'ia-interview-dialog',
  templateUrl: 'interview-dialog.component.html',
  styleUrls: ['interview-dialog.component.scss']
})
export class InterviewDialogComponent {
  selectedUser = {} as User;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {users: User[]; role: string}) {
    console.log(data);
  }
}
