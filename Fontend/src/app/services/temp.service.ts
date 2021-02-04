import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempService {
  quizData:any
  constructor(public httpClient:HttpClient) { }
  async getQuiz(){
    try {
      this.quizData = await this.httpClient.get(`http://127.0.0.1:7009/?category=Vehicles&amount=10`).toPromise()
    console.log(this.quizData)
    return this.quizData['quiz']
    } catch (error) {
      console.log(error)
    }}
    
}
