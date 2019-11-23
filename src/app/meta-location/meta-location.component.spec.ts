import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaLocationComponent } from './meta-location.component';

describe('MetaLocationComponent', () => {
  let component: MetaLocationComponent;
  let fixture: ComponentFixture<MetaLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
