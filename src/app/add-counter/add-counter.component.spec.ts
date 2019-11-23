import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCounterComponent } from './add-counter.component';

describe('AddCounterComponent', () => {
  let component: AddCounterComponent;
  let fixture: ComponentFixture<AddCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
