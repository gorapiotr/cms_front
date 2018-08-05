import { RequestResetModule } from './request-reset.module';

describe('RequestResetModule', () => {
  let requestResetModule: RequestResetModule;

  beforeEach(() => {
    requestResetModule = new RequestResetModule();
  });

  it('should create an instance', () => {
    expect(requestResetModule).toBeTruthy();
  });
});
