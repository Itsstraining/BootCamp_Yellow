import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { Player } from './models/player.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  userKey = null;

  ngOnInit(): void {}
  constructor(private roomService: RoomService){
    this.userKey = roomService.room
  }
}
