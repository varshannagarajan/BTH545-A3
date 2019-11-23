import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaResolutionComponent } from './meta-resolution.component';

describe('MetaResolutionComponent', () => {
  let component: MetaResolutionComponent;
  let fixture: ComponentFixture<MetaResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaResolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
