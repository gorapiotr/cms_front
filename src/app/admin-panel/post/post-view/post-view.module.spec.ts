import { PostViewModule } from './post-view.module';

describe('PostViewModule', () => {
  let postViewModule: PostViewModule;

  beforeEach(() => {
    postViewModule = new PostViewModule();
  });

  it('should create an instance', () => {
    expect(postViewModule).toBeTruthy();
  });
});
