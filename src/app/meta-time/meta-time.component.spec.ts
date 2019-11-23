import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaTimeComponent } from './meta-time.component';

describe('MetaTimeComponent', () => {
  let component: MetaTimeComponent;
  let fixture: ComponentFixture<MetaTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
