import { TestBed, inject } from '@angular/core/testing';

import { SettingsPageService } from './settings-page.service';

describe('SettingsPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsPageService]
    });
  });

  it('should be created', inject([SettingsPageService], (service: SettingsPageService) => {
    expect(service).toBeTruthy();
  }));
});
