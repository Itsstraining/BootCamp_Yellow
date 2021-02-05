import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import * as firebase from 'firebase';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    public auth: AngularFireAuth,
    public router: Router,
    public player: LoginService
  ) {}
  public user = null;
  async login() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    try {
      await this.auth.signInWithPopup(provider);

      if (this.user.uid != null) {
        this.userService.createUser(
          this.user.displayName,
          this.user.email,
          this.user.photoURL,
          this.user.uid
        );
      }
      this.router.navigate(['menuhome']);
    } catch (err) {
      alert(err);
    }
  }

  ngOnInit(): void {
    this.auth.authState.subscribe((auth) => {
      if (this.user == null) {
        this.user = auth;
        this.player.getUser(this.user);
      }
    });
  }
  ngOnDestroy(): void {
    this.user = null;
  }
}
