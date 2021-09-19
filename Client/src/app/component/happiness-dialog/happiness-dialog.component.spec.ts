import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessDialogComponent } from './happiness-dialog.component';

describe('HappinessDialogComponent', () => {
  let component: HappinessDialogComponent;
  let fixture: ComponentFixture<HappinessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappinessDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappinessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
