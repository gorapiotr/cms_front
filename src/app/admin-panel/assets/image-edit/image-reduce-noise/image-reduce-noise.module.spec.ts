import { ImageReduceNoiseModule } from './image-reduce-noise.module';

describe('ImageReduceNoiseModule', () => {
  let imageReduceNoiseModule: ImageReduceNoiseModule;

  beforeEach(() => {
    imageReduceNoiseModule = new ImageReduceNoiseModule();
  });

  it('should create an instance', () => {
    expect(imageReduceNoiseModule).toBeTruthy();
  });
});
