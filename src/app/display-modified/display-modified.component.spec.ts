import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayModifiedComponent } from './display-modified.component';

describe('DisplayModifiedComponent', () => {
  let component: DisplayModifiedComponent;
  let fixture: ComponentFixture<DisplayModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
