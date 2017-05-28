import { TestBed, inject } from '@angular/core/testing';

import { DomInjectableService } from './dom-injectables.service';

describe('DomInjectableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomInjectableService]
    });
  });

  it('should ...', inject([DomInjectableService], (service: DomInjectableService) => {
    expect(service).toBeTruthy();
  }));
});
