import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {


  public time = 61

  ngOnInit() {
    this.downTime()
  }

 ngOnDestroy() {
 }

 downTime(){
  this.time --
  if(this.time!=0)
    setTimeout(()=>this.downTime(),1000)
 }

}