import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module';
import { PropostaContainerComponent } from './proposta-container/proposta-container.component';



@NgModule({
  declarations: [PropostaContainerComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [PropostaContainerComponent]
})
export class PropostaComponentsModule { }
