import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPpComponent } from './form-pp.component';

describe('FormPpComponent', () => {
  let component: FormPpComponent;
  let fixture: ComponentFixture<FormPpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPpComponent]
    });
    fixture = TestBed.createComponent(FormPpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
