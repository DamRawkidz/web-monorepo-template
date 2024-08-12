import { TestBed } from '@angular/core/testing';

import { ApptokenService } from './apptoken.service';

describe('ApptokenService', () => {
  let service: ApptokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApptokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
