import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  standalone: false,
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css',
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  cargando: boolean = true;
  error: string = '';

  constructor(private servicio: UsuarioService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.servicio.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.error = 'Error al cargar la lista de usuarios.';
        this.cargando = false;
        this.cdr.detectChanges();
        console.error('Error: ', error);
      }
    })
  }

  cerrarError() {
    this.error = '';  // Limpia el mensaje
  }
}
