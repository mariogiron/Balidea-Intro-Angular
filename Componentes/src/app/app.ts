import { Component, signal } from '@angular/core';

import { Contador } from './components/contador/contador';
import { CicloVida } from './components/ciclo-vida/ciclo-vida';
import { Signals } from './components/signals/signals';
import { Carrito } from './components/carrito/carrito';
import { CardProducto } from './components/card-producto/card-producto';

@Component({
  selector: 'app-root',
  imports: [Contador, CicloVida, Signals, Carrito, CardProducto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Componentes');
}
