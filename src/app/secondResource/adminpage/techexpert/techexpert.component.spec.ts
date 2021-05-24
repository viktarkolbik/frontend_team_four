import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechexpertComponent } from './techexpert.component';

describe('TechexpertComponent', () => {
  let component: TechexpertComponent;
  let fixture: ComponentFixture<TechexpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechexpertComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
