import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriaListComponent} from './categoria-list/categoria-list.component';
import {CategoriaFormComponent} from './categoria-form/categoria-form.component';
import {MaterialModule} from '../../material-module';
import { CategoriaSearchComponent } from './categoria-search/categoria-search.component';


@NgModule({
  declarations: [CategoriaListComponent, CategoriaFormComponent, CategoriaSearchComponent],
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
