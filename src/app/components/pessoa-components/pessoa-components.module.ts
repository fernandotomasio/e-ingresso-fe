import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';
import { PessoaSelectComponent } from './pessoa-select/pessoa-select.component';
import { PessoaDialogComponent, PessoaInputComponent } from './pessoa-input/pessoa-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import {PessoaRemoveComponent, PessoaRemoveDialogComponent} from './pessoa-remove/pessoa-remove.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import {DemoMaterialModule} from '../../demo-material-module';
import { SharedModule } from '../../shared/shared.module';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [PessoaListComponent, PessoaSearchComponent, PessoaSelectComponent, PessoaInputComponent,
    PessoaDialogComponent, PessoaFormComponent, PessoaRemoveComponent, PessoaDetailComponent, PessoaRemoveDialogComponent],
  imports: [
    CommonModule, ReactiveFormsModule, DemoMaterialModule, SharedModule, FlexLayoutModule
  ],
  exports: [PessoaListComponent, PessoaSelectComponent, PessoaInputComponent,
    PessoaFormComponent, PessoaDetailComponent],
  entryComponents: [
    PessoaDialogComponent, PessoaRemoveDialogComponent
  ]
})
export class PessoaComponentsModule { }
