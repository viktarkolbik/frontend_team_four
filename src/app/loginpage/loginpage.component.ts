import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'ia-login-page',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  form: FormGroup | undefined;
  constructor() {}

  ngOnInit(): void {
  }
}
