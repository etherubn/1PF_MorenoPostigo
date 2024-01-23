import { Component } from '@angular/core';
import { Alumno } from './interfaces/alumno.interface';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';

@Component({
  selector: 'alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {
  alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Ruben Antonio',
      apellido: 'Moreno Postigo',
      email: 'moreno@gmail.com',
      fechaNacimiento: new Date(1998, 4, 23),
      course: 'Angular',
      nota: 16,
    },
    {
      id: 2,
      nombre: 'Jose Manuel',
      apellido: 'Raggio Bend',
      email: 'ebend@gmail.com',
      fechaNacimiento: new Date(1996, 9, 8),
      course: 'Rabbit',
      nota: 18,
    },
    {
      id: 3,
      nombre: 'Raquel Manuela',
      apellido: 'Morales Rosario',
      email: 'raqmor@hotmail.com',
      fechaNacimiento: new Date(1995, 5, 15),
      course: 'React',
      nota: 10,
    },
    {
      id: 4,
      nombre: 'Jimena Alexandra',
      apellido: 'Mareq Del',
      email: 'rator@hotmail.com',
      fechaNacimiento: new Date(2000, 10, 15),
      course: 'Angular',
      nota: 10,
    },
    {
      id: 5,
      nombre: 'Pedro Alejandro',
      apellido: 'Suarez Postigo',
      email: 'morsuar@gmail.com',
      fechaNacimiento: new Date(1992, 5, 29),
      course: 'Angular',
      nota: 10,
    },
    {
      id: 6,
      nombre: 'Jimena Alexandra',
      apellido: 'Mareq Del',
      email: 'rator@hotmail.com',
      fechaNacimiento: new Date(2000, 10, 15),
      course: 'Vue',
      nota: 10,
    },
    {
      id: 7,
      nombre: 'Pedro Alejandro',
      apellido: 'Suarez Postigo',
      email: 'morsuar@gmail.com',
      fechaNacimiento: new Date(1992, 5, 29),
      course: 'Rabbit',
      nota: 10,
    }
  ]

  constructor(public dialog: MatDialog) {

  }

  
  openDialog(student:Alumno|undefined): void {
    const dialogRef = this.dialog.open(AbmAlumnosComponent, {
      data:student
    });

    dialogRef.afterClosed().subscribe((result:Alumno) => {
      if(!result) return

      if(!result.id){
        result['id'] = new Date().getTime()
        this.alumnos = [...this.alumnos, result];
        return
      }

      this.alumnos = this.alumnos.map(alumno=>{
        if (alumno.id ===result.id) {
          alumno.id = result.id
          alumno.nombre= result.nombre
          alumno.apellido = result.apellido
          alumno.email = result.email
          alumno.fechaNacimiento = result.fechaNacimiento
          alumno.course = result.course
          alumno.nota = result.nota
        }
        return alumno
      })


    });
  }

  deleteStudent(index:number){
    this.alumnos= this.alumnos.filter((student)=> student.id!==index)
  }
}
