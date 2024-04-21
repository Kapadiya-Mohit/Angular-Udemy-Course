import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucceessAlertComponent } from './succeess-alert.component';

describe('SucceessAlertComponent', () => {
  let component: SucceessAlertComponent;
  let fixture: ComponentFixture<SucceessAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucceessAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucceessAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
