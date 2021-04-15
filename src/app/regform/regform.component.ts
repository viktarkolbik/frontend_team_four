import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormsService} from '../core/forms.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

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
  maxSizeFile = 300000;
  englishLevel: {[key: string]: string} = {
    A0: 'Beginner',
    A1: 'Elementary',
    A2: 'Pre-Intermediate',
    B1: 'Intermediate',
    B2: 'Upper-Intermediate',
    C1: 'Advanced',
  };
  countries: {[key: string]: string} = {
    by: 'Беларусь',
    ua: 'Украина'
  };
  cities: {[key: string]: string[]} = {
    ua: [
      'Винница',
      'Киев',
      'Харьков',
      'Львов',
      'Одесса',
      'Мариуполь'
    ],
    by: [
      'Минск',
      'Гродно',
      'Гомель',
      'Витебск'
    ],
  };
  convenientTimeArray: number[] = [];
  private convenientTime: {[key: string]: number} = {
    from: 9,
    to: 20,
  };
  private idInternship!: string;
  private subscription: Subscription;
  private fileFormat = ['pdf', 'doc', 'docx'];
  constructor(private formService: FormsService, private route: ActivatedRoute) {
    this.subscription = route.params.subscribe(params => this.idInternship = params.id);
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
  }
  submit(): void {
    const formValueJson = JSON.stringify(this.form.value);
    const formValueBinary = new Blob([formValueJson], {type: 'application/json'});
    const formData = new FormData();
    formData.append('form', formValueBinary);
    formData.append('idInternship', this.idInternship);
    if (this.file){ formData.append('file', this.file); }
    this.formService.sendFormData(formData).subscribe(res => console.log(res));
    this.form.reset();
    this.formSelectorTime.reset();
  }
}
