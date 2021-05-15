import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { InternshipsService } from 'src/app/core/services/internships.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FullLocation, Location} from '../../../types/location';
import {LocationService} from '../../../core/services/location.service';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'ia-trainingform',
  templateUrl: './internshipform.component.html',
  styleUrls: ['./internshipform.component.scss']
})

export class InternshipformComponent implements OnInit {
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;
  @ViewChild('skillInput') skillInput!: ElementRef<HTMLInputElement>;
  form: FormGroup;
  formLocation: FormGroup;
  skill = new FormControl('');
  countries = [] as Location[];
  cities = [] as Location[];
  locations = [] as FullLocation[];
  skills: string[] = [];

  formats: string[] = [
    'ONLINE',
    'OFFLINE'
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
      capacity: new FormControl('', Validators.required),
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
      publicationDate: new FormControl(this.today()),
    });
    this.formLocation = new FormGroup({
      country: new FormControl(),
      city: new FormControl(),
    });
    this.skills = route.snapshot.data.skills;
    this.countries = route.snapshot.data.location;
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    const formArray: FormArray = this.form.get('skills') as FormArray;
    if (
      (value || '').trim()
      && this.skills.includes(value)
    ) {
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
    const value = event.option.viewValue;
    const formArray: FormArray = this.form.get('skills') as FormArray;
    if(!formArray.value.includes(value)){
      formArray.push(new FormControl(value));
    }
    else {
      this.snackBar.open('This technology has already been added', 'Ok');
    }
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
        const message = 'Your application sent successfully';
        this.openSnackbar(message, 'Ok');
      },
      error => {
        const message = 'Error happened please try again later';
        this.openSnackbar(message, 'Ok');
        console.log(error);
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
