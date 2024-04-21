import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcParentComponent } from './viewc-parent.component';

describe('ViewcParentComponent', () => {
  let component: ViewcParentComponent;
  let fixture: ComponentFixture<ViewcParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
