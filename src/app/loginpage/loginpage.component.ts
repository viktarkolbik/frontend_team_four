import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'ia-login-page',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  form: FormGroup;
  hide = true;
  authData = {};
  constructor( private authService: AuthService ) {
    this.form = new FormGroup({
      loginEmail: new FormControl('', [Validators.required, Validators.email]),
      loginPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  ngOnInit(): void {
  }
  submitLogin() {
      this.authService.sendAuthData({
        login: this.form.value.loginEmail,
        password: this.form.value.loginPassword
      }).subscribe(dataAuth => {
        // this.authData.push(dataAuth);
        this.form.value.loginEmail = '';
          this.form.value.loginPassword = '';
      });
  }
}
