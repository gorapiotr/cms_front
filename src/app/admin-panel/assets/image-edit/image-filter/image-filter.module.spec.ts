import { ImageFilterModule } from './image-filter.module';

describe('ImageFilterModule', () => {
  let imageFilterModule: ImageFilterModule;

  beforeEach(() => {
    imageFilterModule = new ImageFilterModule();
  });

  it('should create an instance', () => {
    expect(imageFilterModule).toBeTruthy();
  });
});
