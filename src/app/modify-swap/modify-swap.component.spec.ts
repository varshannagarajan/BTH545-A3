import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySwapComponent } from './modify-swap.component';

describe('ModifySwapComponent', () => {
  let component: ModifySwapComponent;
  let fixture: ComponentFixture<ModifySwapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifySwapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
