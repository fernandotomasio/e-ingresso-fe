import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaSearchComponent } from './pessoa-search/pessoa-search.component';
import { PessoaSelectComponent } from './pessoa-select/pessoa-select.component';



@NgModule({
  declarations: [PessoaListComponent, PessoaSearchComponent, PessoaSelectComponent],
  imports: [
    CommonModule
  ],
  exports: [PessoaListComponent]
})
export class PessoaComponentsModule { }
