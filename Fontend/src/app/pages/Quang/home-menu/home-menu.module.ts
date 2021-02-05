import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMenuRoutingModule } from './home-menu-routing.module';
import { HomeMenuComponent } from './home-menu.component';
import { CreateRoomComponent } from '../components/dialogs/createDialog/create-room/create-room.component';
import { JoinRoomComponent } from '../components/dialogs/joinDialog/join-room/join-room.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomeMenuComponent, CreateRoomComponent, JoinRoomComponent],
  imports: [
    CommonModule,
    HomeMenuRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ]
})
export class HomeMenuModule { }
