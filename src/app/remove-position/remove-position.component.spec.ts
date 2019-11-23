import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePositionComponent } from './remove-position.component';

describe('RemovePositionComponent', () => {
  let component: RemovePositionComponent;
  let fixture: ComponentFixture<RemovePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
