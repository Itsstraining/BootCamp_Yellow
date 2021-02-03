import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  public players = [
    'P1',
    'P2',
    'P1',
    'P2',
    'P1',
    'P2',
    'P1',
    'P2',
    'P1',
    'P2',
    'P1',
    'P2',
    'P1',
    'P2',
    'P1',
    'P2',
    'P1',
    'P2',
    'P1',
    'P2',
  ];
  constructor() {}

  ngOnInit(): void {}
}
