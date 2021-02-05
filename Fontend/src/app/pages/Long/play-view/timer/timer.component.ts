import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() newTimeOutEvent = new EventEmitter<boolean>();
  @Output() newAnswerEvent = new EventEmitter<boolean>();
    public time = 11
  @Input() public check: boolean;

  @Input() public numOfQuestion: number;
  ngOnInit() {
    this.downTime()
  }

  ngOnDestroy() {
  }


  downTime() {
    if (this.check == true) {
      this.check = !this.check
      this.newAnswerEvent.emit(false);
      this.time=11
      this.downTime()
      return
    }
    this.time--
    if (this.time != 0) {
      setTimeout(() => {
        return this.downTime()
      }, 1000)
    } else if (this.time == 0) {
      if (this.numOfQuestion == 9) {
        this.time = 0;
        return;
      }
      this.time = 10;
      this.newTimeOutEvent.emit(true);
      
      setTimeout(() => {
        return this.downTime()
      }, 1000)
    }

  }

}