import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternlistComponent } from './internlist.component';

describe('InternlistComponent', () => {
  let component: InternlistComponent;
  let fixture: ComponentFixture<InternlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternlistComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
