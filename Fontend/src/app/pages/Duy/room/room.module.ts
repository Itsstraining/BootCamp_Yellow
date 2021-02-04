import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PlayerlistComponent } from './components/playerlist/playerlist.component';
import { PlayerComponent } from './components/player/player.component';
@NgModule({
  declarations: [RoomComponent, PlayerlistComponent, PlayerComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class RoomModule {}
