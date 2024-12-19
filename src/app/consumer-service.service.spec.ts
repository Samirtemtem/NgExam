import { TestBed } from '@angular/core/testing';

import { ConsumerService } from './consumer-service.service';

describe('ConsumerServiceService', () => {
  let service: ConsumerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
