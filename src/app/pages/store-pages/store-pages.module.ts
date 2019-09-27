import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreCategoriasPageComponent } from './store-categorias-page/store-categorias-page.component';
import { RouterModule } from '@angular/router';
import { StorePagesRoutes } from './store-pages-routing';
import { MaterialModule } from '../../material-module';
import { StoreEventosPageComponent } from './store-eventos-page/store-eventos-page.component';
import { StoreEventosDetailComponent } from './store-eventos-detail/store-eventos-detail.component';
import { StoreInscricaoEditComponent } from './store-inscricao-edit/store-inscricao-edit.component';
import { InscricaoComponentsModule } from '../../components/inscricao-components/inscricao-components.module';



@NgModule({
  declarations: [StoreCategoriasPageComponent, StoreEventosPageComponent, StoreEventosDetailComponent, StoreInscricaoEditComponent],
  imports: [
    CommonModule, MaterialModule, InscricaoComponentsModule,
    RouterModule.forChild(StorePagesRoutes)
  ]
})
export class StorePagesModule { }
