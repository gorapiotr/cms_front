import { PageLoaderModule } from './page-loader.module';

describe('PageLoaderModule', () => {
  let pageLoaderModule: PageLoaderModule;

  beforeEach(() => {
    pageLoaderModule = new PageLoaderModule();
  });

  it('should create an instance', () => {
    expect(pageLoaderModule).toBeTruthy();
  });
});
