import { TestBed, inject } from '@angular/core/testing';

import { BackendLoginService } from './backend-login.service';

describe('BackendLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendLoginService]
    });
  });

  it('should be created', inject([BackendLoginService], (service: BackendLoginService) => {
    expect(service).toBeTruthy();
  }));
});
