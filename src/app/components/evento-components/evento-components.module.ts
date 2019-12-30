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
import { ReactiveFormsModule } from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
// import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';



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
    MaterialModule, ReactiveFormsModule
  ],
  entryComponents: [
    EventoRemoveDialogComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    // {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    // {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  ]
})
export class EventoComponentsModule { }
