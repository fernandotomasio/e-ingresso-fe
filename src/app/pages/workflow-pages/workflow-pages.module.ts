import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkflowPagesRoutes } from './workflow-pages-routing';
import { WorkflowIndexPageComponent } from './workflow-index-page/workflow-index-page.component';
import { IndicacaoComponentsModule } from '../../components/indicacao-components/indicacao-components.module';
import { PropostaComponentsModule } from '../../components/proposta-components/proposta-components.module';
import {DemoMaterialModule} from '../../demo-material-module';



@NgModule({
  declarations: [WorkflowIndexPageComponent],
  imports: [
    CommonModule, DemoMaterialModule, IndicacaoComponentsModule,
    PropostaComponentsModule,
    RouterModule.forChild(WorkflowPagesRoutes)
  ]
})
export class WorkflowPagesModule { }
