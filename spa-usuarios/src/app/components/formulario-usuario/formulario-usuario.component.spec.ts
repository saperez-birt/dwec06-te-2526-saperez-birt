import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUsuarioComponent } from './formulario-usuario.component';

describe('FormularioUsuarioComponent', () => {
  let component: FormularioUsuarioComponent;
  let fixture: ComponentFixture<FormularioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioUsuarioComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
