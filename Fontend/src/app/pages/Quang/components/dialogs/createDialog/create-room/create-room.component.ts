import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RoomService } from 'src/app/services/room.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
numberPlayer = 0;
category = "";
  constructor(
    private dataService:DataService,
    private roomService: RoomService,
    private userService: UserService,
    public dialogRef: MatDialogRef<CreateRoomComponent>,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  async createRoom(){
    this.dataService.getCat(this.category)
    if(!this.numberPlayer || !this.category ){
      return;
    }
    await this.roomService.createRoom(this.category,this.userService.user.uid,this.numberPlayer)
    await this.roomService.getRoom(this.userService.user.uid)

    this.router.navigate(['room']);
  }
  changePlayer(value){
    this.numberPlayer = value
  }
  changeCate(value){
    this.category = value;
  }


}

