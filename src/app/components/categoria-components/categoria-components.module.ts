import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriaListComponent} from './categoria-list/categoria-list.component';
import {CategoriaFormComponent} from './categoria-form/categoria-form.component';
import {MaterialModule} from '../../material-module';


@NgModule({
  declarations: [CategoriaListComponent, CategoriaFormComponent],
  exports: [
    CategoriaListComponent,
    CategoriaFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CategoriaComponentsModule { }
