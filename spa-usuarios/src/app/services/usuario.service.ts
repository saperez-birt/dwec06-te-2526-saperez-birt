import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'https://695bff631d8041d5eeb944bd.mockapi.io/prueba/api/v1/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getUsuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  updateUsuario(id: string, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
  }

  deleteUsuario(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
