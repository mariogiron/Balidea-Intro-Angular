import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  // template: '<p>Contenido del contador</p>',
  styleUrl: './contador.css',
  // styles: [``]
})
export class Contador {

  numero: number = 2;
  maximo: number = 10;

  onClick(inc: boolean) {
    console.log('Pulsa el botón');
    if (inc) this.numero++;
    else this.numero--;
  }

  onInput($event: Event) {
    if ($event.target) {
      const inputTarget = $event.target as HTMLInputElement;
      console.log(inputTarget.value);
    }
  }

}
