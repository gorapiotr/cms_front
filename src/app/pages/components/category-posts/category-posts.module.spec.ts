import { CategoryPostsModule } from './category-posts.module';

describe('CategoryPostsModule', () => {
  let categoryPostsModule: CategoryPostsModule;

  beforeEach(() => {
    categoryPostsModule = new CategoryPostsModule();
  });

  it('should create an instance', () => {
    expect(categoryPostsModule).toBeTruthy();
  });
});
