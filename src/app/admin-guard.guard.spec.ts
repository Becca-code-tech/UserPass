import { TestBed } from '@angular/core/testing';

import { AdminGuardGuard } from './guards/admin.guard';

describe('AdminGuardGuard', () => {
  let guard: AdminGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
