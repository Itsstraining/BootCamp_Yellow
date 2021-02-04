import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankViewRoutingModule } from './rank-view-routing.module';
import { RankViewComponent } from './rank-view.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [RankViewComponent],
  imports: [
    CommonModule,
    RankViewRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ]
})
export class RankViewModule { }
