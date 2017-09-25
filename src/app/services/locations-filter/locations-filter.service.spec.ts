import { TestBed, inject } from '@angular/core/testing';

import { LocationsFilterService } from './locations-filter.service';

describe('LocationsFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationsFilterService]
    });
  });

  it('should be created', inject([LocationsFilterService], (service: LocationsFilterService) => {
    expect(service).toBeTruthy();
  }));
});
