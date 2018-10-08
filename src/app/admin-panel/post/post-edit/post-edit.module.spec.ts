import { PostEditModule } from './post-edit.module';

describe('PostEditModule', () => {
  let postEditModule: PostEditModule;

  beforeEach(() => {
    postEditModule = new PostEditModule();
  });

  it('should create an instance', () => {
    expect(postEditModule).toBeTruthy();
  });
});
