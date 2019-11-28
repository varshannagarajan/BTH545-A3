import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOriginalComponent } from './display-original.component';

describe('DisplayOriginalComponent', () => {
  let component: DisplayOriginalComponent;
  let fixture: ComponentFixture<DisplayOriginalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOriginalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
