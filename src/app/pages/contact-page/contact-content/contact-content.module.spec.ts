import { ContactContentModule } from './contact-content.module';

describe('ContactContentModule', () => {
  let contactContentModule: ContactContentModule;

  beforeEach(() => {
    contactContentModule = new ContactContentModule();
  });

  it('should create an instance', () => {
    expect(contactContentModule).toBeTruthy();
  });
});
