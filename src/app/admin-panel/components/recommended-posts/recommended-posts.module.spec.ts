import { RecommendedPostsModule } from './recommended-posts.module';

describe('RecommendedPostsModule', () => {
  let recommendedPostsModule: RecommendedPostsModule;

  beforeEach(() => {
    recommendedPostsModule = new RecommendedPostsModule();
  });

  it('should create an instance', () => {
    expect(recommendedPostsModule).toBeTruthy();
  });
});
