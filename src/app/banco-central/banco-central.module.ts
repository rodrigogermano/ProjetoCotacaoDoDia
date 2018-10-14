import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { BancoCentralComponent } from './banco-central.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    BancoCentralComponent
  ],
  exports: [
    BancoCentralComponent
  ]
})
export class BancoCentralModule { }


