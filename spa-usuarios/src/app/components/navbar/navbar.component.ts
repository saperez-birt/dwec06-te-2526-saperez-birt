import { Component } from '@angular/core';

interface ItemNav {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  itemsNav: ItemNav[] = [
    {label: 'Inicio', path: '/usuarios'},
    {label: 'Crear Usuario', path: '/crear-usuario'}
  ];
}
