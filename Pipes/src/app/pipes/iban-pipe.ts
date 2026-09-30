import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iban',
})
export class IbanPipe implements PipeTransform {
  transform(value: string, ocultar = false): string {
    if (!value) return '';
    const clean = value.replace(/\s/g, '').toUpperCase();

    if (clean.length <= 8) return clean;

    const start = clean.slice(0, 4);
    const end = clean.slice(-4);
    const masked = start + '*'.repeat(clean.length - 8) + end;

    // Agrupa en bloques de 4 separados por espacio
    return masked.match(/.{1,4}/g)!.join(' ');
  }
}
