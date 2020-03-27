import { TestBed } from '@angular/core/testing';

import { BrandColorService } from './brand-color.service';

describe('BrandColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrandColorService = TestBed.get(BrandColorService);
    expect(service).toBeTruthy();
  });
});
