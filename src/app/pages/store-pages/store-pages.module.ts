import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreCategoriasPageComponent } from './store-categorias-page/store-categorias-page.component';
import { RouterModule } from '@angular/router';
import { StorePagesRoutes } from './store-pages-routing';



@NgModule({
  declarations: [StoreCategoriasPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(StorePagesRoutes)
  ]
})
export class StorePagesModule { }
