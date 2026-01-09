import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { DetallesUsuarioComponent } from './components/detalles-usuario/detalles-usuario.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';

@NgModule({
  declarations: [
    App,
    NavbarComponent,
    ListaUsuariosComponent,
    DetallesUsuarioComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
