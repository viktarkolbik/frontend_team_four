import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Event} from '@angular/router';
import {EventData} from '@angular/cdk/testing';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormService} from '../core/form.service';

@Component({
  selector: 'ia-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.scss']
})
export class RegformComponent implements OnInit {
  form: FormGroup;
  formSelectorTime: FormGroup;
  file: any;

  constructor(private formService: FormService) {
    this.formSelectorTime = new FormGroup({
      from: new FormControl(''),
      to: new FormControl(''),
    });
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      middleName: new FormControl(''),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      skype: new FormControl('', Validators.required),
      englishLevel : new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      convenientTime: this.formSelectorTime,
      experience: new FormControl(''),
      education: new FormControl(''),
    });
  }

  englishLevel: {[key: string]: string} = {
    A0: 'Beginner',
    A1: 'Elementary',
    A2: 'Pre-Intermediate',
    B1: 'Intermediate',
    B2: 'Upper-Intermediate',
    C1: 'Advanced',
  };
  countries: {[key: string]: string} = {
    BL: 'Беларусь',
    UA: 'Украина'
  };
  cities: {[key: string]: string[]} = {
    UA: [
      'Винница',
      'Киев',
      'Харьков',
      'Львов',
      'Одесса',
      'Мариуполь'
    ],
    BL: [
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
  exampleForm: {[key: string]: string} = {
    city: 'string',
    country: 'string',
    education: 'string',
    email: 'string',
    englishLevel: 'A0',
    experience: 'string',
    filePath: 'string',
    firstName: 'string',
    lastName: 'string',
    middleName: 'string',
    phoneNumber: 'string',
    primarySkill: 'string',
    skype: 'string'
  };
  getKeys(obj: any): string[]{
    return Object.keys(obj);
  }
  ngOnInit(): void {
    for (let i = this.convenientTime.from; i <= this.convenientTime.to; i++){
      this.convenientTimeArray.push(i);
    }
  }
  addFile(event: any): void {
    const target = event.target || event.srcElement;
    this.file = target.files[0];
  }
  submit(): void {
    const exampleFormJson = JSON.stringify(this.exampleForm);
    const blob = new Blob([exampleFormJson], {type: 'application/json'});
    const formData = new FormData();
    if (this.file){ formData.append('file', this.file); }
    formData.append('form', blob);
    this.formService.postForm(formData).subscribe(res => console.log(res));
  }
}
