import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscricaoFormComponent } from './inscricao-form/inscricao-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';



@NgModule({
  declarations: [InscricaoFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule, MaterialModule
  ],
  exports: [
    InscricaoFormComponent
  ]
})
export class InscricaoComponentsModule { }
