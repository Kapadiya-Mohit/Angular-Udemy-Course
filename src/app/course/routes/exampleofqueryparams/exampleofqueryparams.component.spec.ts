import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleofqueryparamsComponent } from './exampleofqueryparams.component';

describe('ExampleofqueryparamsComponent', () => {
  let component: ExampleofqueryparamsComponent;
  let fixture: ComponentFixture<ExampleofqueryparamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleofqueryparamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleofqueryparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
