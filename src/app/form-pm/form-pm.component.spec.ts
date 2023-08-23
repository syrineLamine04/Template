import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPMComponent } from './form-pm.component';

describe('FormPMComponent', () => {
  let component: FormPMComponent;
  let fixture: ComponentFixture<FormPMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPMComponent]
    });
    fixture = TestBed.createComponent(FormPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
