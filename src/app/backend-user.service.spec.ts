import { TestBed, inject } from '@angular/core/testing';

import { BackendUserService } from './backend-user.service';

describe('BackendUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendUserService]
    });
  });

  it('should be created', inject([BackendUserService], (service: BackendUserService) => {
    expect(service).toBeTruthy();
  }));
});
