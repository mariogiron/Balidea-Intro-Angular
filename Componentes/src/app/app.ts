import { Component, signal } from '@angular/core';

import { Contador } from './components/contador/contador';

@Component({
  selector: 'app-root',
  imports: [Contador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Componentes');
}
