import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcChildComponent } from './viewc-child.component';

describe('ViewcChildComponent', () => {
  let component: ViewcChildComponent;
  let fixture: ComponentFixture<ViewcChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
