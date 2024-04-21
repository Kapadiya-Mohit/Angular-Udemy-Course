import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentServerComponent } from './parent-server.component';

describe('ParentServerComponent', () => {
  let component: ParentServerComponent;
  let fixture: ComponentFixture<ParentServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
