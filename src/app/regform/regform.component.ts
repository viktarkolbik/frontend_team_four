import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DialogElementsExampleDialog} from './dialog-elements-example-dialog/dialog-elements-example-dialog.component';

@Component({
  selector: 'ia-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.scss']
})
export class RegformComponent implements OnInit {
  form: FormGroup;
  formSelectorTime: FormGroup;

  constructor(public dialog: MatDialog) {
    this.formSelectorTime = new FormGroup({
      from: new FormControl(''),
      to: new FormControl(''),
    });
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required),
      userLastName: new FormControl('', Validators.required),
      userPatronymic: new FormControl(''),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      userPhoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      userSkype: new FormControl('', Validators.required),
      userEnglishLevel : new FormControl('', Validators.required),
      userCountry: new FormControl('', Validators.required),
      userCity: new FormControl('', Validators.required),
      userConvenientTime: this.formSelectorTime,
      userExperience: new FormControl(''),
      userEducation: new FormControl(''),
      isConfirm: new FormControl('', Validators.required),
    });
  }

  englishLevel: {[key: string]: string} = {
    'A0': 'Beginner',
    'A1': 'Elementary',
    'A2': 'Pre-Intermediate',
    'B1': 'Intermediate',
    'B2': 'Upper-Intermediate',
    'C1': 'Advanced',
  };
  countries: string[] = [
    'Беларусь',
    'Украина'
  ];
  cities: {[key: string]: string[]} = {
    'Украина': [
      'Винница',
      'Киев',
      'Харьков',
      'Львов',
      'Одесса',
      'Мариуполь'
    ],
    'Беларусь': [
      'Минск',
      'Гродно',
      'Гомель',
      'Витебск'
    ],
  };
  convenientTime: {[key: string]: number} = {
    from: 9,
    to: 20,
  };
  convenientTimeArray: number[] = [];
  getKeys(obj: any){
    return Object.keys(obj);
  }

  ngOnInit(): void {
    for(let i = this.convenientTime.from; i <= this.convenientTime.to; i++){
      this.convenientTimeArray.push(i);
    }
  }
  submit() {
    console.log(this.form.value);
  }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

