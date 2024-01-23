import { Alumno } from './../../features/dashboard/alumnos/interfaces/alumno.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(alumno:Alumno): string {
    return `${alumno.nombre} ${alumno.apellido}`;
  }

}
