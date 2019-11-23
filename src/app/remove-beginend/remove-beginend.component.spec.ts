import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBeginendComponent } from './remove-beginend.component';

describe('RemoveBeginendComponent', () => {
  let component: RemoveBeginendComponent;
  let fixture: ComponentFixture<RemoveBeginendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveBeginendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBeginendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
