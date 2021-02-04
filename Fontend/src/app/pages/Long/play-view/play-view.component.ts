import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-play-view',
  templateUrl: './play-view.component.html',
  styleUrls: ['./play-view.component.scss']
})

export class PlayComponent implements OnDestroy,OnInit {
  mobileQuery: MediaQueryList;
  public data;
  public answer:Array<any>;
  fillerNav = Array.from({length: 20}, (_, i) => `Player ${i + 1}`+ ":" + " 10");

  // fillerContent = Array.from({length: 10}, () =>
  //     `Player 1`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private quizData:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  public question:any;
  public num = 0
  async ngOnInit(){
    if (this.data==null) {
      await this.getAllItems()
    }
    console.log(this.data)
    this.getQuiz(this.num)
    
  }
  async getAllItems(){
    return this.data = await this.quizData.getData();
  }

  
  async getQuiz(num){
    if (!this.data[num]) {
      this.num = num -1
      return
    }
    this.question = this.data[num]
    console.log(this.question)
    this.question['incorrect_answers'].push(this.question['correct_answer'])
    this.quizData.shuffle(this.question['incorrect_answers'])
    console.log(this.question)
  }

  
  isAnswer = false
  checkAnswer(answer){
    
    if (answer == this.question['correct_answer']) {
      this.quizData.showSnackbarTrue("Correct Answer")
      this.num = this.num+1
      this.getQuiz(this.num)
      this.isAnswer = true;
    }else{
      this.quizData.showSnackbarFalse("Wrong Answer")
      this.num = this.num+1
      this.getQuiz(this.num)
      this.isAnswer = true;
    }

  }

  public isTimeOut = false;
  isAns(Ans: boolean) {
    //
    this.isAnswer = Ans;

  }

  timeOut(timeOut:boolean){
    this.isTimeOut = timeOut;
    console.log(this.isTimeOut)
    this.num = this.num+1
    this.getQuiz(this.num)
  }
  
  
  // async getAnswer(){
  //   this.answer.push(this.data[0].correct_answer)
  //   for (let i = 0; i < this.data[0].incorrect_answers.length; i++) {
  //       this.answer.push(this.data[0].incorrect_answers[i])
  //   }
  //   console.log(this.answer)
  //   return this.answer
  // }
}
