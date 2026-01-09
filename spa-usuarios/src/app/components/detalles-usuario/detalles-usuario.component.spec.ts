import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesUsuarioComponent } from './detalles-usuario.component';

describe('DetallesUsuarioComponent', () => {
  let component: DetallesUsuarioComponent;
  let fixture: ComponentFixture<DetallesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesUsuarioComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
