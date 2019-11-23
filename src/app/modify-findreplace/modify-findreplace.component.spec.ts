import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFindreplaceComponent } from './modify-findreplace.component';

describe('ModifyFindreplaceComponent', () => {
  let component: ModifyFindreplaceComponent;
  let fixture: ComponentFixture<ModifyFindreplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyFindreplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyFindreplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
