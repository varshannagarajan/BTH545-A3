import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyReplacenumComponent } from './modify-replacenum.component';

describe('ModifyReplacenumComponent', () => {
  let component: ModifyReplacenumComponent;
  let fixture: ComponentFixture<ModifyReplacenumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyReplacenumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyReplacenumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
