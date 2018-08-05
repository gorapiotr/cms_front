import { ResponseResetModule } from './response-reset.module';

describe('ResponseResetModule', () => {
  let responseResetModule: ResponseResetModule;

  beforeEach(() => {
    responseResetModule = new ResponseResetModule();
  });

  it('should create an instance', () => {
    expect(responseResetModule).toBeTruthy();
  });
});
