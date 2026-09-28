import { Component, ElementRef, signal, viewChild } from '@angular/core';

import { Contador } from './components/contador/contador';
import { CicloVida } from './components/ciclo-vida/ciclo-vida';
import { Signals } from './components/signals/signals';
import { Carrito } from './components/carrito/carrito';
import { CardProducto } from './components/card-producto/card-producto';
import { Producto } from './interfaces/producto';
import { SelectorCantidad } from './components/selector-cantidad/selector-cantidad';

@Component({
  selector: 'app-root',
  imports: [Contador, CicloVida, Signals, Carrito, CardProducto, SelectorCantidad],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  readonly cajaTexto = viewChild.required<ElementRef<HTMLInputElement>>('cajaTexto');

  readonly unidades = signal(4);

  onAgregar($event: Producto) {
    console.log($event);
    // Asigno el foco al campo de texto
    this.cajaTexto().nativeElement.focus();
    this.cajaTexto().nativeElement.style.border = '5px solid red';
  }

}
