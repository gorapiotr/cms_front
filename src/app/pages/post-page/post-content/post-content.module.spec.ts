import { PostContentModule } from './post-content.module';

describe('PostContentModule', () => {
  let postContentModule: PostContentModule;

  beforeEach(() => {
    postContentModule = new PostContentModule();
  });

  it('should create an instance', () => {
    expect(postContentModule).toBeTruthy();
  });
});
