import { Alumno } from './../../interfaces/alumno.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'alumnos-lista',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent{
  
  displayedColumns: string[] = ['id', 'nombre', 'email','fechaNacimiento','seccion','nota','editar','eliminar'];

  @Input()
  datasource: Alumno[]= []

  @Output()
  onIndex:EventEmitter<number> = new EventEmitter()

  @Output()
  onStudent:EventEmitter<Alumno> = new EventEmitter()

  emitirIndex(index:number){
    this.onIndex.emit(index)
  }

  emitirAlumno(student:Alumno){
    this.onStudent.emit(student)
  }

}


