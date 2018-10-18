import { AdminPanelSettingsModule } from './admin-panel-settings.module';

describe('AdminPanelSettingsModule', () => {
  let adminPanelSettingsModule: AdminPanelSettingsModule;

  beforeEach(() => {
    adminPanelSettingsModule = new AdminPanelSettingsModule();
  });

  it('should create an instance', () => {
    expect(adminPanelSettingsModule).toBeTruthy();
  });
});
