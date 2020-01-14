import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {CategoriaComponentsModule} from './components/categoria-components/categoria-components.module';
import {HttpClientModule} from '@angular/common/http';
import {EventoComponentsModule} from './components/evento-components/evento-components.module';
import {PessoaComponentsModule} from './components/pessoa-components/pessoa-components.module';
import { LayoutModule } from './layout/layout.module';
import { AppService } from './app.service';

export function getData(appService: AppService) {
  return () => appService.load();
}

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
    PessoaComponentsModule,
    LayoutModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: getData, deps: [AppService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
