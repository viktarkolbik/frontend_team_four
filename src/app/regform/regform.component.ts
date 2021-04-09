import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../core/form.service';

@Component({
  selector: 'ia-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.scss']
})
export class RegformComponent implements OnInit {
  form: FormGroup;
  formSelectorTime: FormGroup;
  file: any;
  fileSize!: boolean;
  isNotSupportFormat!: boolean;
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
      primarySkill: new FormControl(''),
      experience: new FormControl(''),
      education: new FormControl(''),
      isConfirm: new FormControl(''),
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
    BY: 'Беларусь',
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
    BY: [
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
  maxSizeFile = 300000;
  fileFormat = ['pdf', 'doc', 'docx'];
  ngOnInit(): void {
    for (let i = this.convenientTime.from; i <= this.convenientTime.to; i++){
      this.convenientTimeArray.push(i);
    }
  }
  getKeys(obj: any): string[]{
    return Object.keys(obj);
  }
  addFile(event: any): void {
    const target = event.target || event.srcElement;
    this.file = target.files[0];
    const fileFormat = this.file?.name.split('.')[1];
    this.fileSize = this.file?.size > this.maxSizeFile;
    this.isNotSupportFormat = !this.fileFormat.includes(fileFormat);
    console.log(this.file);
  }
  submit(): void {
    const formValueJson = JSON.stringify(this.form.value);
    const formValueBinary = new Blob([formValueJson], {type: 'application/json'});
    const formData = new FormData();
    formData.append('form', formValueBinary);
    if (this.file){ formData.append('file', this.file); }
    this.formService.sendFormData(formData).subscribe(res => console.log(res));
    this.form.reset();
    this.formSelectorTime.reset();
  }
}
