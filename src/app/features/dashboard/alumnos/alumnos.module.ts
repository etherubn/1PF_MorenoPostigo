import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos.component';



@NgModule({
  declarations: [
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    AlumnosComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    AlumnosComponent
  ]
})
export class AlumnosModule { }
