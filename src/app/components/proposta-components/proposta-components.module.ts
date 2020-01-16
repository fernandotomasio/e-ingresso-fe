import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module';
import { PropostaEditComponent } from './proposta-edit/proposta-edit.component';
import { PropostaContainerComponent } from './proposta-container/proposta-container.component';



@NgModule({
  declarations: [PropostaEditComponent, PropostaContainerComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [PropostaEditComponent, PropostaContainerComponent]
})
export class PropostaComponentsModule { }
