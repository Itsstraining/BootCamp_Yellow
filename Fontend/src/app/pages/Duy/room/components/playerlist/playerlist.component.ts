import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.scss'],
})
export class PlayerlistComponent implements OnInit {
  constructor() {}

  playerList: Array<Player> = [
    {
      name: 'duy',
    },
    { name: 'long' },
    { name: 'quang' },
    { name: 'duc' },
  ];

  ngOnInit(): void {}
}
