import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDateComponent } from './meta-date.component';

describe('MetaDateComponent', () => {
  let component: MetaDateComponent;
  let fixture: ComponentFixture<MetaDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
