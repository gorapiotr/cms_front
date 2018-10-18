import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelSettingsComponent } from './admin-panel-settings.component';

describe('AdminPanelSettingsComponent', () => {
  let component: AdminPanelSettingsComponent;
  let fixture: ComponentFixture<AdminPanelSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
