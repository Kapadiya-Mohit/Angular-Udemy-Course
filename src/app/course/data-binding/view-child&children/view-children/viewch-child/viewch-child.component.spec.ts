import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchChildComponent } from './viewch-child.component';

describe('ViewchChildComponent', () => {
  let component: ViewchChildComponent;
  let fixture: ComponentFixture<ViewchChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
