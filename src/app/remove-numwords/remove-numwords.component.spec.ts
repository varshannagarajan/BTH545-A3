import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveNumwordsComponent } from './remove-numwords.component';

describe('RemoveNumwordsComponent', () => {
  let component: RemoveNumwordsComponent;
  let fixture: ComponentFixture<RemoveNumwordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveNumwordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveNumwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
