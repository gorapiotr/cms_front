import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDialog } from './slider.component';

describe('SliderDialog', () => {
  let component: SliderDialog;
  let fixture: ComponentFixture<SliderDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
