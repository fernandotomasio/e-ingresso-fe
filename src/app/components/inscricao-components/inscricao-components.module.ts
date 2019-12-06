import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscricaoFormComponent } from './inscricao-form/inscricao-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { InscricaoListComponent } from './inscricao-list/inscricao-list.component';
import { InscricaoSearchComponent } from './inscricao-search/inscricao-search.component';



@NgModule({
  declarations: [InscricaoFormComponent, InscricaoListComponent, InscricaoSearchComponent],
  imports: [
    CommonModule, ReactiveFormsModule, MaterialModule
  ],
  exports: [
    InscricaoFormComponent, InscricaoListComponent
  ]
})
export class InscricaoComponentsModule { }
