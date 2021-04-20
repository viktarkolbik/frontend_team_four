import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/auth.service';
import {Router} from '@angular/router';
import {StorageService} from '../core/storage.service';

@Component({
  selector: 'ia-login-page',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  form: FormGroup;
  hide = true;
  errorServer = '';
  errorLogin: '' | undefined;

  constructor(private authService: AuthService,
              private routeService: Router,
              private storage: StorageService) {
    this.form = new FormGroup({
      loginEmail: new FormControl(''), //   [Validators.required, Validators.email]
      loginPassword: new FormControl('')
    });

  }

  ngOnInit(): void {
  }

  loginAuth() {
    this.authService.login({
      login: this.form.value.loginEmail,
      password: this.form.value.loginPassword
    }).subscribe(dataAuth => {
      this.storage.setAuthToken(dataAuth.token);
      this.form.reset();
      this.routeService.navigate(['/regform/1']);
    }, error => {
      this.errorLogin = error.error.message;
      this.errorServer = error.message;
    });
  }

  logOut() {
    this.storage.setAuthToken('');
  }
}
