import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaIndexPageComponent } from './categoria-index-page/categoria-index-page.component';
import { RouterModule } from '@angular/router';
import { CategoriaAdminPagesRoutes } from './categoria-admin-pages-routing';



@NgModule({
  declarations: [CategoriaIndexPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CategoriaAdminPagesRoutes)
  ]
})
export class CategoriaAdminPagesModule { }
