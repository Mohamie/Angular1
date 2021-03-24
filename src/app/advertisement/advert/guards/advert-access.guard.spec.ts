import { TestBed } from '@angular/core/testing';

import { AdvertAccessGuard } from './advert-access.guard';

describe('AdvertAccessGuard', () => {
  let guard: AdvertAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdvertAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
