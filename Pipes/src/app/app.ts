import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { IbanPipe } from './pipes/iban-pipe';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe, IbanPipe, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('Pipes');
  protected readonly currentDate = signal<Date>(new Date());
  protected readonly price = signal(423.9500001812);
  protected readonly numero = signal(2129.18821912);
  protected readonly persona = signal({
    nombre: 'Mario', apellidos: 'Girón', email: 'mario@gmail.com'
  })
  protected readonly ibanNum = signal('1234 12341234 1234');

  ngOnInit() {
    setInterval(() => {
      this.currentDate.set(new Date());
    }, 1000);
  }

}
