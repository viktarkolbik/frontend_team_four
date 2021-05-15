import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { InternshipsService } from 'src/app/core/services/internships.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FullLocation, Location} from '../../../types/location';
import {LocationService} from '../../../core/services/location.service';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Internship} from '../../../types';

@Component({
  selector: 'ia-trainingform',
  templateUrl: './internshipform.component.html',
  styleUrls: ['./internshipform.component.scss']
})

export class InternshipformComponent implements OnInit {
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;
  @ViewChild('skillInput') skillInput!: ElementRef<HTMLInputElement>;
  form: FormGroup;
  //formLocation: FormGroup;
  internship?: Internship;
  skill = new FormControl('');
  country = new FormControl('');
  city = new FormControl('');
  countries = [] as Location[];
  cities = [] as Location[];
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
    this.skills = route.snapshot.data.skills;
    this.countries = route.snapshot.data.location;
    this.internship = route.snapshot.data.internship;
    //add error handler----------------------------------------------------------
    this.form = new FormGroup({
      capacity: new FormControl(
        this.internship?.capacity || '',
        Validators.required
      ),
      name: new FormControl(
        this.internship?.name || '',
        Validators.required
      ),
      description: new FormControl(this.internship?.description || ''),
      internshipFormat: new FormControl(
        this.internship?.internshipFormat || '',
        Validators.required
      ),
      skills: new FormArray(
        this.internship?.skills?.map(skill => new FormControl(skill)) || [],
        Validators.required
      ),
      requirements: new FormControl(this.internship?.requirements || ''),
      startDate: new FormControl(
        this.internship?.startDate || '',
        Validators.required
      ),
      endDate: new FormControl(
        this.internship?.endDate || '',
        Validators.required
      ),
      registrationStartDate: new FormControl(
        this.internship?.registrationStartDate || '',
        Validators.required
      ),
      registrationEndDate: new FormControl(
        this.internship?.registrationEndDate || '',
        Validators.required
      ),
      techSkills: new FormControl(
        this.internship?.techSkills || '',
      ),
      locations: new FormArray(
        this.internship?.locations?.map<FormControl>(location =>
          new FormControl({...location})
        ) || [],
        ),
      publicationDate: new FormControl(this.internship?.publicationDate || this.today()),
    });
  }
  addSkill(event: MatChipInputEvent): void {
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
  addLocation(): void {
    const formArray: FormArray = this.form.get('locations') as FormArray;
    formArray.push( new FormControl({
      country: this.country.value,
      city: this.city.value,
    }));
  }
  removeLocation(deletedLocation: FullLocation): void {
    const formArray: FormArray = this.form.get('locations') as FormArray;
    const locations: FullLocation[] = formArray.value;
    const index = locations.findIndex(location =>
      location.country === deletedLocation.country
      && location.city === deletedLocation.city
    );
    if(index >= 0) {
      formArray.removeAt(index);
    }
  }
  removeSkill(fruit: string): void {
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
  loadCities(): void {
    const countryId = this.country.value.id;
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
    const internshipObservable = (this.internship?.id) ?
      this.internshipService.updateInternship(formValueJson, this.internship.id) :
      this.internshipService.sendFormData(formValueJson);

    internshipObservable.subscribe(
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
  }
  ngOnInit(): void {
  }
}
