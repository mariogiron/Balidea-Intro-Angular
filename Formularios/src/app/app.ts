import { Component, signal } from '@angular/core';
import { FormularioReactivo } from './components/formulario-reactivo/formulario-reactivo';
import { FormularioSignal } from './components/formulario-signal/formulario-signal';

@Component({
  selector: 'app-root',
  imports: [FormularioReactivo, FormularioSignal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Formularios');
}
