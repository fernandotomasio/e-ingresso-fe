import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaVagaListComponent } from './reserva-vaga-list/reserva-vaga-list.component';
import { MaterialModule } from '../../material-module';

@NgModule({
  declarations: [ReservaVagaListComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [
    ReservaVagaListComponent
  ]
})
export class ReservaVagaModule { }
