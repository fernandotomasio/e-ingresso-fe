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
import { EventoShowcaseListComponent } from './evento-showcase-list/evento-showcase-list.component';
import { EventoRemoveComponent, EventoRemoveDialogComponent } from './evento-remove/evento-remove.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';



@NgModule({
  declarations: [EventoListComponent, EventoFormComponent, EventoSearchComponent, EventoShowcaseComponent, EventoShowcaseListComponent,
    EventoRemoveComponent, EventoRemoveDialogComponent, EventoDetailComponent],
  exports: [
    EventoListComponent,
    EventoFormComponent,
    EventoShowcaseComponent,
    EventoShowcaseListComponent,
    EventoDetailComponent
  ],
  imports: [
    CommonModule, InscricaoComponentsModule, IndicacaoComponentsModule, ReservaVagaModule,
    MaterialModule
  ],
  entryComponents: [
    EventoRemoveDialogComponent
  ]
})
export class EventoComponentsModule { }
