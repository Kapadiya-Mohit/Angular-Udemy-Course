import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositabComponent } from './depositab.component';

describe('DepositabComponent', () => {
  let component: DepositabComponent;
  let fixture: ComponentFixture<DepositabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
