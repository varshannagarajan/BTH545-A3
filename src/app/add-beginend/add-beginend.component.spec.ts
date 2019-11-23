import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeginendComponent } from './add-beginend.component';

describe('AddBeginendComponent', () => {
  let component: AddBeginendComponent;
  let fixture: ComponentFixture<AddBeginendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeginendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeginendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
