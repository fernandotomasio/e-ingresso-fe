import {Routes} from '@angular/router';
import { StoreCategoriasPageComponent } from './store-categorias-page/store-categorias-page.component';
import { StoreEventosPageComponent } from './store-eventos-page/store-eventos-page.component';
import { StoreEventosDetailComponent } from './store-eventos-detail/store-eventos-detail.component';
import { StoreInscricaoEditComponent } from './store-inscricao-edit/store-inscricao-edit.component';

export const StorePagesRoutes: Routes = [
  {path: '', component: StoreCategoriasPageComponent},
  {path: ':oid/eventos', component: StoreEventosPageComponent},
  {path: 'eventos/:oid', component: StoreEventosDetailComponent},
  {path: 'inscricao', component: StoreInscricaoEditComponent}
];
