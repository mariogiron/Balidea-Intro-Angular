import { Component } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  imports: [],
  templateUrl: './ciclo-vida.html',
  styleUrl: './ciclo-vida.css',
})
export class CicloVida {

  constructor() {
    console.log('1. constructor');
  }

  ngOnInit() {
    console.log('2. ngOnInit');
  }

  ngOnDestroy() {
    console.log('3. ngOnDestroy');
  }

}