import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'ia-login-page',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  form: FormGroup;
  hide = true;
  errorLogin: '' | undefined;

  constructor(
    private authService: AuthService,
    private routeService: Router,
    private storage: StorageService,
    private loadingService: LoadingService
  ) {
    this.form = new FormGroup({
      loginEmail: new FormControl('', Validators.required),
      loginPassword: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  loginAuth() {
    this.loadingService.setLoadingState(true);
    this.authService
      .login({
        login: this.form.value.loginEmail,
        password: this.form.value.loginPassword
      })
      .subscribe(
        dataAuth => {
          this.storage.setAuthToken(dataAuth.token);
          this.storage.setUserId(dataAuth.id);
          this.form.reset();
          this.loadingService.setLoadingState(false);
          this.routeService.navigate(['/adminpage']);
        },
        error => {
          this.loadingService.setLoadingState(false);
          this.errorLogin = error.error.message;
        }
      );
  }

  logOut() {
    this.storage.setAuthToken('');
    this.storage.setUserId('');
  }
}
