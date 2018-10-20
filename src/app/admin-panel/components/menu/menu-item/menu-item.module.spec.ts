import { MenuItemModule } from './menu-item.module';

describe('MenuItemModule', () => {
  let menuItemModule: MenuItemModule;

  beforeEach(() => {
    menuItemModule = new MenuItemModule();
  });

  it('should create an instance', () => {
    expect(menuItemModule).toBeTruthy();
  });
});
