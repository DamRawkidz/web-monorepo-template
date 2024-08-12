import { TestBed } from '@angular/core/testing';

import { OdicService } from './odic.service';

describe('OdicService', () => {
  let service: OdicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
