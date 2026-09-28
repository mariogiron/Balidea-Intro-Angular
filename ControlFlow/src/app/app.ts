import { Component, signal } from '@angular/core';
import { PanelSesion } from './components/panel-sesion/panel-sesion';
import { ListaProductos } from './components/lista-productos/lista-productos';

@Component({
  selector: 'app-root',
  imports: [PanelSesion, ListaProductos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
