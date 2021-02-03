import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMenuRoutingModule } from './home-menu-routing.module';
import { HomeMenuComponent } from './home-menu.component';
import { CreateRoomComponent } from '../components/dialogs/createDialog/create-room/create-room.component';
import { JoinRoomComponent } from '../components/dialogs/joinDialog/join-room/join-room.component';

@NgModule({
  declarations: [HomeMenuComponent, CreateRoomComponent, JoinRoomComponent],
  imports: [
    CommonModule,
    HomeMenuRoutingModule
  ]
})
export class HomeMenuModule { }
