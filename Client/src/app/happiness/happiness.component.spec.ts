import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessComponent } from './happiness.component';

describe('HappinessComponent', () => {
  let component: HappinessComponent;
  let fixture: ComponentFixture<HappinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
