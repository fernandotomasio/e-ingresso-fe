import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material-module';
import { RouterModule } from '@angular/router';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MenuComponent, LoggedUserComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ]
})
export class LayoutModule { }
