import { TestBed } from '@angular/core/testing';

import { UsesService } from './uses.service';

describe('UsesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsesService = TestBed.get(UsesService);
    expect(service).toBeTruthy();
  });
});
