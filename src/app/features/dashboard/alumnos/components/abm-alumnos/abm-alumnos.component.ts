import { Course } from '../../interfaces/course.type';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from 'src/app/shared/Validator/validator';
import { Alumno } from '../../interfaces/alumno.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'alumnos-abm',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent implements OnInit{

  courses: Course[] = ['Angular','Mercury','Rabbit','React','Vue'] 

  form: FormGroup
  idControl: FormControl = new FormControl()
  nombreControl: FormControl = new FormControl<string>('', [Validators.required, Validators.minLength(4)])
  apellidoControl: FormControl = new FormControl<string>('', [Validators.required, Validators.minLength(4)])
  emailControl: FormControl = new FormControl<string>('',[Validator.validEmail])
  fechaNacimientoControl: FormControl = new FormControl<Date>(new Date(), [Validators.required])
  cursoControl: FormControl = new FormControl('', [Validators.required])
  notaControl: FormControl = new FormControl<number>(0, [Validators.required, Validators.min(0), Validators.max(20)])

  constructor(
    private fb: FormBuilder,
    private matDialofRef:MatDialogRef<Alumno>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno
    ) {
    this.form = this.fb.group({
      id:this.idControl,
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
      fechaNacimiento: this.fechaNacimientoControl,
      course: this.cursoControl,
      nota: this.notaControl
    });
  }
  ngOnInit(): void {
    if(!this.data) return
    
    
    this.form.reset(this.data)
  }

  fieldName(formControl: AbstractControl,): string {
    let field = ""
    for (let fieldName in this.form.controls) {
      if (this.form.controls[fieldName] === formControl) {
        field = fieldName
      }
    }
    return field
  }

  get alumnoNuevo():Alumno{
    return this.form.value as Alumno
  }

  sendAlumno():void {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }
  
    this.matDialofRef.close(this.alumnoNuevo)
  }

  editAlumno():void {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }

    this.matDialofRef.close(this.alumnoNuevo)
  }

  onNoClick(): void {
    this.matDialofRef.close();
  }
}
