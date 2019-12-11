import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';
import { PessoaSelectComponent } from './pessoa-select/pessoa-select.component';
import { PessoaDialogComponent, PessoaInputComponent } from './pessoa-input/pessoa-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';



@NgModule({
  declarations: [PessoaListComponent, PessoaSearchComponent, PessoaSelectComponent, PessoaInputComponent, PessoaDialogComponent],
  imports: [
    CommonModule, ReactiveFormsModule, MaterialModule
  ],
  exports: [PessoaListComponent, PessoaSelectComponent, PessoaInputComponent],
  entryComponents: [
    PessoaDialogComponent
  ]
})
export class PessoaComponentsModule { }
