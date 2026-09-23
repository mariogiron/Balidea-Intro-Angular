import { Component, signal } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {

  productos = signal<Producto[]>([
    { nombre: 'Teléfono', precio: 43, cantidad: 32 },
    { nombre: 'Sartén', precio: 561, cantidad: 12 }
  ]);

  agregarProducto() {
    this.productos.update((prods) => {
      return [...prods, { nombre: 'Ratón', precio: 23, cantidad: 10 }];
    })
  }

  reiniciarProductos() {
    this.productos.set([
      { nombre: 'Teléfono', precio: 43, cantidad: 32 },
      { nombre: 'Sartén', precio: 561, cantidad: 12 }
    ]);
  }

}
