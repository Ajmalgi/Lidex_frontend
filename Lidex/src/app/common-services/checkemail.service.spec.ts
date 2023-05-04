import { TestBed } from '@angular/core/testing';

import { CheckemailService } from './checkemail.service';

describe('CheckemailService', () => {
  let service: CheckemailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckemailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
