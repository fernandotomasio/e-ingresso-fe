import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaIndexPageComponent } from './categoria-index-page/categoria-index-page.component';
import { RouterModule } from '@angular/router';
import { CategoriaAdminPagesRoutes } from './categoria-admin-pages-routing';
import { CategoriaEditPageComponent } from './categoria-edit-page/categoria-edit-page.component';
import { CategoriaDetailPageComponent } from './categoria-detail-page/categoria-detail-page.component';



@NgModule({
  declarations: [CategoriaIndexPageComponent, CategoriaEditPageComponent, CategoriaDetailPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CategoriaAdminPagesRoutes)
  ]
})
export class CategoriaAdminPagesModule { }
