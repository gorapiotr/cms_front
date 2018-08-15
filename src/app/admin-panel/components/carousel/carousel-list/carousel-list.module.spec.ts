import { CarouselListModule } from './carousel-list.module';

describe('CarouselListModule', () => {
  let carouselListModule: CarouselListModule;

  beforeEach(() => {
    carouselListModule = new CarouselListModule();
  });

  it('should create an instance', () => {
    expect(carouselListModule).toBeTruthy();
  });
});
