import { AboutContentModule } from './about-content.module';

describe('AboutContentModule', () => {
  let aboutContentModule: AboutContentModule;

  beforeEach(() => {
    aboutContentModule = new AboutContentModule();
  });

  it('should create an instance', () => {
    expect(aboutContentModule).toBeTruthy();
  });
});
