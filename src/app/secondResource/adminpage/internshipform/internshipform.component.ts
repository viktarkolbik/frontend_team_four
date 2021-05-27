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
import {User} from '../../../types/user';
import {UserService} from '../../../core/services/user.service';
import {switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {LoadingService} from "../../../core/services/loading.service";

@Component({
  selector: 'ia-trainingform',
  templateUrl: './internshipform.component.html',
  styleUrls: ['./internshipform.component.scss']
})

export class InternshipformComponent implements OnInit {
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;
  @ViewChild('skillInput') skillInput!: ElementRef<HTMLInputElement>;
  internship?: Internship;
  admins = [] as User[];
  assignedAdmins = [] as User[];
  techExperts = [] as User[];
  assignedTechExpert = [] as User[];
  countries = [] as Location[];
  cities = [] as Location[];
  skills: string[] = [];
  form: FormGroup;
  country = new FormControl('');
  city = new FormControl('');
  skill = new FormControl('');
  error: any;
  usersCheckbox = new Map();
  formats: string[] = [
    'ONLINE',
    'OFFLINE'
  ];

  constructor(
    private internshipService: InternshipsService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private locationService: LocationService,
    private userService: UserService,
    private router: Router,
    private loadingService: LoadingService,
  )
  {
    const error = (
      route.snapshot.data.skills?.error
      || route.snapshot.data.countries?.error
      || route.snapshot.data.internshipData?.error
    );
    if(error){
      this.error = error;
    }
    else {
      this.skills = route.snapshot.data.skills;
      this.countries = route.snapshot.data.location;
      this.internship = route.snapshot.data.internshipData?.internship;
      this.admins = route.snapshot.data.admins;
      if (this.route.snapshot.params.id){
        this.assignedAdmins = route.snapshot.data.internshipData?.assignedAdmins;
        this.assignedTechExpert = route.snapshot.data.internshipData?.assignedTechExpert;
        this.techExperts = route.snapshot.data.internshipData?.techExperts;
        this.techExperts.sort((user1, user2) =>
          (user1.firstName > user2.firstName) ? 1 : -1
        );
      }
      this.updateUsersCheckbox();
    }
    this.form = new FormGroup({
      capacity: new FormControl(
        this.internship?.capacity || '',
        Validators.required
      ),
      name: new FormControl(
        this.internship?.name || '',
        [
          Validators.required,
          Validators.maxLength(50)
        ]
      ),
      description: new FormControl(
        this.internship?.description || '',
        Validators.required
        ),
      internshipFormat: new FormControl(
        this.internship?.internshipFormat || '',
        Validators.required
      ),
      skills: new FormArray(
        this.internship?.skills?.map(skill => new FormControl(skill)) || [],
        Validators.required
      ),
      requirements: new FormControl(
        this.internship?.requirements || '',
        Validators.required
        ),
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
        Validators.required
      ),
      locations: new FormArray(
        this.internship?.locations?.map<FormControl>(location =>
          new FormControl({...location})
        ) || [],
        Validators.required
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
  updateTechExpert(): void{
    this.userService.getUsersSkills(this.form.get('skills')?.value)
      .subscribe(techExpert => {
        this.techExperts = techExpert;
        this.updateUsersCheckbox();
      });
  }
  updateUsersCheckbox(): void {
    this.usersCheckbox.clear();
    this.techExperts.forEach(techExpert => {
      this.usersCheckbox.set(techExpert.id, new FormControl(false));
    });
    this.admins.forEach(admin => {
      this.usersCheckbox.set(admin.id, new FormControl(false));
    });
    this.assignedTechExpert.forEach(techExpert => {
      const checkbox = this.usersCheckbox.get(techExpert.id);
      if(checkbox) {
        checkbox.setValue(true);
      }
    });
    this.assignedAdmins.forEach(admin => {
      const checkbox = this.usersCheckbox.get(admin.id);
      if(checkbox){
        checkbox.setValue(true);
      }
    });
  }
  uncheckUser(userId: string): void {
    const checkbox = this.usersCheckbox.get(userId);
    if(checkbox){
      checkbox.setValue(false);
    }
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
        this.snackBar.open(`Failed to get list of cities`, 'Ok');
      }
    });
  }
  submit(): void {
    const formValueJson = JSON.stringify(this.form.value);
    const users = Array.from(this.usersCheckbox.keys()).filter(userId =>
      this.usersCheckbox.get(userId).value
    );
    const internshipObservable: Observable<Internship> = (this.internship?.id && this.route.snapshot.params.id) ?
      this.internshipService.updateInternship(formValueJson, this.internship.id) :
      this.internshipService.sendFormData(formValueJson);
    this.loadingService.setLoadingState(true);
    internshipObservable
      .pipe(
        switchMap(data =>
          (this.route.snapshot.params.id) ?
            this.internshipService.reassignUsers(data.id, users) :
            this.internshipService.assignUsers(data.id, users)
        )
      ).subscribe(
        () => {
          this.loadingService.setLoadingState(false);
          const message = 'Your application sent successfully';
          this.openSnackbar(message, 'Ok');
        },
        error => {
          this.loadingService.setLoadingState(false);
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
      this.router.navigate(['/adminpage/internships']);
    });
  }
  resetForm(): void{
    this.form.reset();
  }
  ngOnInit(): void {
  }
}
