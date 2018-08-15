import { TestBed, inject } from '@angular/core/testing';

import { CarouselGroupService } from './carousel-group.service';

describe('CarouselGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselGroupService]
    });
  });

  it('should be created', inject([CarouselGroupService], (service: CarouselGroupService) => {
    expect(service).toBeTruthy();
  }));
});
