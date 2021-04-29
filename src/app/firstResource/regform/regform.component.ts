import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormsService} from '../../core/services/forms.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AcceptDialogComponent} from './accept-dialog/accept-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {LocationService} from '../../core/services/location.service';

@Component({
  selector: 'ia-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.scss']
})
export class RegformComponent implements OnInit {
  form: FormGroup;
  timeForCallList: FormGroup[];
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
  convenientTimeArray2: number[] = [];
  countriesBackEnd:any;
  citiesBackEnd:any;
  private convenientTime: {[key: string]: number}[] = [
    {
    from: 9,
    to: 13,
    },
    {
      from: 13,
      to: 18,
    }
  ];
  private idInternship!: string;
  private subscription: Subscription;
  private fileFormat = ['pdf', 'doc', 'docx'];
  constructor(
    private formService: FormsService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private locationService: LocationService,
    public dialog: MatDialog
  ) {
    this.subscription = route.params.subscribe(params => this.idInternship = params.id);
    this.timeForCallList = [
      new FormGroup(
        {
          startHour: new FormControl(''),
          endHour: new FormControl('')
        }
      ),
      new FormGroup(
        {
          startHour: new FormControl(''),
          endHour: new FormControl('')
        }
      )
    ];
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      middleName: new FormControl(''),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      phoneNumber: new FormControl(),
      skype: new FormControl('', Validators.required),
      englishLevel : new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      primarySkill: new FormControl(''),
      experience: new FormControl(''),
      education: new FormControl(''),
      isConfirm: new FormControl(''),
    });
    this.form.get("country")?.valueChanges.subscribe(data => {
      console.log(data);
      this.locationService.getCities(data.id).subscribe(data => {
        this.citiesBackEnd = data;
        console.log(this.citiesBackEnd);
      });
    })
  }

  ngOnInit(): void {
    for (let i = this.convenientTime[0].from; i <= this.convenientTime[0].to; i++){
      this.convenientTimeArray.push(i);
    }
    for (let i = this.convenientTime[1].from; i <= this.convenientTime[1].to; i++){
      this.convenientTimeArray2.push(i);
    }
    this.locationService.getCountries().subscribe(data => {
      this.countriesBackEnd = data;
      //console.log(this.countriesBackEnd);
    });
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
  openDialog(): void {
    const dialogRef = this.dialog.open(AcceptDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){ this.submit(); }
    });
  }
  submit(): void {
    const formValue = this.form.value;
    console.log(formValue);
    formValue.timeForCallList = this.timeForCallList.map(group => group.value);
    const formValueJson = JSON.stringify(formValue);
    const formValueBinary = new Blob([formValueJson], {type: 'application/json'});
    const formData = new FormData();
    formData.append('form', formValueBinary);
    formData.append('idInternship', this.idInternship);
    if (this.file){ formData.append('file', this.file); }
    let message: string;
    this.formService.sendFormData(formData).subscribe(
      data => {
        message = 'Your application sent successfully';
        this.openSnackbar(message, 'Ok');
      },
      error => {
        message = 'Error happened please try again later';
        this.openSnackbar(message, 'Ok');
        console.log(error);
      }
    );
  }
  resetForm(): void{
    this.form.reset();
    this.timeForCallList[0].reset();
    this.timeForCallList[1].reset();
  }
  openSnackbar(message: string, action: string): void{
    const snackBarRef = this.snackBar.open(message, action);
    snackBarRef.afterDismissed().subscribe(() => {
      this.resetForm();
      this.router.navigate(['']);
    });
  }
}
