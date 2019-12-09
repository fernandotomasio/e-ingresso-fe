import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicacaoListComponent } from './indicacao-list/indicacao-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { IndicacaoSearchComponent } from './indicacao-search/indicacao-search.component';
import { IndicacaoFormComponent } from './indicacao-form/indicacao-form.component';



@NgModule({
  declarations: [IndicacaoListComponent, IndicacaoSearchComponent, IndicacaoFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule, MaterialModule
  ],
  exports: [IndicacaoListComponent, IndicacaoFormComponent],
})
export class IndicacaoComponentsModule { }
