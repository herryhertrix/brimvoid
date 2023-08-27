import { TestBed } from '@angular/core/testing';

import { GenerateShrtcodeService } from './generate-shrtcode.service';

describe('GenerateShrtcodeService', () => {
  let service: GenerateShrtcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateShrtcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
