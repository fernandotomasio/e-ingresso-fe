import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoIndexPageComponent } from './evento-index-page/evento-index-page.component';
import { RouterModule } from '@angular/router';
import { EventoAdminPagesRoutes } from './evento-admin-pages-routing';
import { EventoEditPageComponent } from './evento-edit-page/evento-edit-page.component';
import { EventoDetailPageComponent } from './evento-detail-page/evento-detail-page.component';
import { EventoComponentsModule } from '../../components/evento-components/evento-components.module';
import {DemoMaterialModule} from '../../demo-material-module';



@NgModule({
  declarations: [EventoIndexPageComponent, EventoEditPageComponent, EventoDetailPageComponent],
  imports: [
    CommonModule, EventoComponentsModule,
    RouterModule.forChild(EventoAdminPagesRoutes),
    DemoMaterialModule

  ]
})
export class EventoAdminPagesModule { }
