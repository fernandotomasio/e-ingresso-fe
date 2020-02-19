import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosIndexPageComponent } from './favoritos-index-page/favoritos-index-page.component';
import { RouterModule } from '@angular/router';
import { FavoritosPagesRoutes } from './favoritos-pages-routing';
import {DemoMaterialModule} from '../../demo-material-module';


@NgModule({
  declarations: [FavoritosIndexPageComponent],
  imports: [
    CommonModule, DemoMaterialModule,
    RouterModule.forChild(FavoritosPagesRoutes)
  ]
})
export class FavoritosPagesModule { }
