import { TestBed, inject } from '@angular/core/testing';

import { BancoCentralService } from './banco-central.service';

describe('BancoCentralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BancoCentralService]
    });
  });

  it('should be created', inject([BancoCentralService], (service: BancoCentralService) => {
    expect(service).toBeTruthy();
  }));
});
