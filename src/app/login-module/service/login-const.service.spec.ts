import { TestBed } from '@angular/core/testing';

import { LoginConstService } from './login-const.service';

describe('LoginConstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginConstService = TestBed.get(LoginConstService);
    expect(service).toBeTruthy();
  });
});
