import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TailState, TailContent } from '../../model/tail-enums';

@Component({
  selector: 'app-tail',
  imports: [CommonModule],
  templateUrl: './tail.html',
  styleUrl: './tail.scss',
})
export class Tail {
  @Input() state: TailState = 0;
  @Input() content: TailContent = 0;
  color: string = 'black';

  public get states() { return TailState; }
  public get contents() { return TailContent; }

  ngOnInit(): void {
    switch (this.content) {
      case TailContent.wall:
        
        break;
      default:

    }
  }

}
