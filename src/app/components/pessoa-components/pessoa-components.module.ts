import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';



@NgModule({
  declarations: [PessoaListComponent],
  imports: [
    CommonModule
  ],
  exports: [PessoaListComponent]
})
export class PessoaComponentsModule { }
