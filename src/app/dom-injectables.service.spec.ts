import { TestBed, inject } from '@angular/core/testing';

import { DomInjectablesService } from './dom-injectables.service';

describe('DomInjectablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomInjectablesService]
    });
  });

  it('should ...', inject([DomInjectablesService], (service: DomInjectablesService) => {
    expect(service).toBeTruthy();
  }));
});
