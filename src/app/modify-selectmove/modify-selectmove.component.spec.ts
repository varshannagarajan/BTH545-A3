import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySelectmoveComponent } from './modify-selectmove.component';

describe('ModifySelectmoveComponent', () => {
  let component: ModifySelectmoveComponent;
  let fixture: ComponentFixture<ModifySelectmoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifySelectmoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySelectmoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
