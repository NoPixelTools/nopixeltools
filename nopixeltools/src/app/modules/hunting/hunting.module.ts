import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuntingRoutingModule } from './hunting-routing.module';
import { HuntingComponent } from './hunting.component';


@NgModule({
  declarations: [
    HuntingComponent
  ],
  imports: [
    CommonModule,
    HuntingRoutingModule
  ]
})
export class HuntingModule { }
