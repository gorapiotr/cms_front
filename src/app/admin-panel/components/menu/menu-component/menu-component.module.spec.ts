import { MenuComponentModule } from './menu-component.module';

describe('MenuComponentModule', () => {
  let menuComponentModule: MenuComponentModule;

  beforeEach(() => {
    menuComponentModule = new MenuComponentModule();
  });

  it('should create an instance', () => {
    expect(menuComponentModule).toBeTruthy();
  });
});
