import {Routes} from '@angular/router';
import { EventoIndexPageComponent } from './evento-index-page/evento-index-page.component';
import { EventoDetailPageComponent } from './evento-detail-page/evento-detail-page.component';
import { EventoEditPageComponent } from './evento-edit-page/evento-edit-page.component';

export const EventoAdminPagesRoutes: Routes = [
  {path: '', component: EventoIndexPageComponent},
  {path: ':oid/detail', component: EventoDetailPageComponent},
  {path: 'edit', component: EventoEditPageComponent},
  {path: ':oid/edit', component: EventoEditPageComponent}
];
