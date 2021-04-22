import { TestBed } from '@angular/core/testing';

import { IsTechExpertGuard } from './is-tech-expert.guard';

describe('IsTechExpertGuard', () => {
  let guard: IsTechExpertGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsTechExpertGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
