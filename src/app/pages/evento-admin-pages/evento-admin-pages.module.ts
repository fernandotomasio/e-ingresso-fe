import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoIndexPageComponent } from './evento-index-page/evento-index-page.component';
import { RouterModule } from '@angular/router';
import { EventoAdminPagesRoutes } from './evento-admin-pages-routing';



@NgModule({
  declarations: [EventoIndexPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EventoAdminPagesRoutes)
  ]
})
export class EventoAdminPagesModule { }
