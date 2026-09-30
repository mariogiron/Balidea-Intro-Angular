import { computed, Injectable, signal } from '@angular/core';
import { LineaCarrito } from '../interfaces/linea-carrito';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {

  private readonly lineasSignal = signal<LineaCarrito[]>([
    { producto: 'sartén', precio: 13, unidades: 39 },
    { producto: 'boli azul', precio: 2, unidades: 128 }
  ]);

  // Método públicos
  readonly lineas = this.lineasSignal.asReadonly();
  readonly unidades = computed(() => (
    this.lineasSignal().reduce((acc, l) => acc + l.unidades, 0)
  ));
  readonly total = computed(() => (
    this.lineasSignal().reduce((acc, l) => acc + (l.unidades * l.precio), 0)
  ));

  agregar(producto: string, precio: number): void {
    this.lineasSignal.update((lineas) => {
      // const existente = lineas.find((l) => l.producto === producto);
      // if (existente) {

      // }

      return [...lineas, { producto, precio, unidades: 1 }];
    });
  }

}
