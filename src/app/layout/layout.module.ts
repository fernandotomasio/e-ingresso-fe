import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material-module';
import { RouterModule } from '@angular/router';
import { LoggedUserComponent } from './logged-user/logged-user.component';


@NgModule({
  declarations: [MenuComponent, LoggedUserComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class LayoutModule { }
