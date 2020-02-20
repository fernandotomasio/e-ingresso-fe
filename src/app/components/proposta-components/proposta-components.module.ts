import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropostaEditComponent } from './proposta-edit/proposta-edit.component';
import { PropostaContainerComponent } from './proposta-container/proposta-container.component';
import { PropostaRemoveComponent, PropostaRemoveDialogComponent } from './proposta-remove/proposta-remove.component';
import { SharedModule } from '../../shared/shared.module';
import {DemoMaterialModule} from '../../demo-material-module';



@NgModule({
  declarations: [PropostaEditComponent, PropostaContainerComponent, PropostaRemoveComponent,
    PropostaRemoveComponent, PropostaRemoveDialogComponent],
  imports: [
    CommonModule, DemoMaterialModule, SharedModule
  ],
  exports: [PropostaEditComponent, PropostaContainerComponent],
  entryComponents: [
  PropostaRemoveDialogComponent
]
})
export class PropostaComponentsModule { }
