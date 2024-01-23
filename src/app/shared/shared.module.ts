import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { AgePipe } from './pipes/age.pipe';



@NgModule({
  declarations: [
    FormErrorComponent,
    FullNamePipe,
    AgePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MaterialModule,
    FormErrorComponent,
    FullNamePipe,
    AgePipe
  ]
})
export class SharedModule { }
