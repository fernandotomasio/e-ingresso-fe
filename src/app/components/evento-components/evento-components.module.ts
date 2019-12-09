import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoListComponent } from './evento-list/evento-list.component';
import { EventoFormComponent } from './evento-form/evento-form.component';
import {MaterialModule} from '../../material-module';
import { EventoSearchComponent } from './evento-search/evento-search.component';
import { EventoShowcaseComponent } from './evento-showcase/evento-showcase.component';
import { InscricaoComponentsModule } from '../inscricao-components/inscricao-components.module';
import { IndicacaoComponentsModule } from '../indicacao-components/indicacao-components.module';
import { ReservaVagaModule } from '../reserva-vaga/reserva-vaga.module';



@NgModule({
  declarations: [EventoListComponent, EventoFormComponent, EventoSearchComponent, EventoShowcaseComponent],
  exports: [
    EventoListComponent,
    EventoFormComponent,
    EventoShowcaseComponent
  ],
  imports: [
    CommonModule, InscricaoComponentsModule, IndicacaoComponentsModule, ReservaVagaModule,
    MaterialModule
  ]
})
export class EventoComponentsModule { }
