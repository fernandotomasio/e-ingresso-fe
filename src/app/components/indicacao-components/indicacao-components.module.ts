import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicacaoListComponent } from './indicacao-list/indicacao-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { IndicacaoSearchComponent } from './indicacao-search/indicacao-search.component';
import { IndicacaoFormComponent } from './indicacao-form/indicacao-form.component';
import { PessoaComponentsModule } from '../pessoa-components/pessoa-components.module';
import { IndicacaoRemoveComponent, IndicacaoRemoveDialogComponent } from './indicacao-remove/indicacao-remove.component';
import { IndicacaoContainerComponent } from './indicacao-container/indicacao-container.component';
import { IndicacaoDetailComponent } from './indicacao-detail/indicacao-detail.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [IndicacaoListComponent, IndicacaoSearchComponent, IndicacaoFormComponent,
    IndicacaoRemoveComponent, IndicacaoRemoveDialogComponent, IndicacaoContainerComponent, IndicacaoDetailComponent],
  imports: [
    CommonModule, ReactiveFormsModule, MaterialModule, PessoaComponentsModule, SharedModule
  ],
  exports: [IndicacaoListComponent, IndicacaoFormComponent,
    IndicacaoContainerComponent, IndicacaoDetailComponent],
  entryComponents: [
    IndicacaoRemoveDialogComponent
  ]
})
export class IndicacaoComponentsModule { }
