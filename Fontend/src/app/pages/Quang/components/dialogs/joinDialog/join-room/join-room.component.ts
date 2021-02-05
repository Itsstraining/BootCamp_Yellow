import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { NgModule } from '@angular/core';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})

export class JoinRoomComponent {

  constructor(
    public dialogRef: MatDialogRef<JoinRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private httpClient: HttpClient,
    private userService: UserService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  closeDialog() {
    this.dialogRef.close('');
  }
  rid = ''
  change(data) {
    console.log(data)
  }

  async join() {
    console.log(this.userService.user.uid)
    await this.httpClient.put('http://127.0.0.1:7009/room/join', {
      rid: this.rid,
      uid: this.userService.user.uid
    }).toPromise()

    let users = await this.userService.getUsers()
    console.log(users)
  }
}
