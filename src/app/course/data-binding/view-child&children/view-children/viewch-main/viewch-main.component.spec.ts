import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchMainComponent } from './viewch-main.component';

describe('ViewchMainComponent', () => {
  let component: ViewchMainComponent;
  let fixture: ComponentFixture<ViewchMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
