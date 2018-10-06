import { SimpleLoaderModule } from './simple-loader.module';

describe('SimpleLoaderModule', () => {
  let simpleLoaderModule: SimpleLoaderModule;

  beforeEach(() => {
    simpleLoaderModule = new SimpleLoaderModule();
  });

  it('should create an instance', () => {
    expect(simpleLoaderModule).toBeTruthy();
  });
});
