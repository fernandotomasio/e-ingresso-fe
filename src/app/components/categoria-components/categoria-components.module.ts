import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';



@NgModule({
  declarations: [CategoriaListComponent],
  exports: [
    CategoriaListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoriaComponentsModule { }
