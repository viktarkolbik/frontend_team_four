import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { InternshipsService } from 'src/app/core/services/internships.service';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FullLocation, Location} from '../../types/location';
import {LocationService} from "../../core/services/location.service";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'ia-trainingform',
  templateUrl: './internshipform.component.html',
  styleUrls: ['./internshipform.component.scss']
})

export class InternshipformComponent implements OnInit {
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;
  @ViewChild('skillInput') skillInput!: ElementRef<HTMLInputElement>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  form: FormGroup;
  formLocation: FormGroup;
  skill = new FormControl('');
  countries = [] as Location[];
  cities = [] as Location[];
  locations = [] as FullLocation[];

  formats: string[] = [
    'ONLINE',
    'OFFLINE'
  ];
  skills: string[] = [
    'JAVA_SCRIPT',
    'C_PLUS_PLUS',
    'C_SHARP',
    'QA',
    'JAVA',
    'PYTHON',
    'GOLANG',
    'DEV_OPS',
    'SAP',
    'RUBY',
    'RPA',
    'PHP'
  ];

  constructor(
    private internshipService: InternshipsService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private locationService: LocationService,
    private router: Router,
  )
  {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      internshipFormat: new FormControl('', Validators.required),
      skills: new FormArray([], Validators.required),
      trainingRequirements: new FormControl(''),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      registrationStartDate: new FormControl('', Validators.required),
      registrationEndDate: new FormControl('', Validators.required),
      techSkills: new FormControl(''),
      locationList: new FormControl(this.locations),
    });
    this.formLocation = new FormGroup({
      country: new FormControl(),
      city: new FormControl(),
    });
    const countries = route.snapshot.data.location;
    if (!countries.error) {
      this.countries = countries;
    }
    else {
      if (countries.error.message != null) {
        this.snackBar.open(`Ошибка ${countries.status} - Не удалось получить список стран, обновите страницу`, 'Ok');
      }
    }
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    const formArray: FormArray = this.form.get('skills') as FormArray;
    if ((value || '').trim()) {
      formArray.push(new FormControl(value.trim()));
    }
    if (input) {
      input.value = '';
    }
    this.skill.setValue(null);
  }
  remove(fruit: string): void {
    const formArray: FormArray = this.form.get('skills') as FormArray;
    const index = formArray.value.indexOf(fruit);
    if (index >= 0) {
      formArray.removeAt(index);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    const formArray: FormArray = this.form.get('skills') as FormArray;
    formArray.push(new FormControl(event.option.viewValue));
    console.log(formArray);
    this.skillInput.nativeElement.value = '';
  }
  today(): Date {
    return new Date();
  }
  onSkillChange(event: any){
    const formArray: FormArray = this.form.get('skills') as FormArray;
    formArray.push(new FormControl(event.target.value));
  }
  getKeys(obj: any): string[]{
    return Object.keys(obj);
  }
  addLocation(): void {
    this.locations.push(this.formLocation.value);
  }
  loadCities(): void {
    const countryId = this.formLocation.value.country.id;
    this.locationService.getCities(countryId).subscribe(data => {
      if(!data.error){
        this.cities = data;
      }
      else {
        this.snackBar.open(`Ошибка - Не удалось получить список городов, обновите страницу`, 'Ok');
      }
    });
  }
  submit(): void {
    const formValueJson = JSON.stringify(this.form.value);
    this.internshipService.sendFormData(formValueJson).subscribe(
      data => {
        console.log(data);
      }
    );
  }
  openSnackbar(message: string, action: string): void{
    const snackBarRef = this.snackBar.open(message, action);
    snackBarRef.afterDismissed().subscribe(() => {
      this.resetForm();
      this.router.navigate(['adminpage']);
    });
  }
  resetForm(): void{
    this.form.reset();
    this.formLocation.reset();
    this.locations = [];
  }
  ngOnInit(): void {
  }
}
