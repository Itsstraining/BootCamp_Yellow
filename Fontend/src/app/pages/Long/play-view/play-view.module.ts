import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayViewRoutingModule } from './play-view-routing.module';
import { PlayViewComponent } from './play-view.component';


@NgModule({
  declarations: [PlayViewComponent],
  imports: [
    CommonModule,
    PlayViewRoutingModule
  ]
})
export class PlayViewModule { }
