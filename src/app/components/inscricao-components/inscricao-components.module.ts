import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscricaoFormComponent } from './inscricao-form/inscricao-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { InscricaoListComponent } from './inscricao-list/inscricao-list.component';
import { InscricaoSearchComponent } from './inscricao-search/inscricao-search.component';
import { PessoaComponentsModule } from '../pessoa-components/pessoa-components.module';
import { InscricaoRemoveComponent, InscricaoRemoveDialogComponent } from './inscricao-remove/inscricao-remove.component';


@NgModule({
  declarations: [InscricaoFormComponent, InscricaoListComponent, InscricaoSearchComponent,
    InscricaoRemoveComponent, InscricaoRemoveDialogComponent],
  imports: [
    CommonModule, ReactiveFormsModule, MaterialModule, PessoaComponentsModule
  ],
  exports: [
    InscricaoFormComponent, InscricaoListComponent
  ],
  entryComponents: [
    InscricaoRemoveDialogComponent
  ]
})
export class InscricaoComponentsModule { }
