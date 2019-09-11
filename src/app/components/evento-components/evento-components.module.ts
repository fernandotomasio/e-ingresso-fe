import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoListComponent } from './evento-list/evento-list.component';



@NgModule({
  declarations: [EventoListComponent],
  exports: [
    EventoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventoComponentsModule { }
