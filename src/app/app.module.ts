import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BancoCentralModule } from './banco-central/banco-central.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BancoCentralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
