import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySplitmoveComponent } from './modify-splitmove.component';

describe('ModifySplitmoveComponent', () => {
  let component: ModifySplitmoveComponent;
  let fixture: ComponentFixture<ModifySplitmoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifySplitmoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySplitmoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
