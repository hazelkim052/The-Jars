import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivateComponent } from './motivate.component';

describe('MotivateComponent', () => {
  let component: MotivateComponent;
  let fixture: ComponentFixture<MotivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
