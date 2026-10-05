import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css',
})
export class FormularioReactivo {

  // protected readonly formulario = new FormGroup({
  //   nombre: new FormControl('', [
  //     Validators.required, Validators.minLength(3)
  //   ]),
  //   apellidos: new FormControl('', [
  //     Validators.required, Validators.maxLength(15)
  //   ]),
  //   edad: new FormControl(null, [
  //     Validators.min(18), Validators.max(65)
  //   ]),
  //   email: new FormControl('mario@gmail.com', [
  //     Validators.pattern(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/)
  //   ]),
  //   dni: new FormControl('8888888Y', {
  //     nonNullable: true,
  //     validators: [
  //       Validators.required
  //     ]
  //   }),
  //   password: new FormControl()
  // });

  // FormBuilder
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.maxLength(15)]],
    edad: [0],
    email: ['', Validators.required],
    dni: ['', this.dniValidator],
    password: ['']
  });

  ngOnInit() {
    this.formulario.controls.nombre.valueChanges.subscribe(v => {
      console.log('Cambio nombre', v);
    });
  }

  checkError(fieldName: string, errorName: string) {
    return this.formulario.get(fieldName)?.hasError(errorName) && this.formulario.get(fieldName)?.touched
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      this.formulario.reset();
    }
  }

  cargaCompleta() {
    this.formulario.setValue({
      nombre: 'Luis', apellidos: 'García', email: 'luis@gmail.com', dni: '999999T', password: '12345', edad: 21
    })
  }

  cargaParcial() {
    this.formulario.patchValue({
      email: 'emailmodificado@gmail.com'
    })
  }

  dniValidator(control: AbstractControl) {
    // Si pasa la validación -> return null
    // Si no pasa la validación -> return objeto 
    const value = control.value;

    if (!value) return null;

    const pattern = /^(\d{8})([A-Z])$/.exec(value);
    if (!pattern) {
      return { dnivalidator: { motivo: 'formato' } };
    }

    const LETRAS_DNI = 'TRWAGMYFPDXBNJZSQVHLCKE'
    const letraEsperada = LETRAS_DNI[Number(pattern[1]) % 23];
    if (letraEsperada !== pattern[2]) {
      return { dnivalidator: { motivo: 'letra' } };
    }

    return null;

  }

}
