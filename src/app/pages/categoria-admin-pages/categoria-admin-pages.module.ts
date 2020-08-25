import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaIndexPageComponent } from './categoria-index-page/categoria-index-page.component';
import { RouterModule } from '@angular/router';
import { CategoriaAdminPagesRoutes } from './categoria-admin-pages-routing';
import { CategoriaEditPageComponent } from './categoria-edit-page/categoria-edit-page.component';
import { CategoriaDetailPageComponent } from './categoria-detail-page/categoria-detail-page.component';
import { CategoriaComponentsModule } from '../../components/categoria-components/categoria-components.module';
import {MatButtonModule} from '@angular/material';
import {DemoMaterialModule} from '../../demo-material-module';



@NgModule({
  declarations: [CategoriaIndexPageComponent, CategoriaEditPageComponent, CategoriaDetailPageComponent],
  imports: [
    CommonModule, CategoriaComponentsModule,
    RouterModule.forChild(CategoriaAdminPagesRoutes),
    DemoMaterialModule
  ]
})
export class CategoriaAdminPagesModule { }
