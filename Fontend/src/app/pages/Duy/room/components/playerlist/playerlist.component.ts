import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.scss'],
})
export class PlayerlistComponent implements OnInit {
  constructor(public player: LoginService) {}

  playerList: Array<Player> = [
    // {
    //   name: 'Long',
    // },
    // { name: 'Kiệt' },
    // { name: 'Quang' },
    // {
    //   name: 'Đức',
    // },
  ];

  ngOnInit(): void {}
}
