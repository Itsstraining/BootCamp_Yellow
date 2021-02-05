import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private httpClient: HttpClient, private userService: UserService) {}
  room = null;
  async createRoom(category, owner, quantity) {
    try {
      await this.httpClient
      .post('http://127.0.0.1:7009/room', {
        category: category,
        owner: owner,
        quantity: quantity,
      })
      .toPromise()
      .then((e) => {
        console.log(e);
      });
    } catch (error) {
      console.log(error)
    }
    
    //console.log(this.data)
  }
  async getRoom(owner) {
    try {

      await this.httpClient
      .get('http://127.0.0.1:7009/room?owner='+owner, {

      })
      .toPromise()
      .then((e) => {
        this.room = e
        this.room['ownerName']= this.userService.user.displayName
        console.log(this.room)

      });
    } catch (error) {
      console.log(error)
    }
    
    //console.log(this.data)
  }
}
