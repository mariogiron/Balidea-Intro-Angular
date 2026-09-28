import { Component, signal } from '@angular/core';

interface Usuario {
  nombre: string;
  rol: 'admin' | 'editor' | 'lector',
  avisos: number
}

@Component({
  selector: 'app-panel-sesion',
  imports: [],
  templateUrl: './panel-sesion.html',
  styleUrl: './panel-sesion.css',
})
export class PanelSesion {

  readonly usuario = signal<Usuario | null>(null);

  onLogIn() {
    this.usuario.set({
      nombre: 'Pepito', rol: 'admin', avisos: 43
    });
  }

}
