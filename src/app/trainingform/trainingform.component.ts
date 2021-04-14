import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ia-trainingform',
  templateUrl: './trainingform.component.html',
  styleUrls: ['./trainingform.component.scss']
})

export class TrainingformComponent implements OnInit {
  form: FormGroup;
  formSelectorTime: FormGroup;

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
      trainingSkills: new FormControl(''),
      publicationDate: new FormControl('current date'),
    });
  }

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
  ngOnInit(): void {
  }
}
