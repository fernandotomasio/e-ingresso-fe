import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosIndexPageComponent } from './favoritos-index-page/favoritos-index-page.component';
import { RouterModule } from '@angular/router';
import { FavoritosPagesRoutes } from './favoritos-pages-routing';
import { MaterialModule } from '../../material-module';


@NgModule({
  declarations: [FavoritosIndexPageComponent],
  imports: [
    CommonModule, MaterialModule,
    RouterModule.forChild(FavoritosPagesRoutes)
  ]
})
export class FavoritosPagesModule { }
