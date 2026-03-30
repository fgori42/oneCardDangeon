import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../model/hero';
import { Enemy } from '../../model/enemy';
import { Tail } from '../tail/tail';
import { TailState, TailContent } from '../../model/tail-enums';

interface Wall{
  x: number;
  y: number;
}

@Component({
  selector: 'app-board',
  imports: [CommonModule, Tail],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board implements OnInit {
 @Input() walls: Array<Wall> = [];
 @Input() enemies: Array<Enemy> = [];
 @Input() heroPosition: number[] = [0, 0];
 @Input() maxSize: number = 5;

  floor: number[][] = [];
  hero!: Hero;

  ngOnInit(): void {
    this.floor = Array.from({ length: this.maxSize }, () => Array(this.maxSize).fill(TailContent.free));
    this.hero = new Hero(this.heroPosition);
    const wallSet = new Set(this.walls.map(w => `${w.x},${w.y}`));
    const enemySet = new Set(this.enemies.map(e => `${e.position[0]},${e.position[1]}`));

    for (let i = 0; i < this.maxSize; i++) {
      for (let j = 0; j < this.maxSize; j++) {
        if (wallSet.has(`${i},${j}`)) {
          this.floor[i][j] = TailContent.wall;
        } else if (enemySet.has(`${i},${j}`)) {
          this.floor[i][j] = TailContent.enemy;
        } else if (this.heroPosition[0] === i && this.heroPosition[1] === j) {
          this.floor[i][j] = TailContent.hero;
        }
      }
    }
  }
  getCellState(i: number, j: number): TailState {
  // per ora tutto free, qui ci metterai la logica di movimento/raggio
    return TailState.free;
  }
  public get tailContent() { return TailContent; }
}

