import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTempRoutingModule } from './home-temp-routing.module';
import { HomeTempComponent } from './home-temp.component';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [HomeTempComponent],
  imports: [
    CommonModule,
    HomeTempRoutingModule,
    MatExpansionModule
  ]
})
export class HomeTempModule { }
