import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { DetallesUsuarioComponent } from './components/detalles-usuario/detalles-usuario.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';

const routes: Routes = [
  {path: 'usuarios', component: ListaUsuariosComponent},
  {path: 'usuario/:id', component: DetallesUsuarioComponent},
  {path: 'crear-usuario', component: FormularioUsuarioComponent},
  {path: 'editar-usuario/:id', component: FormularioUsuarioComponent},
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
  {path: '**', redirectTo: '/usuarios'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
