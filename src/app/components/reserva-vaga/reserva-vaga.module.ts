import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaVagaListComponent } from './reserva-vaga-list/reserva-vaga-list.component';



@NgModule({
  declarations: [ReservaVagaListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ReservaVagaListComponent
  ]
})
export class ReservaVagaModule { }
