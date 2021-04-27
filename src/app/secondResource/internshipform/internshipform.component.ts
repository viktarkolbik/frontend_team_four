import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ia-trainingform',
  templateUrl: './internshipform.component.html',
  styleUrls: ['./internshipform.component.scss']
})

export class InternshipformComponent implements OnInit {
  form: FormGroup;
  formSelectorTime: FormGroup;

  countries: string[] = [
    'Беларусь',
    'Украина'
  ];

  cities: string[] = [
    'Винница',
    'Киев',
    'Харьков',
    'Львов',
    'Одесса',
    'Мариуполь',
    'Минск',
    'Гродно',
    'Гомель',
    'Витебск'
  ];

  formats: string[] = [
    'ONLINE',
    'OFFLINE'
  ];
  languagies: string[] = [
    'JavaScript',
    'C++',
    'C#'
  ];

  constructor() {
    this.formSelectorTime = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    });
    this.form = new FormGroup({
      userCountry: new FormControl('', Validators.required),
      userCity: new FormControl('', Validators.required),
      trainingformName: new FormControl('', Validators.required),
      trainingDescription: new FormControl(''),
      trainingFormat: new FormControl('', Validators.required),
      trainingLanguage: new FormControl('', Validators.required),
      trainingRequirements: new FormControl(''),
      trainingStart: new FormControl('', Validators.required),
      trainingEnd: new FormControl('', Validators.required),
      trainingRegistryStart: new FormControl('', Validators.required),
      trainingRegistryEnd: new FormControl('', Validators.required),
      trainingSkills: new FormControl('')
    });
  }

  today(): string {

    const fullDay = new Date();

    const day = fullDay.getDate();

    const month = fullDay.getMonth() + 1;

    const year = fullDay.getFullYear();

    if ( month < 10 ) {
      return (`${day}.0${month}.${year}`);
    }

    if ( day < 10 ) {
      return (`0${day}.${month}.${year}`);
    }

    if ( day < 10 && month < 10 ) {
      return (`0${day}.0${month}.${year}`);
    }

    return (`${day}.${month}.${year}`);
  }
  ngOnInit(): void {
  }
}
