import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-detalles-usuario',
  standalone: false,
  templateUrl: './detalles-usuario.component.html',
  styleUrl: './detalles-usuario.component.css',
})
export class DetallesUsuarioComponent implements OnInit {
  usuario!: Usuario;
  cargando: boolean = true;
  error: string = '';

  constructor(
    private servicio: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.cargarUsuario(id);
  }

  cargarUsuario(id: string): void {
    this.servicio.getUsuario(id).subscribe({
      next: (usuario) => {
        this.usuario = usuario;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.error = 'Usuario no encontrado';
        this.cargando = false;
        this.cdr.detectChanges();
        console.error(error);
      }
    });
  }

  eliminar(): void {
    if (confirm('¿Eliminar este usuario?')) {
      this.servicio.deleteUsuario(this.usuario.id).subscribe({
        next: () => {
          alert('Usuario eliminado');
          this.router.navigate(['/usuarios']);
        },
        error: (error) => {
          alert('Error al eliminar');
          console.error(error);
        }
      });
    }
  }

  editar(): void {
    this.router.navigate(['/editar-usuario', this.usuario.id]);
  }
}

