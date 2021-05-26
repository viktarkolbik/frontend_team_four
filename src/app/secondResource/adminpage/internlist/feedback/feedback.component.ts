import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {FormsService} from '../../../../core/services/forms.service';

@Component({
  selector: 'ia-feedback-dialog',
  templateUrl: 'feedback.component.html',
  styleUrls: ['feedback.component.scss']
})
export class FeedbackComponent {
  feedback: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(50)
  ]);
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {userID:string, formID:string},
    private formsService: FormsService,
    private dialogRef: MatDialogRef<FeedbackComponent>
  ) {
  }
  submit(){
    let answer = {
      "feedback": this.feedback.value,
      "userId": this.data.userID
    }
    this.formsService.putFeedback(this.data.formID, answer).subscribe(
      data => {
        console.log(data);
        this.dialogRef.close();
        },
      error => {
        console.log(error);
      }
    );
  }
}
