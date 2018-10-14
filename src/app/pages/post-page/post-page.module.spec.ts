import { PostPageModule } from './post-page.module';

describe('PostPageModule', () => {
  let postPageModule: PostPageModule;

  beforeEach(() => {
    postPageModule = new PostPageModule();
  });

  it('should create an instance', () => {
    expect(postPageModule).toBeTruthy();
  });
});
