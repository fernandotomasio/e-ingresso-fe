import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriaListComponent} from './categoria-list/categoria-list.component';
import {CategoriaFormComponent} from './categoria-form/categoria-form.component';
import {MaterialModule} from '../../material-module';
import { CategoriaSearchComponent } from './categoria-search/categoria-search.component';
import { CategoriaShowcaseListComponent } from './categoria-showcase-list/categoria-showcase-list.component';
import { CategoriaRemoveComponent, CategoriaRemoveDialogComponent } from './categoria-remove/categoria-remove.component';
import { CategoriaDetailComponent } from './categoria-detail/categoria-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoriaListComponent, CategoriaFormComponent, CategoriaSearchComponent, CategoriaShowcaseListComponent,
    CategoriaRemoveComponent, CategoriaRemoveDialogComponent, CategoriaDetailComponent],
  exports: [
    CategoriaListComponent,
    CategoriaFormComponent,
    CategoriaRemoveComponent,
    CategoriaShowcaseListComponent,
    CategoriaDetailComponent,
    CategoriaSearchComponent,
    CategoriaSearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CategoriaRemoveDialogComponent
  ]
})
export class CategoriaComponentsModule { }
