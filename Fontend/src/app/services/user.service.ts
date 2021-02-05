import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  data = [
    {
      name: 'Hydrogen',
      score: 0,
      position: '1',
      question: '9 question',
      value: 0,
    },
    {
      name: 'Helium',
      score: 0,
      position: '2',
      question: '8 question',
      value: 0,
    },
    {
      name: 'Lithium',
      score: 0,
      position: '3',
      question: '7 question',
      value: 0,
    },
    {
      name: 'Beryllium',
      score: 0,
      position: '4',
      question: '6 question',
      value: 0,
    },
    {
      name: 'Boron',
      score: 0,
      position: '5',
      question: '5 question',
      value: 0,
    },
    {
      name: 'Carbon',
      score: 0,
      position: '6',
      question: '4 question',
      value: 0,
    },
    {
      name: 'Nitrogen',
      score: 0,
      position: '7',
      question: '3 question',
      value: 0,
    },
    {
      name: 'Oxygen',
      score: 0,
      position: '8',
      question: '2 question',
      value: 0,
    },
    {
      name: 'Fluorine',
      score: 0,
      position: '9',
      question: '1 question',
      value: 0,
    },
  ];
  constructor(private httpClient: HttpClient) {}

  async createUser(displayName, email, photoURL, uid) {
    await this.httpClient
      .post('http://127.0.0.1:7009/user', {
        displayName: displayName,
        email: email,
        photoURL: photoURL,
        id: uid,
      })
      .toPromise()
      .then((e) => {
        console.log(e);
      });
    //console.log(this.data)
  }
}
