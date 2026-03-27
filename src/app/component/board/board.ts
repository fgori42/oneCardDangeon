import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../model/hero';
import { Enemy } from '../../model/enemy';

@Component({
  selector: 'app-board',
  imports: [CommonModule],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
interface Wall{
  x: number;
  y: number;
}
export class Board {
  size: number[] = [5, 5];
  walls: Array<Wall> = [];
  startPosition: number[] = [0, 0];
  hero: Hero = new Hero(this.startPosition)
  constructor(wallsPos : Wall[], isInGAme: boolean){ 
    if (isInGAme){
    wallsPos.forEach(wall => {
      this.walls.push(wall);
    });}
  }

}
