import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-formulario-usuario',
  standalone: false,
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css',
})
export class FormularioUsuarioComponent implements OnInit {
  usuarioForm!: FormGroup;
  isEditMode = false;
  cargando = false;
  error = '';
  submitted = false;
  usuarioId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private servicio: UsuarioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initForm();
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.usuarioId = id;
      this.cargarUsuario(id);
    }
  }

  initForm(): void {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      avatar: ['', Validators.required]
    });
  }

  cargarUsuario(id: string): void {
    this.cargando = true;
    this.servicio.getUsuario(id).subscribe({
      next: (usuario) => {
        this.usuarioForm.patchValue({
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          email: usuario.email,
          avatar: usuario.avatar
        });
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Error al cargar usuario';
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.usuarioForm.invalid) return;

    const formValues = this.usuarioForm.value;

    if (this.isEditMode && this.usuarioId) {
      this.servicio.updateUsuario(this.usuarioId, formValues).subscribe({
        next: () => {
          this.router.navigate(['/usuario', this.usuarioId]);
        },
        error: () => {
          this.error = 'Error al actualizar';
          this.cargando = false;
        }
      });
    } else {
      this.servicio.createUsuario(formValues).subscribe({
        next: (nuevoUsuario) => {
          this.router.navigate(['/usuario', nuevoUsuario.id]);
        },
        error: () => {
          this.error = 'Error al crear';
          this.cargando = false;
        }
      });
    }
  }

  get f() { return this.usuarioForm.controls; }
}