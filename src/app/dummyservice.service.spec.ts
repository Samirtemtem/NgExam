import { TestBed } from '@angular/core/testing';

import { DummyserviceService } from './dummyservice.service';

describe('DummyserviceService', () => {
  let service: DummyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
