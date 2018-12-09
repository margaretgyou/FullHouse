import { TestBed } from '@angular/core/testing';

import { RoomsDataService } from './rooms-data.service';

describe('RoomsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomsDataService = TestBed.get(RoomsDataService);
    expect(service).toBeTruthy();
  });
});
