import { ContactPageModule } from './contact-page.module';

describe('ContactPageModule', () => {
  let contactPageModule: ContactPageModule;

  beforeEach(() => {
    contactPageModule = new ContactPageModule();
  });

  it('should create an instance', () => {
    expect(contactPageModule).toBeTruthy();
  });
});
