import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoIndexPageComponent } from './evento-index-page/evento-index-page.component';
import { RouterModule } from '@angular/router';
import { EventoAdminPagesRoutes } from './evento-admin-pages-routing';
import { EventoEditPageComponent } from './evento-edit-page/evento-edit-page.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';



@NgModule({
  declarations: [EventoIndexPageComponent, EventoEditPageComponent, EventoDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EventoAdminPagesRoutes)
  ]
})
export class EventoAdminPagesModule { }
