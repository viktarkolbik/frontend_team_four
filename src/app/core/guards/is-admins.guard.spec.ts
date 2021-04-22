import { TestBed } from '@angular/core/testing';

import { IsAdminsGuard } from './is-admins.guard';

describe('IsAdminsGuard', () => {
  let guard: IsAdminsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAdminsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
