import { Component, model } from '@angular/core';

@Component({
  selector: 'app-selector-cantidad',
  imports: [],
  templateUrl: './selector-cantidad.html',
  styleUrl: './selector-cantidad.css',
})
export class SelectorCantidad {

  readonly cantidad = model(1);

  modificaCantidad(inc: boolean) {
    this.cantidad.update((value) => {
      return inc ? value + 1 : value - 1;
    });
  }

}
