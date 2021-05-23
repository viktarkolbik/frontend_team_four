import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {FormsService} from '../../../../core/services/forms.service';

@Component({
  selector: 'ia-feedback-dialog',
  templateUrl: 'feedback.component.html',
  styleUrls: ['feedback.component.scss']
})
export class FeedbackComponent {
  feedback: FormControl = new FormControl('');
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {userID:string, formID:string},
    private formsService: FormsService
  ) {
  }
  submit(){
    let answer = {
      "feedback": this.feedback.value,
      "userId": this.data.userID
    }
    this.formsService.putFeedback(this.data.formID, answer)
  }
}
