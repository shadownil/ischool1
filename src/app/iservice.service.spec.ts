import { TestBed } from '@angular/core/testing';

import { IserviceService } from './iservice.service';

describe('IserviceService', () => {
  let service: IserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
