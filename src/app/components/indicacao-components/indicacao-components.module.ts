import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicacaoListComponent } from './indicacao-list/indicacao-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { IndicacaoSearchComponent } from './indicacao-search/indicacao-search.component';
import { IndicacaoFormComponent } from './indicacao-form/indicacao-form.component';
import { PessoaComponentsModule } from '../pessoa-components/pessoa-components.module';
import { IndicacaoRemoveComponent, IndicacaoRemoveDialogComponent } from './indicacao-remove/indicacao-remove.component';



@NgModule({
  declarations: [IndicacaoListComponent, IndicacaoSearchComponent, IndicacaoFormComponent,
    IndicacaoRemoveComponent, IndicacaoRemoveDialogComponent],
  imports: [
    CommonModule, ReactiveFormsModule, MaterialModule, PessoaComponentsModule,
  ],
  exports: [IndicacaoListComponent, IndicacaoFormComponent],
  entryComponents: [
    IndicacaoRemoveDialogComponent
  ]
})
export class IndicacaoComponentsModule { }
