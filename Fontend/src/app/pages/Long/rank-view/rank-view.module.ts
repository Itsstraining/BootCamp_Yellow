import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankViewRoutingModule } from './rank-view-routing.module';
import { RankViewComponent } from './rank-view.component';


@NgModule({
  declarations: [RankViewComponent],
  imports: [
    CommonModule,
    RankViewRoutingModule
  ]
})
export class RankViewModule { }
