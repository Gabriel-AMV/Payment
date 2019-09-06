import { TestBed } from '@angular/core/testing';

import { FreeapiService } from './freeapi.service';

describe('FreeapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreeapiService = TestBed.get(FreeapiService);
    expect(service).toBeTruthy();
  });
});
