import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUsuComponent } from './formulario-usu.component';

describe('FormularioUsuComponent', () => {
  let component: FormularioUsuComponent;
  let fixture: ComponentFixture<FormularioUsuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioUsuComponent]
    });
    fixture = TestBed.createComponent(FormularioUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
