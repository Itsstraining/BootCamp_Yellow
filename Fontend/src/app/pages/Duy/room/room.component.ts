import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  public players = [
    'duy',
    'long',
    'kiet',
    'quang',
    'duc',
    // 'P2',
    // 'P3',
    // 'P4',
    // 'P5',
    // 'P6',
    // 'P7',
    // 'P8',
    // 'P9',
    // 'P10',
    // 'P11',
    // 'P12',
    // 'P13',
    // 'P14',
    // 'P15',
    // 'P16',
    // 'P17',
    // 'P18',
    // 'P19',
    // 'P20',
  ];
  public player;
  constructor() {}
  add() {
    this.players = this.player;
  }
  ngOnInit(): void {}
}
