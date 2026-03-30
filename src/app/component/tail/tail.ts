import { Component, inject, Input, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TailState, TailContent } from '../../model/tail-enums';
import { BoardService } from '../../service/board-service';

@Component({
  selector: 'app-tail',
  imports: [CommonModule],
  templateUrl: './tail.html',
  styleUrl: './tail.scss',
})
export class Tail {
  // @Input() state: TailState = 0;
  @Input() content: TailContent = 0;
  @Input() x: number = 0;
  @Input() y: number = 0;

  private boardService = inject(BoardService);

  state: TailState = TailState.free;
  color: string = 'burlywood';

  public get states() { return TailState; }
  public get contents() { return TailContent; }

  isInMovementRange = computed(() =>
    this.boardService.movementRange().has(`${this.x},${this.y}`)
  );
  isInAttackRange = computed(() =>
    this.boardService.attackRange().has(`${this.x},${this.y}`)
  );

  onMouseEnter(): void {
    this.boardService.setHovered(this.x, this.y, this.content);
  }

  onMouseLeave(): void {
    this.boardService.clearHovered();
  }

  ngOnInit(): void {
    switch (this.content) {
      case TailContent.wall:
        this.color = 'brown';
        break;
      case TailContent.enemy:
        this.color = 'red';
        break;
      case TailContent.hero:
        this.color = 'green';
        break;
      case TailContent.free:
        this.color = 'burlywood';
        break;
      default:
        this.color = 'black';
    }
  }

}
