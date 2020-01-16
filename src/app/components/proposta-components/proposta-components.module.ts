import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module';
import { PropostaEditComponent } from './proposta-edit/proposta-edit.component';



@NgModule({
  declarations: [PropostaEditComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [PropostaEditComponent]
})
export class PropostaComponentsModule { }
