

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})



export class DataService {
  public data:any;
  durationInSeconds = 1;
  constructor(private httpClient: HttpClient,public snackBar: MatSnackBar) { }

  async getData(){
    this.data = await this.httpClient.get("http://127.0.0.1:7009/?category=Vehicles&amount=10").toPromise()
    //console.log(this.data)
    return this.data['quiz']
  }

  async fires(){
    this.data.forEach(function(obj){
      
    });
  }
  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  public showSnackbarTrue(val: string): void {
    this.snackBar.open(`${val} `, '✔️', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  public showSnackbarFalse(val: string): void {
    this.snackBar.open(`${val} `, 'x', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
  
}

