import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { Empleado } from '../../../core/interfaces/empleado.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {

  private readonly BASE_URL = 'https://crm-empleados.onrender.com/api/empleados';
  private readonly HttpClient = inject(HttpClient);

  getAll() {
    return this.HttpClient.get<Empleado[]>(this.BASE_URL);
  }

  getAllPromise() {
    return firstValueFrom(
      this.HttpClient.get<Empleado[]>(this.BASE_URL)
    );
  }

  getAllResource() {
    return httpResource<Empleado[]>(() => this.BASE_URL);
  }

  getByIdResource(idEmpleado: Signal<string>) {
    return httpResource<Empleado>(() => `${this.BASE_URL}/${idEmpleado()}`)
  }

  create(empleado: Empleado) {
    return firstValueFrom(
      this.HttpClient.post(this.BASE_URL, empleado)
    );
  }

}
