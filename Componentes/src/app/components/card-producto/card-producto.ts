import { Component, Input, input, output } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'card-producto',
  imports: [],
  templateUrl: './card-producto.html',
  styleUrl: './card-producto.css',
})
export class CardProducto {

  readonly producto = input.required<Producto>();

  readonly agregar = output<Producto>();

  onClick() {
    this.agregar.emit(this.producto());
  }

}
