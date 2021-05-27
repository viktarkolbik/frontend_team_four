import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {StorageService} from '../../core/services/storage.service';

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
      loginEmail: new FormControl('', [Validators.required, Validators.email]),
      loginPassword: new FormControl('', Validators.required)
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
      this.storage.setUserId(dataAuth.id);
      this.form.reset();
      this.routeService.navigate(['/adminpage']);
    }, error => {
      this.errorLogin = error.error.message;
      this.errorServer = error.message;
    });
  }

  logOut() {
    this.storage.setAuthToken('');
    this.storage.setUserId('');
  }
}
