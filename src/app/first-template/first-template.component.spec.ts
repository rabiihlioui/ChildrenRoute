import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTemplateComponent } from './first-template.component';

describe('FirstTemplateComponent', () => {
  let component: FirstTemplateComponent;
  let fixture: ComponentFixture<FirstTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
