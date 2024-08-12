import { TestBed } from '@angular/core/testing';

import { KeyclaokService } from './keyclaok.service';

describe('KeyclaokService', () => {
  let service: KeyclaokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyclaokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
