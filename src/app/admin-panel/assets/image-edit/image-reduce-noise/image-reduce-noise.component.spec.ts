import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageReduceNoiseComponent } from './image-reduce-noise.component';

describe('ImageReduceNoiseComponent', () => {
  let component: ImageReduceNoiseComponent;
  let fixture: ComponentFixture<ImageReduceNoiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageReduceNoiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageReduceNoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
