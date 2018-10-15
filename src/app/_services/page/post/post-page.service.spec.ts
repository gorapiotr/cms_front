import { TestBed, inject } from '@angular/core/testing';

import { PostPageService } from './post-page.service';

describe('PostPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostPageService]
    });
  });

  it('should be created', inject([PostPageService], (service: PostPageService) => {
    expect(service).toBeTruthy();
  }));
});
