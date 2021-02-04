import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank-view',
  templateUrl: './rank-view.component.html',
  styleUrls: ['./rank-view.component.scss']
})
export class RankViewComponent implements OnInit {
  data = [
    {name: 'Hydrogen', score: 1 , position: '1', question: '9 question', value: 9},
    {name: 'Helium', score: 4, position: '2', question: '8 question', value: 8},
    {name: 'Lithium', score: 6, position: '3', question: '7 question', value: 7},
    {name: 'Beryllium', score: 9, position: '4', question: '6 question', value: 6},
    {name: 'Boron', score: 10, position: '5', question: '5 question', value: 5},
    {name: 'Carbon', score: 8, position: '6', question: '4 question', value: 4},
    {name: 'Nitrogen', score: 7, position: '7', question: '3 question', value: 3},
    {name: 'Oxygen', score: 3, position: '8', question: '2 question', value: 2},
    {name: 'Fluorine', score: 2, position: '9', question: '1 question', value: 1},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
