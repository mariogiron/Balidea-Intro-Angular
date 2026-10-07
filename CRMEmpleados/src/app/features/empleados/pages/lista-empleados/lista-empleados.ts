import { Component, inject } from '@angular/core';
import { EmpleadosService } from '../../services/empleados-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  imports: [RouterLink],
  templateUrl: './lista-empleados.html',
  styleUrl: './lista-empleados.css',
})
export class ListaEmpleados {

  empleadosService = inject(EmpleadosService);

  protected readonly empleados = this.empleadosService.getAllResource();

  async ngOnInit() {
    // Observables
    // this.empleadosService.getAll().subscribe({
    //   next: (response) => {
    //     console.log(response[4].nombre);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // })

    // Promise
    // try {
    //   const response = await this.empleadosService.getAllPromise();
    //   console.log(response);
    // } catch (error) {
    //   console.log('Error en la descarga');
    // }
  }

}
