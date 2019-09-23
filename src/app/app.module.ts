import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {CategoriaComponentsModule} from './components/categoria-components/categoria-components.module';
import {HttpClientModule} from '@angular/common/http';
import {EventoComponentsModule} from './components/evento-components/evento-components.module';
import {PessoaComponentsModule} from './components/pessoa-components/pessoa-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CategoriaComponentsModule,
    HttpClientModule,
    EventoComponentsModule,
    PessoaComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
