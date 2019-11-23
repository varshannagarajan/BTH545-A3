import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeforeafterComponent } from './add-beforeafter.component';

describe('AddBeforeafterComponent', () => {
  let component: AddBeforeafterComponent;
  let fixture: ComponentFixture<AddBeforeafterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeforeafterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeforeafterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
