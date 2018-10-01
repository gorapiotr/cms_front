import { RightSideBarModule } from './right-side-bar.module';

describe('RightSideBarModule', () => {
  let rightSideBarModule: RightSideBarModule;

  beforeEach(() => {
    rightSideBarModule = new RightSideBarModule();
  });

  it('should create an instance', () => {
    expect(rightSideBarModule).toBeTruthy();
  });
});
