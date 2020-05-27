import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaDetailPageComponent } from './pessoa-detail-page/pessoa-detail-page.component';
import { PessoaEditPageComponent } from './pessoa-edit-page/pessoa-edit-page.component';
import { PessoaIndexPageComponent } from './pessoa-index-page/pessoa-index-page.component';
import {RouterModule} from '@angular/router';
import {PessoaAdminPagesRoutes} from './pessoa-admin-pages-routing';
import {PessoaComponentsModule} from '../../components/pessoa-components/pessoa-components.module';
import {DemoMaterialModule} from "../../demo-material-module";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [PessoaDetailPageComponent, PessoaEditPageComponent, PessoaIndexPageComponent],
  imports: [
    CommonModule, PessoaComponentsModule, DemoMaterialModule, FlexLayoutModule,
    RouterModule.forChild(PessoaAdminPagesRoutes)

  ]
})
export class PessoaAdminPagesModule { }
