import { TestBed } from '@angular/core/testing';

import { ServicexService } from './servicex.service';

describe('ServicexService', () => {
  let service: ServicexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
