import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosIndexPageComponent } from './favoritos-index-page/favoritos-index-page.component';
import { RouterModule } from '@angular/router';
import { FavoritosPagesRoutes } from './favoritos-pages-routing';


@NgModule({
  declarations: [FavoritosIndexPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FavoritosPagesRoutes)
  ]
})
export class FavoritosPagesModule { }
