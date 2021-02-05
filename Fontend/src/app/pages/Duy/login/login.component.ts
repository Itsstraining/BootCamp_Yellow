import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AngularFireAuth, public router: Router) {}
  public user = null;
  async login() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    try {
      await this.auth.signInWithPopup(provider);
      this.router.navigate(['menuhome']);
    } catch (err) {
      alert(err);
    }
  }

  ngOnInit(): void {
    this.auth.authState.subscribe((auth) => {
      if (this.user == null) {
        this.user = auth;
      }
    });
  }
}
