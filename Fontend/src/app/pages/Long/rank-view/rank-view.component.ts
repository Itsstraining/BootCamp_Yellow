import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rank-view',
  templateUrl: './rank-view.component.html',
  styleUrls: ['./rank-view.component.scss']
})
export class RankViewComponent implements OnInit {
  data = [
    {name: 'Hydrogen', score: 1 , position: '1', value: 9},
    {name: 'Helium', score: 4, position: '2', value: 8},
    {name: 'Lithium', score: 6, position: '3', value: 7},
    {name: 'Beryllium', score: 9, position: '4', value: 6},
  ];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.data = this.userService.data
  }

}
