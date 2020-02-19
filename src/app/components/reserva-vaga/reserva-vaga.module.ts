import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaVagaListComponent } from './reserva-vaga-list/reserva-vaga-list.component';
import {DemoMaterialModule} from '../../demo-material-module';

@NgModule({
  declarations: [ReservaVagaListComponent],
  imports: [
    CommonModule, DemoMaterialModule
  ],
  exports: [
    ReservaVagaListComponent
  ]
})
export class ReservaVagaModule { }
