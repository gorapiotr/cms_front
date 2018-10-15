import { PostAddModule } from './post-add.module';

describe('PostAddModule', () => {
  let postAddModule: PostAddModule;

  beforeEach(() => {
    postAddModule = new PostAddModule();
  });

  it('should create an instance', () => {
    expect(postAddModule).toBeTruthy();
  });
});
