import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoFormComponent } from './evento-form/evento-form.component';
import {MaterialModule} from '../../material-module';
import { EventoSearchComponent } from './evento-search/evento-search.component';



@NgModule({
  declarations: [EventoListComponent, EventoFormComponent, EventoSearchComponent],
  exports: [
    EventoListComponent,
    EventoFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class EventoComponentsModule { }
