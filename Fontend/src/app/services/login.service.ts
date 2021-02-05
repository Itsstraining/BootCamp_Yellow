import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public router: Router) {}
  public user = null;

  getUser(user) {
    return (this.user = user);
  }
}
