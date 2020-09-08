import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriaListComponent} from './categoria-list/categoria-list.component';
import {CategoriaFormComponent} from './categoria-form/categoria-form.component';
import { CategoriaSearchComponent } from './categoria-search/categoria-search.component';
import { CategoriaShowcaseListComponent } from './categoria-showcase-list/categoria-showcase-list.component';
import { CategoriaRemoveComponent, CategoriaRemoveDialogComponent } from './categoria-remove/categoria-remove.component';
import { CategoriaDetailComponent } from './categoria-detail/categoria-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import {DemoMaterialModule} from '../../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {RouterModule} from '@angular/router';


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
        DemoMaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        SharedModule,
        RouterModule
    ],
  entryComponents: [
    CategoriaRemoveDialogComponent
  ]
})
export class CategoriaComponentsModule { }
