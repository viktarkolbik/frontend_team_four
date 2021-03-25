import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingdescriptionComponent } from './trainingdescription.component';

describe('TrainingdescriptionComponent', () => {
  let component: TrainingdescriptionComponent;
  let fixture: ComponentFixture<TrainingdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
