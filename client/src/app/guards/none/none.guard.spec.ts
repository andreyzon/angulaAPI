import { TestBed, async, inject } from '@angular/core/testing';

import { NoneGuard } from './none.guard';

describe('NoneGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoneGuard]
    });
  });

  it('should ...', inject([NoneGuard], (guard: NoneGuard) => {
    expect(guard).toBeTruthy();
  }));
});
