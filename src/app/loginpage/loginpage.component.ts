import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/auth.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'ia-login-page',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  form: FormGroup;
  hide = true;
  constructor( private authService: AuthService,
               private routeService: Router) {
    this.form = new FormGroup({
      loginEmail: new FormControl('', [Validators.required, Validators.email]),
      loginPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

  }
  ngOnInit(): void {}

  loginAuth() {
      this.authService.login({
        login: this.form.value.loginEmail,
        password: this.form.value.loginPassword
      }).subscribe(dataAuth => {
          console.log(dataAuth);
        this.form.reset();
        this.routeService.navigate(['/homepage'])
      });
  }

}
