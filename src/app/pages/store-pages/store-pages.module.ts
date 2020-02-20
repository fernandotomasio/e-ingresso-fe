import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreCategoriasPageComponent } from './store-categorias-page/store-categorias-page.component';
import { RouterModule } from '@angular/router';
import { StorePagesRoutes } from './store-pages-routing';
import { StoreEventosPageComponent } from './store-eventos-page/store-eventos-page.component';
import { StoreEventosDetailComponent } from './store-eventos-detail/store-eventos-detail.component';
import { StoreInscricaoEditComponent } from './store-inscricao-edit/store-inscricao-edit.component';
import { InscricaoComponentsModule } from '../../components/inscricao-components/inscricao-components.module';
import { IndicacaoComponentsModule } from '../../components/indicacao-components/indicacao-components.module';
import { EventoComponentsModule } from '../../components/evento-components/evento-components.module';
import { StoreIndicacaoEditComponent } from './store-indicacao-edit/store-indicacao-edit.component';
import { CategoriaComponentsModule } from '../../components/categoria-components/categoria-components.module';
import {DemoMaterialModule} from '../../demo-material-module';



@NgModule({
  declarations: [StoreCategoriasPageComponent, StoreEventosPageComponent, StoreEventosDetailComponent,
    StoreInscricaoEditComponent, StoreIndicacaoEditComponent],
  imports: [
    CommonModule, DemoMaterialModule, InscricaoComponentsModule, EventoComponentsModule, IndicacaoComponentsModule, CategoriaComponentsModule,
    RouterModule.forChild(StorePagesRoutes)
  ]
})
export class StorePagesModule { }
