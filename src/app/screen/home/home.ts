import { Component, ViewEncapsulation } from '@angular/core';
import { Board } from '../../component/board/board';
import { Enemy } from '../../model/enemy';

@Component({
  selector: 'app-home',
  imports: [Board],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.None 
})
export class Home {

   walls = [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 3, y: 3 },
    { x: 0, y: 4 },
  ];

  enemies = [
    new Enemy([2, 2]),
    new Enemy([4, 4]),
  ];

  heroPosition = [0, 0];
  size = 5;
}
