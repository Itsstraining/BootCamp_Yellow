import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayViewRoutingModule } from './play-view-routing.module';
import { PlayComponent } from './play-view.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [PlayComponent, TimerComponent],
  imports: [
    CommonModule,
    PlayViewRoutingModule,
    MatSidenavModule,
   
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
  ]
})
export class PlayViewModule { }
