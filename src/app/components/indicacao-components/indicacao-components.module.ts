import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicacaoListComponent } from './indicacao-list/indicacao-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';



@NgModule({
  declarations: [IndicacaoListComponent],
  imports: [
    CommonModule, ReactiveFormsModule, MaterialModule
  ],
  exports: [IndicacaoListComponent]
})
export class IndicacaoComponentsModule { }
