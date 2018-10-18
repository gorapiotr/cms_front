import { PageSettingsModule } from './page-settings.module';

describe('PageSettingsModule', () => {
  let pageSettingsModule: PageSettingsModule;

  beforeEach(() => {
    pageSettingsModule = new PageSettingsModule();
  });

  it('should create an instance', () => {
    expect(pageSettingsModule).toBeTruthy();
  });
});
