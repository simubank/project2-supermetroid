import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupAmountComponent } from './setup-amount.component';

describe('SetupAmountComponent', () => {
  let component: SetupAmountComponent;
  let fixture: ComponentFixture<SetupAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
